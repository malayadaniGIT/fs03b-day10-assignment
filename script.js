function createButton() {
    var button = document.createElement("button");
    button.textContent = "Click Me";
    button.addEventListener("click", function() {
      alert("Button clicked!");
    });
    var container = document.getElementById("container");
    container.appendChild(button);
  }
  createButton()