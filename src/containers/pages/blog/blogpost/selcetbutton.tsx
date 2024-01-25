import { useState } from "react";
import Select from 'react-select';
export function Language() {
    const [value, setvalue] = useState<any>("");

    const handleOnchange = () => {
        setvalue(value);
    };
    const Optioncategorydata = [

        {
            value: "Select",
            label: "Select"
        },
        {
            value: "IT",
            label: "IT"
        },
        {
            value: "Language",
            label: "Language"
        },
        {
            value: "Science",
            label: "Science"
        },
        {
            value: "Health",
            label: "Health"
        },
        {
            value: "Humanitieshu",
            label: "Humanities"
        },
        {
            value: "Business",
            label: "Business"
        },
        {
            value: "Maths",
            label: "Maths"
        },
        {
            value: "Marketing",
            label: "Marketing"
        },
    ];
    return (
        <Select
            onChange={handleOnchange}
            options={Optioncategorydata}
            classNamePrefix='Select2' className="multi-select"
        />
    );
}