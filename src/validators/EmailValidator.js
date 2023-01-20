import Validator from "./Validator.js";

export default class EmailValidator extends Validator {
  #possibleEmails = ['@gmail.com', '@mail.ru', '@yandex.ru'];

  constructor(email) {
    super(email);
  }

  validate() {
    return super.validate((value) => this.#possibleEmails.find((email) => value.endsWith(email)));
  }
}
