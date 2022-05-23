# web-react

web-react tutorial 은 front-end 를 스터디하기 위한 프로젝트이다. tutorial(client app) 을 실행하기 위해서는 server 가 우선적으로 실행되어야 한다. server 는 [web-nodejs tutorial](https://github.com/dev-heeseok/web-nodejs) 을 통해 확인할 수 있다.

## Quick Start

```sh
# [server - web-nodejs]

## ${server-folder}/.env 생성 후 DATABASE_ACCESS 추가
## DATABASE_ACCESS 는 mongoDB access_key 이다.
type nul >> .env

## install node modules
npm i

## web-nodejs server 실행
npm run start 

# [client - web-react]

## install node modules
npm i

## web-react client 실행
npm run start

## web browser 를 이용하여 url 접속
localhost:3000
```

## Language

React, Node.js, javascript, HTML, CSS, Bootstrap

## Environment

### Visual Studio Code 설치

React 를 개발할 때에 사용되는 다양한 IDE (Integrated Development Environment) 이 존재한다. 그 중에서 개발자들이 가장 많이 사용하고 있는 Visual Studio Code (VS Code) 를 이용하여 개발환경을 구성해보려 한다.

[VS Code](https://code.visualstudio.com/) 홈페이지에 들어가면 설치 프로그램을 다운 받을 수 있다. VS Code 는 개발에 필요한 Extention 들을 무료로 다운 받을 수 있다. 이중에서 자주 사용하는 Extention 들은 미리 설치하여 쾌적한(?) 개발환경을 구성해보려 한다.

#### Extentions

```txt
GitLens,
GitGraph,
HTML CSS Support
HTML Snippets,
JS JSX Snippets,
Simple React Snippets,
REST Client,
ESLint,
Code Runner,
Auto Close Tag,
Auto Rename Tag,
ES7+ React/Redux/React...
```

#### ES7+ React/Redux/React-Native snippets Shortcuts

snippets 에서 자주 사용하는 shortcuts

```sh
rce # react class export component
rafce # react arrow-function export component
```

#### Shotcut

```txt
alt + shift + f : 라인 정렬 
ctrl + ` : terminal toggle
ctrl + shift + ` : add terminal
```

### Node.js 설치

NPM(Node Package Manager) 은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. 학습에 필요한 패키지는 NPM 을 (yarn 을 이용해도 된다.) 이용하여 다운받으면 된다.

[Node.js](https://nodejs.org/ko/) 홈페이지를 들어가면 설치 프로그램을 다운 받을 수 있다. 현재 기준으로('22.04.26) 최신 버전인 v16.14.2 LTS 를 다운 받아 설치하면 NPM 도 설치가 완료된다.

정상적으로 프로그램이 설치가 되면 cmd 창을 이용하여 version 확인 및 Node.js 를 이용한 프로그램 테스트가 가능하다.

```cmd
// version 확인
node -v

// Node.js 프로그램 테스트
node  // node 실행
1 + 1 // node 를 이용한 사칙연산 테스트
```

### create-react-app 패키지 설치

react 가 다양한 브라우저에서 동작하기 위해서는 webpack, babel 등 다양한 패키지를 이용하여 환경설정이 필요하다. 이러한 환경설정을 패키지를 통해 하나의 명령으로 실행할 수 있는 기능이 create-react-app 이다.

npm 을 이용하여 create-react-app 패키지를 설치하고 react app 을 생성할 폴더를 지정해주면 개발환경이 구성된다. 개발환경 설정이 정상적으로 수행되면 npm start 명령어를 이용하여 서비스를 실행하여 app 을 확인할 수 있다.

```cmd
// 패키지 다운
npm create-react-app

// App Initial Setting
create-react-app ${react-app-folder}

// 서비스 실행 후 web browser 를 이용하여 app 실행 (개발자 모드)
npm run start
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

# react-router-dom 설치 및 package 추가 (tutorial 용)
npm install react-router-dom

# redux, react-redux 설치 및 package 에 추가 (tutorial 용)
npm install redux react-redux

# gh-pages (deploy 용)
npm install gh-pages
```

## How to use

개발자 버전으로 서비스를 실행하게 되면 불필요한 옵션으로 인해 용량이 커지거나 보안적인 문제가 발생할 수 있다. 배포를 위한 Application 은 build 옵션을 이용하여 최적화된 상태로 서비스를 해야만 한다. build 된 application 은 npm 에서 제공하고 있는 serve 패키지를 이용하여 웹 서비스를 수행 할 수 있다.

```cmd
// Application Build
npm run build

// Application Service Package Install
npm install -g serve

// Application Service Start
serve -s ${application-root-folder}
```

***serve 사용 시 검토 사항***

Hosting 을 위해 package.js 에 homepage 를 지정한 경우, ```serve -s ${application-root-folder}``` 를 이용하면 화면이 보이지 않을 수 있다. homepage 를 제거 후 서비스를 재실행 하면 화면이 정상적으로 동작한다.  

## Github Pages Hosting

React Application 은 Github Pages 를 이용하여 정적인 페이지 서비스를 시작할 수 있다. 서비스를 수행하기 위해서는 gh-pages 패키지가 필요하며, 페이지를 호스팅 하기 위해서는 별도의 root branch 가 필요하다. Github 에서는 기본값으로는 gh-pages branch 로 설정되어 있다. tutorial 에서도 gh-pages branch 를 이용하여 서비스를 실행 할 예정이다. 서비스가 시작되면 https://dev-heeseok.github.io/web-react/ 를 통해 작성한 React Application 을 확인할 수 있다. 

### Github Repository 설정하기

Setting > Pages 에서 gh-pages branch 를 서비스 하도록 설정해야 한다. 서비스의 상태 및 진행 사항을 확인하는 방법은 Action 의 workflows 를 통해 확인할 수 있다. 

#### 패키지 설치

```cmd
// gh-pages 패키지 설치
npm install --save gh-pages
```

#### Property 설정하기

```json
// Package.json 에 아래 항목 추가
{
    "hompage": "https://${user-name}.github.io/${repository-name}/",
    "scripts": {
        "predeploy": "npm run build",
        "deploy", "gh-pages -d build"
    }
}
```
#### 환경설정

Settings > Pages 에서 gh-pages branch 를 이용하여 페이지를 호스팅 할 수 있도록 설정을 변경 후 데이터를 저장해야 한다. gh-pages branch 는 deploy 를 실행하면 Github 가 branch 를 생성해 준다. 

![image](https://user-images.githubusercontent.com/97526196/165783992-5bfb25db-b842-423d-9bc1-027d4c06b77e.png)

#### Deploy

Deploy 를 실행하면 Application 의 Build 가 수행된다. Build 가 완료되면 gh-pages branch 가 생성 (branch 가 없다면) 되며 Build 된 Application File 들이 자동으로 Update 된다.

```cmd
npm run deploy
```

![image](https://user-images.githubusercontent.com/97526196/169828168-c09a1727-6ddc-433b-a348-768a69edccec.png)

## Sample Codes

***Unknown***

## References

- [생활코딩 WEB1 HTML & Internet](https://youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb)
- [생활코딩 WEB2 CSS](https://youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B)
- [생활코딩 WEB2 JavaScript](https://youtube.com/playlist?list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf)
- [생활코딩 JavaScript Object Oriented Programming](https://youtube.com/playlist?list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3)
- [생활코딩 node.js](https://youtube.com/playlist?list=PLfs-6fkBBhmh17wuQpoO7ZUhueyLa4wSY)
- [생활코딩 React](https://youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)
- [생활코딩 React 2022 개정판](https://youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7)
- [생활코딩 React class vs function style](https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj)
- [생활코딩 JavaScript Immutability](https://youtube.com/playlist?list=PLuHgQVnccGMBxNK38TqfBWk-QpEI7UkY8)
- [생활코딩 Redux](https://youtube.com/playlist?list=PLuHgQVnccGMB-iGMgONoRPArZfjRuRNVc)
- [생활코딩 React Redux](https://youtube.com/playlist?list=PLuHgQVnccGMDuVdsGtH1_452MtRxALb_7)
- [Poiemaweb Bootstrap](https://poiemaweb.com/)
