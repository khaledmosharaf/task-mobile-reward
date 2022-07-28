import { Link } from 'react-router-dom';
import './Header.css';
import trophy from '../../asset/icons/fxemoji_trophy.png';
import avatar from '../../asset/avatar/Person.png';
// import redeem from '../../asset/icons/Redeem.png';
import smallCup from '../../asset/icons/Icon (12).png';

const Header = () => {
  return (
    <header id="header">
      <div className="ellipse-container">
        <div className="ellipse ">
          <div className="circle-container">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="account text-container">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="avatar-text">
            <p className="avatar-name">ইশতিয়াক</p>
            <p className="avatar-level">Level-Warrior</p>
          </div>
        </div>
        <Link to="reward">
          <div className="btn-reward">
            <img src={smallCup} alt="" />
            <p>রিওয়ার্ড</p>
          </div>

          {/* <img src={redeem} alt="reward button" /> */}
        </Link>
      </div>

      <div className="stats text-container">
        <div className="stat-text">
          <p className="stat-level">আপনার লেভেল : Warrior</p>
          <p className="reward-point">রিওয়ার্ড পয়েন্ট ঃ ১৫০০</p>
        </div>
        <div className="stat-trophy-container">
          <img src={trophy} alt="trophy" />
        </div>
      </div>
    </header>
  );
};
export default Header;
