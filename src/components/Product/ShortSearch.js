import headphone1 from '../../images/headphone-1.png';
import mobile from '../../images/mobile-1.png';
import watch from '../../images/watch-9.png';
import blutooth from '../../images/blutooth-4.png';
function ShortSerach(){
    const shortItem =[
      {image:headphone1, category:"Head Phone", noOFitem:"100"},
      {image:mobile, category:"Mobile", noOFitem:"500"},
      {image:watch, category:"Watch", noOFitem:"100"},
      {image:blutooth, category:"Blutooth", noOFitem:"100"}
    ];
   return(
    <div className="ShortSerach">
      <div className="container">
        <ul>
            {
             shortItem.map((item, index)=>{
                return(
                    <li key={index}>
                    <div className="ShortSerachImage">
                     <img src={item.image} alt='Short Image'/>
                    </div>
                    <h3><a href=''>{item.category}</a></h3>
                    <p>{item.noOFitem} Product</p>
                </li>
                )
             })
            }
          
        </ul>
      </div>
    </div>

   )
}
export default ShortSerach;