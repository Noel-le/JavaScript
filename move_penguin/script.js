const init = () => {
  var penguin = document.querySelector(".penguin-icon");
  var x_pos = 0;
  var y_pos = 0;
  var step = 10;

  function moveLeft() {
    x_pos -= step;
    penguin.style.left = x_pos + "px";
  }

  function moveRight() {
    x_pos += step;
    penguin.style.left = x_pos + "px";
  }
  function moveBottom() {
    y_pos += step;
    penguin.style.top = y_pos + "px";
    penguin.style.zIndex = 1000;

  }

  function moveTop() {
    y_pos -= step;
    penguin.style.top = y_pos + "px";
  }

  document.addEventListener("keydown", (e) => {

    if (!/Arrow/gi.test(e.key)) {
      return;
    }

    e.preventDefault();

    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      moveTop();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveBottom();
    }
  });
};

init();
