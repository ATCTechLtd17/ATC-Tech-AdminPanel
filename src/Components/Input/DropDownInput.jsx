import { useState } from "react";
import formatString from "../../Helper/TextFormatting";


const DropDownInput = ({ onChange, name, required, defaultValue, disabled, options, }) => {

    const [showTextInput, setshowTextInput] = useState(false)

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setshowTextInput(selectedValue === 'Installment Quantity');
        if (onChange) {
            onchange(e);
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor={name}>
                {name ? formatString(name) : null}
            </label>
            <select
                className="select select-bordered select-sm hover:border-sky-600"
                onChange={handleSelectChange}
                name={name}
                required={required}

            >
                <option value="" disabled selected>Select an option</option>
                {options ? options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                )) : null}
            </select>

            {showTextInput && (
                <div className="mt-2 flex flex-col gap-2">
                    <input
                        type="text"
                        className="input input-bordered input-sm"
                        placeholder="1st Installment"
                    />
                    <input
                        type="text"
                        className="input input-bordered input-sm"
                        placeholder="2nd Installment"
                    />
                    <input
                        type="text"
                        className="input input-bordered input-sm"
                        placeholder="3rd Installment"
                    />
                </div>
            )}

        </div>
    );
};

export default DropDownInput;