class Validator {
  static regexp = /\d+\-\d+/;
  
  static validateInput(value) {
    const matchedValue = value.match(Validator.regexp)[0];

    return value.length === matchedValue.length
  }
}

export default Validator;