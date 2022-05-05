(function () {
  var context = {
    body: document.getElementById('body'),
    btn: document.getElementById('color-mode'),
  };

  var color_mode = {
    start: function () {
      context.btn.addEventListener('click', color_mode.toggleColor);
    },

    toggleColor: function () {
      context.body.classList.toggle("light");
    },
  };

  color_mode.start();

}());