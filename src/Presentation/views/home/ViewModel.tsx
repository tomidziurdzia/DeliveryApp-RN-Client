import React from "react";

const HomeViewModel = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value,
    });
  };
  return {
    ...values,
    onChange,
  };
};

export default HomeViewModel;
