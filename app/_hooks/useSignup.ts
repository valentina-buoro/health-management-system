import { useState } from 'react';


const useSignup = (initialState:any, callback:any) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event:any) => {
    const { name, value, checked } = event.target;
    setValues({ ...values, [name]: checked? checked : value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,

  };
};

export default useSignup;