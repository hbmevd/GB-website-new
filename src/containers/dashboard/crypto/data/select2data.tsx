import { useState } from "react";
import Creatable from "react-select/creatable";

export const CryptoSelect = () => {
  const [selected2, setSelected2] = useState<any>([]);
  const objectArray = [
    { value: "Bit Coin", selected: "true", label: "Bit Coin" },
    { value: "Bit Connect", label: "Bit Connect" },
    { value: "Bit Shares", label: "Bit Shares" },
    { value: "Bye Coin", label: "Bye Coin" },
    { value: "Dash", label: "Dash" },
    { value: "Decred", label: "Decred" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "Golem", label: "Golem" },
    { value: "iconomi", label: "iconomi" },
    { value: "Lana Coin", label: "Lana Coin" },
  ];
  const groupedOptions: any = [
    {
      label: "Bit Coin",
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
