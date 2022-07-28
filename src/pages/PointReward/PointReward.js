import { useGlobalContext } from '../../context';
import Nav from '../component/Nav';
import Point from './Point';
import PointActions from './PointActions';
import PointQA from './PointQA';
import PointRewardInfo from './PointRewardInfo';
import Popup from './Popup';
// import Time from './Time';

const PointReward = () => {
  const { isPopupOpen } = useGlobalContext();

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      {/* <Time /> */}
      <Point />
      <PointActions />
      <PointRewardInfo />
      <PointQA />
      <Popup />
      {!isPopupOpen && <Nav />}
    </div>
  );
};
export default PointReward;
