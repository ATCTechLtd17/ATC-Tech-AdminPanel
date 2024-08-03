import formatString from "../../../helper/textFormatting";

const Lable = (name) => {
  return (
    <div>
      <label className="font-medium"
        htmlFor={name ? name : null}>
        {name ? formatString(name) : null}
      </label>

    </div>
  );
};

export default Lable;