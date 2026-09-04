import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pradumnyadav3231@gmail.com" data-cursor="disable">
              pradumnyadav3231@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919506032530" data-cursor="disable">
              +91 9506032530
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/YadavPradumn1"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a href="https://leetcode.com/u/Pradumn_Yadavv/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pradumn Yadav</span>
            </h2>
            <h5>
              <MdCopyright /> Pradumn Yadav
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
