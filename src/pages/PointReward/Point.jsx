import { Link } from 'react-router-dom';
import './Point.css';
import leftArrow from '../../asset/icons/Icon (9).png';
import badge from '../../asset/icons/prize_hires 1.png';

const Point = () => {
  return (
    <div id="point">
      <div className="point-text">
        <Link to="/">
          <img src={leftArrow} alt="left-arrow" />
        </Link>
        <p className="point-text-title">পয়েন্ট রিওয়ার্ড</p>
      </div>

      <div className="point-stat-container">
        <div className="point-stat-text">
          <p>ইশতিয়াক আহমেদ</p>
          <div className="point">
            <img src={badge} alt="" />
            <p>১২০০ পয়েন্ট</p>
          </div>
        </div>

        <div className="point-level">
          <p className="point-level-title">Warrior</p>
          <div className="point-level-progress-bar"></div>
          <p className="point-progress-info">
            পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না
          </p>
        </div>
      </div>

      <div className="point-sublinks">
        <p>পয়েন্ট রিওয়ার্ড</p>
        <p> সব দেখুন</p>
      </div>
    </div>
  );
};
export default Point;
