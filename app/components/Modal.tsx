import React from 'react'

function Modal({ isvisible, onClose, children }) {
  if (!isvisible) return null;

  const handleClose = (event) => {
    if (event.target.id === 'wrapper') {
      onClose()
    }
  }




  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='lg:mx-60 md:mx-10 sm:mx-2 flex flex-col p-4'>
        <div className='bg-white p-2 rounded'>
          {children}

        </div>

      </div>
    </div>
  )
}

export default Modal
