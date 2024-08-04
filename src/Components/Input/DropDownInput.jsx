import formatString from "../../Helper/TextFormatting";


const DropDownInput = ({ onChange, name, required, defaultValue, disabled, options, }) => {
    console.log(options);

    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor={name}>
                {name ? formatString(name) : null}
            </label>
            <select
                className="select select-bordered select-sm hover:border-sky-600"
                onChange={onChange}
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
        </div>
    );
};

export default DropDownInput;