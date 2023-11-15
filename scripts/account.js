

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



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
  



