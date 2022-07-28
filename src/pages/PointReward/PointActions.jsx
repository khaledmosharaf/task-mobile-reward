import { useGlobalContext } from '../../context.js';
import './PointActions.css';
import award from '../../asset/icons/fa6-solid_award.png';
import lock from '../../asset/icons/Icon (10).png';
import play from '../../asset/icons/Icon (11).png';

const PointActions = () => {
  const { openPopup } = useGlobalContext();
  return (
    <div id="point-actions">
      <div className="actions-container">
        <div className="action ">
          <img src={award} className="action-icon" alt="" />
          <div className="action-text">
            <p>মোবাইল রিচার্জ ২০ টাকা </p>
            <p className="point-number">১০০০ পয়েন্ট</p>
          </div>
          <button className="btn-action btn">
            <span className="btn-action-text">সংগ্রহ করুন</span>
          </button>
        </div>

        <div className="action action-2">
          <img src={lock} className="action-icon" alt="" />
          <div className="action-text">
            <p>মোবাইল রিচার্জ ২০ টাকা </p>
            <p className="point-number">১০০০ পয়েন্ট</p>
          </div>
          <button className="btn-action btn" onClick={openPopup}>
            <span className="btn-action-text">সংগ্রহ করুন</span>
          </button>
        </div>

        <div className="action action-3">
          <img src={play} className="action-icon" alt="" />
          <div className="action-text">
            <p>মোবাইল রিচার্জ ২০ টাকা </p>
            <p className="point-number">১০০০ পয়েন্ট</p>
          </div>
          <button className="btn-action btn">
            <span className="btn-action-text">সংগ্রহ করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PointActions;
