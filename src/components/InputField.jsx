import PropTypes from "prop-types";

const InputField = ({ name, text, type, placeholder, onChange, classes }) => {
  return (
    <div
      className={
        classes ? `flex flex-col mb-4 + ${classes}` : "flex flex-col mb-4"
      }
    >
      <label
        className="mb-2 uppercase font-bold tracking-widest"
        htmlFor={name}
      >
        {text}
      </label>
      <input
        className="h-9 rounded-md outline-none caret-[#00FFDF] p-2 text-black"
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string,
};

export default InputField;
