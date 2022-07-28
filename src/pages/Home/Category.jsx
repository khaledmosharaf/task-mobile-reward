import './Category.css';
import rightArrow from '../../asset/icons/right-arrow-icon.png';

import medal from '../../asset/icons/Medal 1.png';
import books from '../../asset/icons/Books and Apple 1.png';
import bulb from '../../asset/icons/Atom Bulb 1.png';
import globe from '../../asset/icons/Globe 1.png';
import bangladesh from '../../asset/icons/bangladesh 1.png';
import voltage from '../../asset/icons/High Voltage 1.png';

const Category = () => {
  return (
    <section id="category">
      <div className="category-container">
        <div className="category-select">
          <div className="category-select-text">কুইজ ক্যাটাগরি পছন্দ করুন</div>
          <img src={rightArrow} alt="" />
        </div>

        <div className="category-items-container">
          <div className="category-item">
            <img src={medal} alt="" />
            <p>খেলাধুলা</p>
          </div>
          <div className="category-item">
            <img src={books} alt="" />
            <p>তথ্যমূলক</p>
          </div>
          <div className="category-item">
            <img src={bulb} alt="" />
            <p>গুগলি</p>
          </div>
          <div className="category-item">
            <img src={globe} alt="" />
            <p>আন্তর্জাতিক</p>
          </div>
          <div className="category-item">
            <img src={bangladesh} alt="" />
            <p> বাংলাদেশ</p>
          </div>
          <div className="category-item">
            <img src={voltage} alt="" />
            <p>এন্টারটেইন</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
