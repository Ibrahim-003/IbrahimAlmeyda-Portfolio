export const validateField = (name: string, value: string) => {
  let error = "";
  switch (name) {
    case "name":
      if (value.length < 2) {
        error = "El nombre debe tener al menos 2 caracteres";
      } else if (/\d/.test(value)) {
        error = "El nombre no debe contener números";
      }
      break;
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Email inválido";
      }
      break;
    case "message":
      if (value.length < 10) {
        error = "El mensaje debe tener al menos 10 caracteres";
      }
      break;
  }
  return error;
};
