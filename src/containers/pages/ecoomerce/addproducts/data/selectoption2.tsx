import { useState } from "react";
import Creatable from "react-select/creatable";

export const ProductCategoryselect = () => {
  const [selected, setSelected] = useState<any>([]);
  const objectArray = [
    { value: "Choose one", selected: "true", label: "Choose one" },
    { value: "All", label: "All" },
    { value: "Accessories", label: "Accessories" },
    { value: "Children", label: "Children" },
    { value: "Electronics", label: "Electronics" },
    { value: "Fastion", label: "Fastion" },
    { value: "Home Appliances", label: "Home Appliances" },
    { value: "Medical Helath", label: "Medical Helath" },
    { value: "Pet Supplies", label: "Pet Supplies" },
    { value: "others", label: "others" },
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
      value={selected}
      onChange={setSelected}
      isMulti
    />
  );
};
