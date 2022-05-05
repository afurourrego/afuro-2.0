(function () {
  var context = {
    email_btn: document.getElementById('email'),
  };

  var clipboard_email = {
    start: function () {
      context.email_btn.addEventListener('click', clipboard_email.copyEmail);
    },

    copyEmail: function () {
      navigator.clipboard.writeText('infoafuro@gmail.com');
      M.toast({ html: 'Email copied!', classes: 'rounded', displayLength: 1000 });
    },
  };

  clipboard_email.start();

}());