# web-react

front-end 스터디를 진행하면서 필요한 샘플 및 웹 어플리케이션 제작을 위한 프로젝트이다.

## Language

React, Node.js, javascript, jQuery, HTML, CSS

## Environment

### Visual Studio Code 설치

React 를 개발할 때에 사용되는 다양한 IDE (Integrated Development Environment) 이 존재한다. 그 중에서 개발자들이 가장 많이 사용하고 있는 Visual Studio Code (VS Code) 를 이용하여 개발환경을 구성해보려 한다.

[VS Code](https://code.visualstudio.com/) 홈페이지에 들어가면 설치 프로그램을 다운 받을 수 있다. VS Code 는 개발에 필요한 Extention 들을 무료로 다운 받을 수 있다. 이중에서 자주 사용하는 Extention 들은 미리 설치하여 쾌적한(?) 개발환경을 구성해보려 한다.

#### Extentions

```txt
GitLens,
ESLint,
Code Runner,

```

#### Shotcut

```txt
alt + shift + f : 라인 정렬 

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

// 서비스 실행 후 web browser 를 이용하여 app 실행
npm start
```

## How to use

***Unknown***

## Sample Codes

***Unknown***

## References

- [생활코딩 WEB1 HTML & Internet](https://youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb)
- [생활코딩 WEB2 CSS](https://youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B)
- [생활코딩 WEB2 JavaScript](https://youtube.com/playlist?list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf)
- [생활코딩 JavaScript Object Oriented Programming](https://youtube.com/playlist?list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3)
- [생활코딩 node.js](https://youtube.com/playlist?list=PLfs-6fkBBhmh17wuQpoO7ZUhueyLa4wSY)
- [생활코딩 React](https://youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)
