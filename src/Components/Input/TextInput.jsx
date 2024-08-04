import formatString from "../../Helper/TextFormatting";


const TextInput = ({ onChange, disabled, placeHolder, name, required }) => {
  // console.log({placeHolder ,name});

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium" htmlFor={name ? name : null} >
        {name ? formatString(name) : null}
      </label>
      <input
        className="input input-bordered input-sm  hover:border-sky-600  "
        type="text"
        onChange={onChange ? onChange : null}
        disabled={disabled ? true : false}
        placeholder={placeHolder ? placeHolder : null}
        name={name ? name : null} id={name ? name : null}
        required={required ? true : false}
      />
    </div>
  );
};

export default TextInput;