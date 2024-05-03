import PropTypes from "prop-types";

const MainHolder = ({ children, className }) => {
  return (
    <section
      className={`w-full min-h-[88vh] h-[88vh] px-8 py-12 bg-whiteTheme-lightAccent ${className}`}
    >
      {children}
    </section>
  );
};

MainHolder.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainHolder;
