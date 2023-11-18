

let myButton = document.getElementById("account-switch");
let myButtontest = document.getElementById("datatest");
let myHeading = document.querySelector("h1");
let ptest = document.getElementById("datatest-p");


function setUserName() {
    let myName = prompt("Input your account");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome，" + myName;
      }
    
  }
  


  // if (!localStorage.getItem("name")) {
  //   setUserName();
  // } else {
  //   let storedName = localStorage.getItem("name");
  //   myHeading.textContent = "Welcome，" + storedName;
  // }
  

  myButton.onclick = function () {
    setUserName();
  };


  myButtontest.onclick = function () {
    readData();
  };


  function readData() {
    
    const url = "data/verse.txt";

// 调用 `fetch()`，传入 URL。
  fetch('data/verse.txt')
  // fetch() 返回一个 promise。当我们从服务器收到响应时，
  // 会使用该响应调用 promise 的 `then()` 处理器。
  .then((response) => {
    // 如果请求没有成功，我们的处理器会抛出错误。
    if (!response.ok) {
      throw new Error(`HTTP 错误：${response.status}`);
    }
    // 否则（如果请求成功），我们的处理器通过调用
    // response.text() 以获取文本形式的响应，
    // 并立即返回 `response.text()` 返回的 promise。
    return response.text();
  })
  // 若成功调用 response.text()，会使用返回的文本来调用 `then()` 处理器，
  // 然后我们将其拷贝到 `poemDisplay` 框中。
  .then((text) => (ptest.textContent = text))
  // 捕获可能出现的任何错误，
  // 并在 `poemDisplay` 框中显示一条消息。
  .catch((error) => (ptest.textContent = `获取诗歌失败：${error}` + `+ ${verse}.txt`));


  }
  



