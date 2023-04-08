import { hello, add } from "./util";
import "@babel/polyfill";
import "./style.css";
import "./header.css";

class Component {
  target;
  state;
  constructor(target) {
    this.target = target;
    // 부모 컴포넌트에서 실제로 이벤트가 발생하는 타겟
    this.setUp();
    this.render();
  }
  template() {
    return "";
  }
  setUp() {}
  // 부모 컴포넌트에서 state값 초기화할 함수
  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }
  // 부모 컴포넌트에서 렌더링할 함수
  setEvent() {}
  // 부모 컴포넌트에서 이벤트가 작동하는 함수
  setValue() {}

  setState(newEvent) {
    this.state = { ...this.state, ...newEvent };
    this.render();
  }
}
class App extends Component {
  setUp() {
    this.state = {
      items: ["놀러가기", "합격한 회사 리스트 만들기"],
      addedValue: "",
    };
  }

  template() {
    const { items } = this.state;
    return `
     <input id="list"></input>
    <ul>
          ${items.map((item) => `<li >${item}</li>`).join("")}
        </ul>
        <button>추가</button>
    `;
  }

  setEvent() {
    let inputValue = "";
    this.target.querySelector("input").addEventListener("input", (event) => {
      inputValue = event.target.value;
    });

    this.target.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      console.log(inputValue);
      this.setState({ items: [...items, inputValue] }); // inputValue 변수를 배열에 추가하고
      inputValue = ""; // 변수 초기화
    });
  }
}

new App(document.querySelector("#root"));
