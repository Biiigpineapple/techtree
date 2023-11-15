

let myImage = document.querySelector("img");


myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tech-tree-logo.jfif") {
    myImage.setAttribute("src", "images/tech-tree.png");
  } else {
    myImage.setAttribute("src", "images/tech-tree-logo.jfif");
  }
};

  



