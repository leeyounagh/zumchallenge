import { hello, add } from "./util";
import "@babel/polyfill";
import "./style.css";
import "./header.css";
import logo from "./images/1.jpg";
// const text = hello("<h1>나는 수여니</h1>");
// const num = add(1, 2);
// const img = `<img src="${logo}" alt="수연쓰"/>`;

import Items from "./components/Items.js";

class App {
  constructor() {
    const $app = document.querySelector("#root");
    new Items($app);
  }
}

new App();

// document.getElementById("root").innerHTML = img + text + num;
