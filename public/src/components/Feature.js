import card from '../images/credit-card.png';
import refund from '../images/refund-policy.png';
import call from '../images/call-center.png';
import packages from '../images/package-delivery.png';

function Feature(){
    return(
        <div className="featureBox">
            <div className="container">
               <ul>
                <li>
                    <div className="featureBoxItem">
                        <img src={card}/>
                        <div className="featureBoxItemDetails">
                        <h4>Secured Payment</h4>
                        <p>We do not explore</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="featureBoxItem">
                    <img src={refund}/>
                        <div className="featureBoxItemDetails">
                        <h4>Refund On 5 Working Days</h4>
                        <p>Money back guarantee</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="featureBoxItem">
                    <img src={call}/>
                        <div className="featureBoxItemDetails">
                        <h4>24/7 Support On Demand</h4>
                        <p>Contact us 24 hours a day</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="featureBoxItem">
                    <img src={packages}/>
                        <div className="featureBoxItemDetails">
                        <h4>Store Pick Up Avaibale</h4>
                        <p>Orders from all item</p>
                        </div>
                    </div>
                </li>
               </ul>
            </div>
        </div>
    )
}
export default Feature;