

const PasswordInput = (onChange, disabled, placeHolder, name, required) => {
  return (
    <div>
      <input type="password" name={name ? name : null} id={name ? name : null} required={required ? true : false} className="input input-bordered input-sm  hover:border-sky-600  " onChange={onChange ? onChange : null} disabled={disabled ? true : false} placeholder={placeHolder ? placeHolder : null} />
    </div>
  );
};

export default PasswordInput;