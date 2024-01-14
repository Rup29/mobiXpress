import Product from './Product'
import headphone1 from '../../images/headphone-1.png';
import headphone2 from '../../images/headphone-5.png';
import headphone3 from '../../images/headphone-8.png';
import ipad1 from '../../images/ipad-1.png';
import mobile1 from '../../images/mobile-1.png';
import mobile2 from '../../images/mobile-5.png';
import watch1 from '../../images/watch-9.png';
import blutooth1 from '../../images/blutooth-4.png';
function ProductList(){
   let products =[
      {
          category:"Headphones", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:headphone1
      },
      {
          category:"Headphones", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:headphone2
      },
      {
          category:"Headphones", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:headphone3
      },
      {
          category:"Ipad", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:ipad1
      },
      {
          category:"Mobile", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:mobile1
      },
      {
          category:"Mobile", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:mobile2
      },
      {
          category:"Watch", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:watch1
      },
      {
          category:"Blutooth", name:"Galaxy Android Tablet", price:"15000.00", lessPrice:"20520.0", quality:"Seald-Pack", image:blutooth1
      },
  ]
    return(
      <div className="container">
        <div className="heading">
        <h2 className=''>Trending Products</h2>
        <svg _ngcontent-ng-c379887800="" width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c379887800="" d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="#fe0000" stroke-width="4" stroke-miterlimit="3.8637" stroke-linecap="round"></path></svg>
        </div>
       <div className="product-group">
         {
          products.map((product, index)=>{
            return(
               <div className='product-colum'>
                  <a href=''>
                  <Product category={product.category} name={product.name} price={product.price} lessPrice={product.lessPrice} image={product.image} quality={product.quality} key={index}/> 
                  </a>
                  </div>
            )
          })
         }
       </div>
       </div>
    );
}
export default ProductList;