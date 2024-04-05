class Product {
  // 클래스 안에서는 등호로 값을 지정한다.
  // 세미콜론으로 코드 라인을 끝낸다
  // 클래스 내부에서는 필드로 불리지만 클래스를 인스턴스화 시켰을시 속성이라고 불린다.
  title = "DEFAULT";
  imgeUrl;
  description;
  price;

  // 생성자 메소드
  constructor(title, image, desc, price) {
    this.title = title;
    this.imgeUrl = image;
    this.description = desc;
    this.price = price;
  }
}

// 객체 리터럴 표기법
const productList = {
  products: [
    new Product("A Pillow", "test.jpg", "A soft Pillow", 19.99),
    new Product(
      "A Carpet",
      "test2.jpg",
      "A Carpet which you might like - or not.",
      89.99
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
                <div> 
                    <img src="${prod.imgeUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
