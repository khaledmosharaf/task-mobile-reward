import Point from './Point';
import PointActions from './PointActions';
import PointQA from './PointQA';
import PointRewardInfo from './PointRewardInfo';
import Popup from './Popup';
import Time from './Time';

const PointReward = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <Time />
      <Point />
      <PointActions />
      <PointRewardInfo />
      <PointQA />
      <Popup />
    </div>
  );
};
export default PointReward;
