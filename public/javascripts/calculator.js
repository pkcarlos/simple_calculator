document.addEventListener('DOMContentLoaded', () => {
  function getValue(selector) {
    return document.getElementById(selector).value;
  }

  let form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let firstNum = Number(getValue('first-number'));
    let secondNum = Number(getValue('second-number'));
    let operation = getValue('operator');
    let result;

    switch (operation) {
      case '+':
        result = firstNum + secondNum;
        break
      case '-':
        result = firstNum - secondNum;
        break
      case '*':
        result = firstNum * secondNum;
        break
      case '/':
        result = firstNum / secondNum;
    }

    document.getElementById('result').textContent = String(result);
  })
})