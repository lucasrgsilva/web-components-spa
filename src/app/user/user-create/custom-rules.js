export const customRules = {
  name: (value) => {
    if (value.length < 3) {
      return {
        isInvalid: true,
        message: "Campo deve conter 3 caracteres ou mais"
      };
    }
    return {};
  },
  email: (value) => {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regExp.test(value)) {
      return {
        isInvalid: true,
        message: "Email inválido"
      };
    }
    return {};
  },
  // If you want you can validate cpf
  // cpf: (value) => {
  //   const regExp = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  //   if (!regExp.test(value)) {
  //     return {
  //       isInvalid: true,
  //       message: "CPF inválido"
  //     };
  //   }
  //   return {};
  // },
};