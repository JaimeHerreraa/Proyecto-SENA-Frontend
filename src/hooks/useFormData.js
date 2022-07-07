import { useState } from "react";

function useFormData() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  return {
    name,
    lastName,
    date,
    value,
    description,
    setName,
    setLastName,
    setDate,
    setValue,
    setDescription,
  };
}

export default useFormData;
