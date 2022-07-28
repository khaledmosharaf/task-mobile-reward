import './PointQA.css';
import question from '../../asset/icons/akar-icons_question-fill.png';
import rightArrow from '../../asset/icons/arrow.png';
import file from '../../asset/icons/akar-icons_file.png';

const PointQA = () => {
  return (
    <div id="point-qa">
      <div className="point-qa-container">
        <div className="qa">
          <div className="qa-container">
            <div className="qa-container-left">
              <img src={question} alt="" className="qa-first-img" />
              <p>সচরাচর জিজ্ঞাসা</p>
            </div>
            <img src={rightArrow} alt="" className="qa-last-img" />
          </div>
        </div>

        <div className="qa">
          <div className="qa-container">
            <div className="qa-container-left">
              <img src={file} alt="" className="qa-first-img" />
              <p>শর্তাবলী</p>
            </div>
            <img src={rightArrow} alt="" className="qa-last-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PointQA;
