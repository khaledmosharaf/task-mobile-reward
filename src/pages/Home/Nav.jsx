import './Nav.css';

import home from '../../asset/icons/home-icon.png';
import cup from '../../asset/icons/cup-icon.png';
import puzzle from '../../asset/icons/puzzle-icon.png';
import bar from '../../asset/icons/bar-icon.png';

const Nav = () => {
  return (
    <nav id="nav">
      <div className="nav-container">
        <img src={home} className="nav-item" alt="" />
        <img src={cup} className="nav-item" alt="" />
        <img src={puzzle} className="nav-item" alt="" />
        <img src={bar} className="nav-item" alt="" />
      </div>
      <div></div>
    </nav>
  );
};
export default Nav;
