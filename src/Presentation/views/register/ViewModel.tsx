import React from "react";
import { ApiDelivery } from "../../../Data/sources/remote/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessagte] = React.useState("");
  const [values, setValues] = React.useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log("Result: " + JSON.stringify(response));
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessagte("Ingresa tu nombre");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessagte("Ingresa tu apellido");
      return false;
    }
    if (values.email === "") {
      setErrorMessagte("Ingresa tu email");
      return false;
    }
    if (values.phone === "") {
      setErrorMessagte("Ingresa tu telefono");
      return false;
    }
    if (values.password === "") {
      setErrorMessagte("Ingresa tu password");
      return false;
    }
    if (values.confirmPassword === "") {
      setErrorMessagte("Repite tu password");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessagte("Las password no coinciden");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    register,
    errorMessage,
  };
};

export default RegisterViewModel;
