import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../logo.png';
const Header =()=>{
  const getDetails = useSelector((state)=>state.getSite.getSiteDetails);
  let  words = getDetails.about_us?.split(' ');
  let abouttxt = words?.slice(0,40)
  console.log(getDetails);
    return(
      <footer className="footer">
       <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="footerDetsila">
              <Link to="/">
              <img className="footerlogo" src={logo} alt={logo}/>
              </Link>
              <p dangerouslySetInnerHTML={{__html: abouttxt}}></p>
              <div className="paymentInfo">
              <i class="fa fa-cc-mastercard" aria-hidden="true"></i> <i class="fa fa-cc-visa" aria-hidden="true"></i><i class="fa fa-money" aria-hidden="true"></i>

              </div>
            </div>
          </div>
          <div className="col-3">
          <div className="footerDetsila">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/productlist">Product</Link>
              </li>
              <li>
                <Link to="/productlist">Deal</Link>
              </li>
              <li>
                <Link to="/productlist">My Order</Link>
              </li>
              <li>
                <Link to="/productlist">Track Order</Link>
              </li>
              <li>
                <Link to="/productlist">My Cart</Link>
              </li>
              <li>
                <Link to="/productlist">Profile</Link>
              </li>
            </ul>
            </div>
            </div>
            <div className="col-3">
          <div className="footerDetsila">
            <h3>Socila Link</h3>
            <ul>
              <li>
                <Link target="_blank" to={getDetails.social_media?.facebook}><span className="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></span>Facebook</Link>
              </li>
              <li>
                <Link target="_blank" to={getDetails.social_media?.Instagram}><span className="insta"><i class="fa fa-instagram" aria-hidden="true"></i></span>Instagram</Link>
              </li>
              <li>
                <Link target="_blank" to={getDetails.social_media?.Youtube}><span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>Youtube</Link>
              </li>
              <li>
                <Link target="_blank" to={getDetails.social_media?.WhatsApp}><span className="whatApp"><i class="fa fa-whatsapp" aria-hidden="true"></i></span>WhatsApp</Link>
              </li>
            </ul>
            </div>
            </div>
            <div className="col-3">
          <div className="footerDetsila contactDetsils">
            <h3>Contact Us</h3>
            <h4>{getDetails.site_name}</h4>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i><span>{getDetails.address}</span></p>
            <p><span><i class="fa fa-phone" aria-hidden="true"></i>{getDetails.contact}</span></p>
            <p><i class="fa fa-envelope-o" aria-hidden="true"></i><Link to="mailto:getDetails.email_address">{getDetails.email_address}</Link></p>
            <p><label>
            <i class="fa fa-whatsapp" aria-hidden="true"></i><Link to="tel:getDetails.whatsapp">{getDetails.whatsapp}</Link>
              </label></p>
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="botomFooter">
              <p>&copy; All Right Receved | <Link to="/">{getDetails.site_name}</Link></p>
              <p>Design By  <Link to="/">PK Software</Link></p>
            </div>
          </div>
        </div>
       </div>
      </footer>
    );
  }
  export default Header