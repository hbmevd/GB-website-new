import { useState } from "react";
import Creatable from "react-select/creatable";

export const Visibilityselect = () => {
  const [selected2, setSelected2] = useState<any>([]);
  const objectArray = [
    { value: "Choose one", selected: "true", label: "Choose one" },
    { value: "Private", label: "Private" },
    { value: "Public", label: "Public" },
  ];
  const groupedOptions: any = [
    {
      label: "Choose one",
      options: objectArray,
    },
  ];
  return (
    <Creatable
      classNamePrefix="Select2"
      options={groupedOptions}
      value={selected2}
      onChange={setSelected2}
      isMulti
    />
  );
};
