

import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export const BasicMutipleSelect3 = () => {
    const [selected, setSelected] = useState([]);
    const options=[
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  return (
  
    <MultiSelect
     value={selected}
        onChange={setSelected}
        labelledBy="Select"
      options={options}
      hasSelectAll
      isCreatable
    />
  );
  };
