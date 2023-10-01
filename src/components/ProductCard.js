import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import prodcompare from '../images/prodcompare.svg';
import watch from '../images/smartwatch.avif';
import watch2 from '../images/smartwatch2.avif';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';


const ProductCard = (props) => {
   const { grid } = props
   let location = useLocation();

   return (
      <>
         <div
            className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
         >
            <Link to=':id' className="product-card position-relative">
               <div className="wishlist-icon position-absolute">
                  <button className='border-0 bg-trasparent'>
                     <img src={wish} alt="wishlist" />
                  </button>
               </div>
               <div className="product-image">
                  <img src={watch} className='img-fluid' alt="product image" />
                  <img src={watch2} className='img-fluid' alt="product image" />
               </div>
               <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                     Kids headphones bulk 10 pack multi colored for sudents
                  </h5>
                  <ReactStars
                     count={5}
                     size={24}
                     value={4}
                     edit={false}
                     activeColor="#ffd700"
                  />
                  <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
                     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                  </p>
                  <p className="price">$100.00</p>
               </div>
               <div className="action-bar position-absolute">
                  <div className='d-flex flex-column gap-15'>
                     <button className='border-0 bg-trasparent'>
                        <img src={prodcompare} alt="compare" />
                     </button>
                     <button className='border-0 bg-trasparent'>
                        <img src={view} alt="view" />
                     </button>
                     <button className='border-0 bg-trasparent'>
                        <img src={addcart} alt="addcart" />
                     </button>
                  </div>
               </div>
            </Link>
         </div >
         <div
            className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
         >
            <Link to=':id' className="product-card position-relative">
               <div className="wishlist-icon position-absolute">
                  <button className='border-0 bg-trasparent'>
                     <img src={wish} alt="wishlist" />
                  </button>
               </div>
               <div className="product-image">
                  <img src={watch} className='img-fluid' alt="product image" />
                  <img src={watch2} className='img-fluid' alt="product image" />
               </div>
               <div className="product-details">
                  <h6 className="brand">Havells</h6>
                  <h5 className="product-title">
                     Kids headphones bulk 10 pack multi colored for sudents
                  </h5>
                  <ReactStars
                     count={5}
                     size={24}
                     value={4}
                     edit={false}
                     activeColor="#ffd700"
                  />
                  <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
                     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...
                  </p>
                  <p className="price">$100.00</p>
               </div>
               <div className="action-bar position-absolute">
                  <div className='d-flex flex-column gap-15'>
                     <button className='border-0 bg-trasparent'>
                        <img src={prodcompare} alt="compare" />
                     </button>
                     <button className='border-0 bg-trasparent'>
                        <img src={view} alt="view" />
                     </button>
                     <button className='border-0 bg-trasparent'>
                        <img src={addcart} alt="addcart" />
                     </button>
                  </div>
               </div>
            </Link>
         </div >
      </>
   )
}

export default ProductCard