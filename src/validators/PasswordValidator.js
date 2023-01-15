import Validator from "./Validator.js";
import ValidationError from "./ValidationError.js";

export default class PasswordValidator extends Validator {
  constructor(password) {
    super(password);
  }

  #minLength = 7;

  validate() {
    return super.validate((password) => {
      if (password.length < this.#minLength) return new ValidationError("Length is less then required");
      return true;
    });
  }
}
