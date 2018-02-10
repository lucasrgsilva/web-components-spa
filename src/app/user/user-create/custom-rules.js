export const customRules = {
  name: function (value) {
    if (value.length < 3) {
      return {
        isInvalid: true,
        message: "Campo deve conter 3 caracteres ou mais"
      };
    }
    return {};
  },
  email: function (value) {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(value)) {
      return {
        isInvalid: true,
        message: "Email inválido"
      };
    }
    return {};
  }
};