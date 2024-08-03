

const TextInput = (onChange, disabled, placeHolder, name, required) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        className="input input-bordered input-sm  hover:border-sky-600  "
        type="text"
        name={name ? name : null} id={name ? name : null}
        required={required ? true : false}
        onChange={onChange ? onChange : null} disabled={disabled ? true : false}
        placeholder={placeHolder ? placeHolder : null} />
    </div>
  );
};

export default TextInput;