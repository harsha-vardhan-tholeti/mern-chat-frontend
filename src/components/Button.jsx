import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="text-white bg-[#00FFDF] px-4 py-3 mr-4 rounded-xl">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
