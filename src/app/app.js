import { inputsAreValid } from './utils/inputs-are-valid';
import { parseInputs } from './utils/parse-inputs';

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = [numberOneInput.value, numberTwoInput.value];
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      resultDiv.innerText = numA + numB;
    } else {
      resultDiv.innerText = '';
      handleAdditionError(inputs, parsedInputs);
    }
  });
};
