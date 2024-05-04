import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal({ title, toggleFunction, children, className }) {
  return (
    <main
      className={`fixed inset-0 flex items-center justify-center z-[50000] flex-col`}
    >
      {/* Modal gray background with opacity */}
      <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
      {/* Modal card with white background */}
      <div
        className={`flex flex-col bg-white border  z-50 w-[40%]  h-1/2  rounded-md ${className} dark:bg-darkTheme-primaryColor`}
      >
        <div className="flex justify-between px-6 py-3 items-center font-semibold text-xl">
          <div className="flex flex-col ">
            <p className="text-whiteTheme-primaryColor font-semibold">
              {title}
            </p>
          </div>
          <button className="p-1 " onClick={toggleFunction}>
            <p className="text-whiteTheme-accentDark flex items-center dark:text-darkTheme-textColor">
              <IoIosCloseCircleOutline size={30} />
            </p>
          </button>
        </div>
        <hr />
        <div className="px-4 h-full overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  toggleFunction: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Modal;
