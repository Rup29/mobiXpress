import samsung from '../../images/samsung.png'
import Nokia from '../../images/nokia.png'
import Apple from '../../images/apple.png'
import Xaomi from '../../images/xiaomi.png'
import Realme from '../../images/realmi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faChevronDown,faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Category(){
   function openCategory(){
    document.getElementById("category").classList.toggle("open")
   }
    return(
       <div className="categoryBox">
           <label onClick={openCategory}><FontAwesomeIcon icon={faBars} style={{marginRight:'15px'}}/>All Category <FontAwesomeIcon icon={faChevronDown} style={{position:'absolute',right:'15px'}}/></label>
           <ul id="category">
            <li>
                <a><img src={samsung}/>Samsumg <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px', color:'#888'}}/></a>
            </li>
            <li>
                <a><img src={Nokia}/>Nokia <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px',color:'#888'}}/></a>
            </li>
            <li>
                <a><img src={Apple}/>Apple <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px',color:'#888'}}/></a>
            </li>
            <li>
                <a><img src={Xaomi}/>Xaomi <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px',color:'#888'}}/></a>
            </li>
            <li>
                <a><img src={Realme}/>Realme <FontAwesomeIcon icon={faAngleRight} style={{position:'absolute',right:'15px',color:'#888'}}/></a>
            </li>
           </ul>
       </div>
    );
}
export default Category;