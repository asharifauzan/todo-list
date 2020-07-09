const input = document.getElementById('input');
const submit = document.getElementById('submit');
const close = document.getElementsByClassName('close');
const ol = document.getElementsByTagName('ol')[0];

submit.addEventListener('click', function() {
  if (!input.value) {
    alert("Mohon isi list");
  }

  let li = document.createElement('li');
  let text = document.createTextNode(input.value);

  li.appendChild(text);

  ol.appendChild(li);

  input.value = '';
});
