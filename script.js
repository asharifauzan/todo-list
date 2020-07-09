const input = document.getElementById('input');
const submit = document.getElementById('submit');
const close = document.getElementsByClassName('close');

submit.addEventListener('click', function() {
  if (!input) {
    alert("message");
  }
});
