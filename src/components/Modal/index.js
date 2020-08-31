import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  }
};

const Modal = ({ children, isOpen }) => {
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      {children}
    </ReactModal>
  )
}

export default Modal
