import Validator from "./Validator.js";
import ValidationError from "./ValidationError.js";

export default class PasswordValidator extends Validator {
  constructor(password) {
    super(password);
  }

  _minLength = 7;

  validate() {
    super.validate();
    const password = this.value;
    if (password.length < this._minLength) return new ValidationError("Length is less then required");
  }
}
