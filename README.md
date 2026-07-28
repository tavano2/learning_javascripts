브라우저에서 성공한 호출 : http://cloud-rms--crms-backend-prod.khprdpb01.apps.dks.samsungds.net/v2/rms/objectstorage/list
방화벽 뚫은 ip로 변경해서 호출 (404) : http://10.172.25.218/v2/rms/objectstorage/list
서비스에서 호출하고 있는 url :
restapi:
  prefix: /restapi/v1
  mappingSvc:
    data:
      ip: cloud-rms--crms-backend-prod.khprdpb01.apps.dks.samsungds.net:80
      path: /restapi/v1/data/**

백엔드 올려주는 솔루션에서 실행시키는 k8s 인그레스
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cloud-rms--crms-backend-prod-ing
  labels:
    productgroupid: cloud-rms
    productid: crms-backend-prod
    app: cloud-rms--crms-backend-prod
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: cloud-rms--crms-backend-prod.khprdpb01.apps.dks.samsungds.net
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: cloud-rms--crms-backend-prod-svc
                port:
                  number: 80
  tls: []

  
