import REGEX from "./constant/regex";

export const validator = (objectVal: Object, validate: Object) => {
  const error = {};
  const keys = Object.keys(objectVal);
  for (let i = 0, { length } = keys; i < length; i += 1) {
    const key = keys[i];
    const rules = validate[key];
    const value = objectVal[key];
    let errorMsg = "";
    for (let j = 0; j < rules.length; j += 1) {
      switch (rules[j]) {
        case "required":
          if (value === "" || value === null || value === undefined) {
            errorMsg = "Field is required";
          }
          break;
        case "email":
          if (!REGEX.EMAIL.test(value)) {
            errorMsg = "Please include a valid email";
          }
          break;
        case "password":
          if (!REGEX.PASSWORD.test(value)) {
            errorMsg = "Please enter a password with 6 or more characters";
          }
          break;

        default:
          break;
      }
      if (errorMsg) {
        error[key] = errorMsg;
      }
    }
  }
  return error;
};
