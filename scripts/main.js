

let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tech-tree-logo.jfif") {
    myImage.setAttribute("src", "images/tech-tree.png");
  } else {
    myImage.setAttribute("src", "images/tech-tree-logo.jfif");
  }
};


function setUserName() {
    let myName = prompt("Input your account");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome，" + myName;
      }
    
  }
  


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome，" + storedName;
  }
  

  myButton.onclick = function () {
    setUserName();
  };
  



