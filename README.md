## React-Tutorial

### NPM
* npm install
* npm install redux

### JSX
자바스크립트의 문법 확장

### props
부모 컴포넌트가 자식 컴포넌트에게 주는 값으로 받은 props는 수정할 수 없다.

### state
* 동적인 데이터를 제어할 경우 컴포넌트 내부에서 선언되고 값을 변경할 수 있다.
* 값을 변경하기 위해서는 this.setState 메소드를 호출해야 하고 이 메소드가 호출되면 React 에서 컴포넌트가 다시 렌더링 되도록 한다.

### 이벤트
* 이벤트 이름은 camelCase로 설정해야 한다. onclick -> onClick
* 이벤트에 전달해주는 값은 함수여야 한다. onClick={this.handleAdd()} 이 문장은 렌더링을 할 때마다 해당 함수가 호출된다. 만약 함수 내부에 setState 함수가 호출된다면 (렌더링 -> 함수 호출 -> setState -> 렌더링 -> 함수호출 -> setState) 무한반복의 위험이 있다.

### Life Cycle
* constructor : 컴포넌트가 생성될 때 호출된다.
* componentWillMount : 컴포넌트 렌더링 이전에 호출된다.
* componentDidMount : 컴포넌트가 렌더링된 후 호출된다.
* componentWillReceiveProps : 컴포넌트가 새로운 props를 받으면 호출된다.
* shouldComponentUpdate : 기본적으로 true를 반환하지만 조건에 따라 false를 반환하면 React가 render() 함수를 호출하지 않는다.
* componentDidUpdate : render() 함수 이후에 호출된다.
* componentWillUnmount : 컴포넌트가 필요하지 않을  호출된다.
