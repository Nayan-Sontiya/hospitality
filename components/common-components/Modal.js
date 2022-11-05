import { modalOpenShow } from "../helpers/HelperFunctions.js";

const Modal = ({ modalId, modalTitle, modalBody, modalFooter }) => {
 
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full z-50 h-full hidden outline-none overflow-x-hidden overflow-y-auto"
      id={modalId}
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={() =>  modalOpenShow(modalId)}
      ></div>
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div
          className={
            modalId === "forgotPasswordModal" || modalId === "updateUserProfile"
              ? "modal-content m-auto border-none shadow-lg w-full sm:w-1/2 lg:w-1/3 relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current  mt-28"
              : "modal-content m-auto border-none shadow-lg w-full md:w-1/2 relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current  mt-6"
          }
        >
          {modalTitle !== "" ? (
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id={modalId + "Label"}
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                onClick={() =>  modalOpenShow(modalId)}
              >

                &times;
              </button>
            </div>
          ) : (
              ""
            )}
          <div className="modal-body relative p-4 h-max overflow-y-auto">

            {modalBody}
          </div>
          {modalFooter !== "" ? (
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 border-t border-gray-200 rounded-b-md">

              {modalFooter}
            </div>
          ) : (
              ""
            )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
