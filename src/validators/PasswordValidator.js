import Validator from "./Validator.js";
import ValidationError from "../custom-error/ValidationError.js";

export default class PasswordValidator extends Validator {
  #minLength = 7;

  constructor(password) {
    super(password);
  }

  validate() {
    return super.validate((password) => {
      if (password.length < this.#minLength) return new ValidationError("Length is less then required");
      return true;
    });
  }
}
