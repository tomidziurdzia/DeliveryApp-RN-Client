import React from "react";

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

  const register = () => {
    console.log(JSON.stringify(values));
  };
  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
