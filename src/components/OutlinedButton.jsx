import PropTypes from "prop-types";

const OutlinedButton = ({ text, classes, btnType }) => {
  return (
    <button
      type={btnType ? btnType : ""}
      className={
        classes
          ? `text-[#00FFDF] bg-white border-4 border-[#00FFDF] px-6 py-3 rounded-lg text-lg flex justify-center items-center font-bold + ${classes}`
          : "text-[#00FFDF] bg-white border-4 border-[#00FFDF] px-6 py-3 rounded-lg text-lg flex justify-center items-center font-bold"
      }
    >
      {text}
    </button>
  );
};

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  btnType: PropTypes.string,
};

export default OutlinedButton;
