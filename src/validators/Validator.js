export default class Validator {
  constructor(value) {
    this.value = value;
  }

  validate() {
    return this.value.trim();
  }
}
