import left from '../../asset/icons/Left Side.png';
import right from '../../asset/icons/Right Side.png';
import './Time.css';

const Time = () => {
  return (
    <div id="time">
      <img src={left} alt="" />
      <img src={right} className="right" alt="" />
    </div>
  );
};
export default Time;
