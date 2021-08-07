class Validator {
  static regexp = /\d+\-\d+/;
  static validateInput(value) {
    // const regexp = /\d+\-\d+/;
    const matchedValue = value.match(Validator.regexp)[0];
    if (value.length === matchedValue.length) {
      return true;
    } else {
      // show error
      console.log('err')
      return false;
    }
    
    // console.log(value.match(Validator.regexp));
    // console.log(fromId);
    // console.log(toId);
  }
}

export default Validator;