window.addEventListener('load', start);

function start() {
  document.querySelector('#inputRangeR').addEventListener('input', changeColor);
  document.querySelector('#inputRangeG').addEventListener('input', changeColor);
  document.querySelector('#inputRangeB').addEventListener('input', changeColor);

  inputTextR.value = inputRangeR.value;
  inputTextG.value = inputRangeG.value;
  inputTextB.value = inputRangeB.value;

  changeBlock();
}

function changeColor(event) {
  switch (event.target) {
    case inputRangeR:
      document.querySelector('#inputTextR').value = event.target.value;
      break;

    case inputRangeG:
      document.querySelector('#inputTextG').value = event.target.value;
      break;

    case inputRangeB:
      document.querySelector('#inputTextB').value = event.target.value;
      break;
    default:
      console.log(event);
      break;
  }
  changeBlock();
}

function changeBlock() {
  document.body.style.backgroundColor =
    'rgb(' +
    inputTextR.value +
    ',' +
    inputTextG.value +
    ',' +
    inputTextB.value +
    ')';
  document.getElementById('RGB').value =
    '#' +
    parseInt(inputTextR.value).toString(16).toUpperCase() +
    '' +
    parseInt(inputTextG.value).toString(16).toUpperCase() +
    '' +
    parseInt(inputTextB.value).toString(16).toUpperCase();
}
