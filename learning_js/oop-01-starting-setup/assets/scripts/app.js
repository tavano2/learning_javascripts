class Product {
  // 클래스 안에서는 등호로 값을 지정한다.
  // 세미콜론으로 코드 라인을 끝낸다
  // 클래스 내부에서는 필드로 불리지만 클래스를 인스턴스화 시켰을시 속성이라고 불린다.
  // 생성자 메소드를 추가 했을시에는 아래와 같이 굳이 초기화를 해주지 않아도 된다.
  // 추후 초기화하지 않는 필드를 다룰 때 중요해진다.
  // title = "DEFAULT";
  // imgeUrl;
  // description;
  // price;

  // 생성자 메소드
  constructor(title, image, desc, price) {
    this.title = title;
    this.imgeUrl = image;
    this.description = desc;
    this.price = price;
  }
}


class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}


class Component {

  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price
        , 0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProducts() {
    console.log('Ordering...');
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart')
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', () => this.orderProducts());
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
                <div> 
                    <img src="${this.product.imgeUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component{
  _products = [];
  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this._products = [
      new Product("A Pillow", "test.jpg", "A soft Pillow", 19.99),
      new Product(
          "A Carpet",
          "test2.jpg",
          "A Carpet which you might like - or not.",
          89.99
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this._products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  render() {
    const prodList = this.createRootElement('ul', 'product-list'
        , [new ElementAttribute('id', 'prod-list')]);

    if (this._products && this._products.length > 0) {
      this.renderProducts();
    }
  }
}

// 클래스는 순서와 상관 없이 코딩해도 되지만
// 실행할 객체 코드 이전에는 생성해야 함을 기억하자.

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

