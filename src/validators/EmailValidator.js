import Validator from "./Validator.js";

export default class EmailValidator extends Validator {
  constructor(email) {
    super(email);
  }

  _possibleEmails = ['@gmail.com', '@mail.ru', '@yandex.ru'];

  validate() {
    super.validate();
    return this._possibleEmails.find((email) => this.value.endsWith(email));
  }
}
