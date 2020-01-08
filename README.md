# the-palette
React Color & Pattern Palette Project
- api server : nodejs를 이용하여 간단한 API서버를 직접 구현해봄. Test Framework는 Mocha 사용
- web server : react를 이용하여 뷰단 개발. Test Framework는 Jest사용

# References

## Project Structure
- https://github.com/clintonwoo/hackernews-react-graphql
- https://github.com/mikepro4/react-signup-form

## Test
- https://www.zerocho.com/category/React/post/583231469a87ec001834a0ec
- https://www.gabrielnordeborn.se/testing-async-react-components-with-enzyme-and-jest/
- https://trustyoo86.github.io/react/2017/12/05/karma-enzyme-reat-testing.html

### react-testing-library vs Enzyme
- 내부로직에 대한 검증이 필요하다면 enzyme를 사용하고,
- 화면 스펙에 대해 e2e/intergration 테스트를 하고 싶다면 rect-testing-library 사용하면 좋을 것 같다  

#### react-testing-library
- 사용자의 입장에서 테스트한다는 의도를 가지고 있는 라이브러리이다
- 쉽게 말해 화면에 이벤트를 직접 발생시켜 테스트하는 것을 권장한다
- 추상화단에서 테스트를 하기 때문에 유지보수가 용이하다고 한다.
- style 요소가 중요한 경우, style로 요소에 접근하는 API는 지원하지 않아서 불편했음

### Enzyme
- 소스코드 내부로직에 대한 테스트가 가능하다
- 쉽게 말해 컴포넌트 state를 읽고 쓰면서 테스트가 가능
- 유지보수가 어렵다고 한다

### input다룰때
- https://itnext.io/keep-calm-and-handle-forms-in-react-js-52c67eea340e

### Model
- https://colorhunt.co/create

### Package Design
- https://medium.com/@FourwingsY/react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-bb183c0a426e

### Deploy
- https://musma.github.io/2019/03/20/deploy-node-webapp-to-aws-beanstalk.html (배포참고,같은구성임)
- https://facebook.github.io/create-react-app/docs/deployment (.env 세팅참고)
