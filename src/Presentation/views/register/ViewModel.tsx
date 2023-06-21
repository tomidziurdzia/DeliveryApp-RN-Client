import React from "react";
import { ApiDelivery } from "../../../Data/sources/remote/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
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
    const { result, error } = await RegisterAuthUseCase(values);
    console.log("Result: " + JSON.stringify(result));
    console.log("Error: " + error);
  };
  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
