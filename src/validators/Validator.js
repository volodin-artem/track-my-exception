export default class Validator {
  constructor(value) {
    this.value = value;
  }

  validate(predicate) {
    return predicate(this.value);
  }
}
