import React, { useState } from 'react';
import './Modal.scss';

function Modal() {
  let [isModal, setIsModal] = useState(true);
  const active = isModal ? 'is-active' : '';

  const handleClick = () => {
    setIsModal((isModal = !isModal));
  };

  return (
    // <div className={`modal ${active}`}>
    //   <div className='modal-background' />
    //   <div className='modal-card'>
    //     <header className='modal-card-head'>
    //       <p className='modal-card-title'>Modal title</p>
    //       <button onClick={handleClick} className='delete' aria-label='close' />
    //     </header>
    //     <section className='modal-card-body'>
    //       <div className='field'>
    //         <label className='label'>Name</label>
    //         <div className='control'>
    //           <input
    //             className='input'
    //             type='text'
    //             placeholder='e.g Alex Smith'
    //           />
    //         </div>
    //       </div>
    //       <div class='field'>
    //         <div class='control'>
    //           <label class='checkbox'>
    //             <input type='checkbox' />I agree to get you the gift you pest...
    //           </label>
    //         </div>
    //       </div>
    //     </section>
    //     <footer className='modal-card-foot'>
    //       <button className='button is-success'>Save changes</button>
    //       <button onClick={handleClick} className='button'>
    //         Cancel
    //       </button>
    //     </footer>
    //   </div>
    // </div>
    <div className={`modal ${active}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <h1>Esto es un MOdal</h1>
      </div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={handleClick}
      ></button>
    </div>
  );
}

export default Modal;
