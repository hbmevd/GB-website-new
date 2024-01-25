import { useState } from 'react';
import Select from 'react-select';

//formelements
export function Brand() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
     value:"br",
     label:"Brazil"
    },
    {
     value:"cz",
     label:"Czech Republic"
    },
    {
     value:"de",
     label:"Germany"
    },
    {
     value:"pl",
     label:"Poland"
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
      classNamePrefix='Select2' className="multi-select"
			isSearchable
			placeholder="Brazil"
   isMulti
 />
  );
}
export function Customize() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
      value: "br",
      label: "Brazil",
    },
    {
      value: "cz",
      label: "Czech Republic",
    },
    {
      value: "de",
      label: "Germany",
    },
    {
      value: "pl",
      label: "Poland",
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
      classNamePrefix='Select2' className="multi-select"
			isSearchable
			placeholder="Brazil"
	/>
  );
}
export function Disabled() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
      value: "br",
      label: "Brazil",
    },
    {
      value: "cz",
      label: "Czech Republic",
    },
    {
      value: "de",
      label: "Germany",
    },
    {
      value: "pl",
      label: "Poland",
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
      classNamePrefix='Select2' className="multi-select"
			isSearchable
			placeholder="Brazil"
      isDisabled
	/>
  
  );
}