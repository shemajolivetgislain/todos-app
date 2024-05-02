import PropTypes from "prop-types";

const MainHolder = ({ children }) => {
  return (
    <section className="w-full min-h-[88vh] h-[88vh] p-8 bg-whiteTheme-lightAccent">
      {children}
    </section>
  );
};

MainHolder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHolder;
