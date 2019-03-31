class ComponetService {
  constructor() {
    const numberOneInput = document.getElementById('numberOne');
    const numberTwoInput = document.getElementById('numberTwo');
    const addValuesButton = document.getElementById('addValues');
    const resultDiv = document.getElementById('result');
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(cb) {
    this.addValuesButton.addEventListener('click', cb);
  }
}
