import './PointRewardInfo.css';
import arrow from '../../asset/icons/bi_arrow-right-circle-fill.png';

const PointRewardInfo = () => {
  return (
    <div id="point-reward-info">
      <div className="reward-info-container">
        <div className="info">
          <div className="info-container">
            <img src={arrow} alt="" />
            <p>নিয়মিত কুইজার্স গেম খেলে পয়েন্ট অর্জন করুন</p>
          </div>
        </div>

        <div className="info">
          <div className="info-container">
            <img src={arrow} alt="" />
            <p>বিস্তারিত দেখতে আপনার কুইজার্স রিওয়ার্ড এ ট্যাপ করুন</p>
          </div>
        </div>

        <div className="info">
          <div className="info-container">
            <img src={arrow} alt="" />
            <p>
              পয়েন্ট ব্যবহার করে বিভিন্ন রিওয়ার্ড সংগ্রহ করুন এবং তার সুবিধা
              উপভোগ করুন
            </p>
          </div>
        </div>

        <div className="info">
          <div className="info-container">
            <img src={arrow} alt="" />
            <p>
              পরবর্তী রিওয়ার্ড লেভেল এবং দারুন সব অফার আনলক করতে বেশি বেশি
              পয়েন্ট অর্জন করুন
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PointRewardInfo;
