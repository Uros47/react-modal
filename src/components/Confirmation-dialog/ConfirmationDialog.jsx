import React from "react";
import Modal from "../modal/Modal";

const ConfirmationDialog = ({
  acceptAction,
  declineAction,
  acceptButtonText,
  declineButtonText,
  dialogText,
  close,
  children,
}) => {
  return (
    <Modal preventClosingOutside removeCloseButton>
      <div>
        {dialogText && <h4 className='dialog-text'>{dialogText}</h4>}
        <button onClick={acceptAction} className='accept-btn'>
          {acceptButtonText}
        </button>
        <button onClick={declineAction} className='decline-btn'>
          {declineButtonText}
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
