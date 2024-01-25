import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";


//BasicMutipleSelect
export const BasicMutipleSelect = () => {
    const [selected, setSelected] = useState([]);
    const options = [
        { value: "Birthday", label: "Birthday" },
        { value: "Anniversary", label: "Anniversary" },
        { value: "Wedding Day", label: "Wedding Day" },
        { value: "Others", label: "Others" },
    ];
    return (
        <MultiSelect className="form-control form-select select2 p-0 border-0" data-bs-placeholder="Select Type"
            value={selected}
            onChange={setSelected}
            labelledBy="Choose one"
            options={options}
            hasSelectAll
            isCreatable
        />
    );
};

//BasicMutipleSelect2

export const BasicMutipleSelect2 = () => {
    const [selected, setSelected] = useState([]);
    const options = [
        { value: "1 day before", label: "1 day before" },
        { value: "2 day before", label: "2 day before" },
        { value: "3 day before", label: "3 day before" },
        { value: "4 day before", label: "4 day before" },
        { value: "5 day before", label: "5 day before" },

    ];

    return (

        <MultiSelect className="form-control form-select select2 p-0 border-0" data-bs-placeholder="Select Type"
            value={selected}
            onChange={setSelected}
            labelledBy="select.."
            options={options}
            hasSelectAll
            isCreatable
        />
    );
};