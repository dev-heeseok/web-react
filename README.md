# React-Bootstrap

React-Bootstrap based web application

## Language

React, Bootstrap, JavaScript, jQuery, HTML, CSS

## Environment

React-Bootstrap 을 사용하기 위해서 필요한 환경설정, 모듈 및 link/import 를 정리하였다. 아래의 순서에 따라 환경을 설정하고 필요한 Component 를 검색하여 Sample Code 를 복사하면 손쉽게 Bootstrap 을 사용할 수 있다. 

### ToolChains

[Create React App](https://en.reactjs.org/docs/create-a-new-react-app.html#create-react-app) 을 이용하여 react 의 기본 환경을 설정한다.

```sh
cd ${react-bootstrap-folder}
npx create-react-app . # react environment
npm run start # app start
```

### Bootstrap CDN

[React-Bootstrap Getting Started](https://react-bootstrap.github.io/getting-started/introduction/) 를 참고하여 cdn 방식으로 bootstrap stylesheet 를 link 한다.

```html
<!--index.html 에 cdn link 추가 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
```

#### Bootstrap CSS import

```js
// index.js 에 bootstrap.css 를 추가
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Module 추가

Bootstrap 을 사용하기 위해 필요한 Module 을 다운 받아야 한다. 설치하는 모듈은 Tutorial 및 Deploy 를 하기 위해 설치하는 것으로 필요에 따라 선택적으로 설치를 하면 된다.

```sh
# react-bootstrap, bootstrap 
npm install react-bootstrap bootstrap

# react-router-dom (tutorial 용)
npm install react-router-dom

# gh-pages (deploy 용)
npm install --save gh-pages
```

### VS Code Extention 추가

React 를 개발에 도움을 줄 수 있는 Extension 을 설치하면 개발의 편의성을 향상 시킬 수 있다. 필수로 설치해야 하는 것이 아니기 때문에 선택적으로 설치하면 된다. 

```sh
# Extension 에서 React 를 입력하면 나온다.
- ES7+ React/Redux/React-Native snippets
- Simple React Snippets
```

## Reference

- [Poiemaweb Bootstrap](https://poiemaweb.com/)
