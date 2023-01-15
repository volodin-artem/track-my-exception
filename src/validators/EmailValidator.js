import Validator from "./Validator.js";

export default class EmailValidator extends Validator {
  constructor(email) {
    super(email);
  }

  #possibleEmails = ['@gmail.com', '@mail.ru', '@yandex.ru'];

  validate() {
    return super.validate((value) => this.#possibleEmails.find((email) => value.endsWith(email)));
  }
}
