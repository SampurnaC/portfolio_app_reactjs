import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  var myStyle={
    fontSize: "1.5em",
    lineHeight: "1.5em",
    letterSpacing: "1px",
    border: "4px solid black",
    padding: "2em",
    marginTop: "100px",
    marginRight: "12px",
    marginLeft: "12px"
  }
  return (
    <div style={myStyle}>
      <p>Find Me on Social Media</p>

      <a href="https://www.youtube.com/channel/UC8yCpKSfYaMlIP4md3NZ73A"
      className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a href="https://www.facebook.com/codingtv1"
      className="facebook social">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://www.twitter.com" className="twitter social">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.instagram.com"
      className="instagram social">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>

    <a href="https://github.com/SampurnaC"
      className="github social">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    
    <a href="https://www.linkedin.com/feed/"
      className="linkedin social">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>


    </div>
  );
}
 
export default Contact;