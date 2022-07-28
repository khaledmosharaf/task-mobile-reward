import './Banner.css';
import screenshot from '../../asset/screenshot/Reward 1.png';
import dot from '../../asset/icons/Ellipse 174.png';
import dotColored from '../../asset/icons/Ellipse 172.png';

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-container">
        <div className="img-container">
          <img src={screenshot} alt="" />
        </div>
        <div className="banner-text">
          <p className="banner-text-title">কুইজার্স রিওয়ার্ড</p>
          <div className="banner-text-right">
            <p>অর্জন করে লুফে নাও দারুন সব</p>
            <p>আকর্ষণীয় অফার</p>
            <button className="btn btn-banner">ক্লিক কর</button>
          </div>
        </div>
      </div>
      <div className="dot-tab">
        <img src={dotColored} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
      </div>
    </section>
  );
};
export default Banner;
