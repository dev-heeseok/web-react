# web-react

web-react tutorial 은 front-end 를 스터디하기 위한 프로젝트이다. tutorial(client app) 을 실행하기 위해서는 server 가 우선적으로 실행되어야 한다. server 는 [web-nodejs](https://github.com/dev-heeseok/web-nodejs) 의 tutorial-express-signup branch 를 참고하면 된다.

## Language

React, Node.js, TypeScript, javascript, HTML, CSS, Bootstrap

## Documentation

tutorial-react-signup 은 React 를 이용하여 Signup 에 필요한 값을 입력하고 Sever 에 데이터를 전달할 수 있도록 개발되었다.

### http-proxy-middleware 사용하기

CORS 정책에 따른 보안상의 이유로 Client-Server 와 통신을 할 때에는 동일한 호스트의 데이터만 요청할 수 있다. React 는 Back-End 서버와 통신을 하기 위해 Proxy 를 제공하고 있으며, 이를 통해 back-end 서버도 통신을 할 수 있다.

Proxy 를 사용하는 방법은 주로 2가지 방법이 존재한다. 첫번째로는 create-react-app 으로 project 를 생성했을 때에 package.json 에 proxy 정보를 직접 할당하는 방법이다. 두번째로는 http-proxy-middleware 를 사용하는 방법이다. 이번 Tutorial 에서는 http-proxy-middleware 를 사용하고 있다.

```json
// package.json 을 이용한 proxy 옵션 추가
{
  ...

  "proxy": "http://localhost:4000"

  ...
}
```

```js
// src/setupProxy.js 를 이용하여 http-proxy-middleware 사용하기
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("setProxy : proxy component");
  app.use(
    createProxyMiddleware("/app", {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
```

## Getting started

### Client Build & Start

```sh
# [client - web-react]

## install node modules
npm i

## client build start
npm run build

## static server start
npm start

## link url
http://localhost:3001
```

### Server

```sh
# [server - web-nodejs]

## ${server-folder}/.env 생성 후 DATABASE_ACCESS 추가
## DATABASE_ACCESS 는 mongoDB access_key 이다.
type nul >> .env

## install node modules
npm i

## copy to server/public/build
copy ${client-build-folder} ./public

## server start
npm run start
```

## References

- [web-nodejs](https://github.com/dev-heeseok/web-nodejs)
