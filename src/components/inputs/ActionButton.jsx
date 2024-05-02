import PropTypes from "prop-types";

const ActionButton = ({ children, className = "", onClick }) => {
  onClick;
  return (
    <div
      className={`p-2 bg-whiteTheme-lightAccent ${className} rounded-md hover:bg-purple-200 shadow-sm shadow-purple-100 cursor-pointer transition:all duration-100 ease-out-in`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ActionButton;
