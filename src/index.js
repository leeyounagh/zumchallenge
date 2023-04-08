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
    <h1>To do List</h1>
    <div class="input">
    <input id="list"></input>
    </div>
   
    <ul>
          ${items
            .map(
              (item, key) =>
                `<li >${item}  <button id="delete" data-index="${key}">삭제</button></li>`
            )
            .join("")}
        
        </ul>
        <div class="submit">
        <button id="submit">추가</button>
        </div>
       
    `;
  }

  setEvent() {
    let inputValue = "";
    this.target
      .querySelector("#list")
      .addEventListener("input", ({ target }) => {
        inputValue = target.value;
      });

    this.target.querySelectorAll("#delete").forEach((deleteBtn) =>
      deleteBtn.addEventListener("click", ({ target }) => {
        const items = [...this.state.items];
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      })
    );
    this.target.querySelector("#submit").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, inputValue] }); // inputValue 변수를 배열에 추가하고
      inputValue = ""; // 변수 초기화
    });
  }
}

new App(document.querySelector("#root"));
