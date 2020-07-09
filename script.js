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

  //menambah text pada li
  li.appendChild(text);
  //menambah li pada ol
  ol.appendChild(li);

  let span = document.createElement('span');
  let x = document.createTextNode('');

  //menambah class close pada span
  span.setAttribute('class', 'close');

  //menambah x ke span
  span.appendChild(x);
  //memasukkan li ke span
  li.appendChild(span);

  //reset input menjadi kosong
  input.value = '';
});
