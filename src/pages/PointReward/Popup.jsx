import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context.js';
import './Popup.css';
import popupImage from '../../asset/icons/Group 9580.png';

const Popup = () => {
  const { isPopupOpen, closePopup } = useGlobalContext();

  const popupRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
  }, [isPopupOpen]);

  const handleClosePopup = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      closePopup();
    }
  };

  return (
    <div
      ref={popupRef}
      id="popup"
      className={`popup-overlay ${isPopupOpen && 'show-popup'}`}
      onClick={(e) => handleClosePopup(e)}
    >
      <div className="popup-container">
        <p>পর্যাপ্ত পয়েন্ট নেই</p>
        <img src={popupImage} alt="" />
        <p>
          রিয়ার্ড সংগ্রহ করার জন্য আপনার পয়েন্ট নেই। নিয়মিত কুইজাস গেম খেলে
          পয়েন্ট অর্জন করুন{' '}
        </p>
      </div>
    </div>
  );
};
export default Popup;
