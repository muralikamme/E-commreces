

// // import React from 'react';
// // import { Usecart} from "../stores/contex/Usecontex";
// // import Nava from "./componets/nav";
// // import "./UserCart.css";
// // import { useNavigate } from 'react-router-dom';




// // const UserCart = () => {
// //     const { cartitem, RemoveCart } = Usecart();
   
   

// //     const handleBuyNow = (item) => {
// //         // Add logic for "Buy Now", such as redirecting to a payment page
// //         alert(`your Order is confirm: ${item.product}`);
       
        
        
   

// //     };
  

// //     return (
// //         <>
// //             <Nava />
// //             <div>
// //             <center>  <h2 className='y-cart'>Your Cart</h2></center>
// //                 {cartitem.length === 0 ? (
// //                    <center> <p className='empty'>Your Cart is Empty</p></center>
// //                 ) : (
// //                     <div>
// //                         {cartitem.map((item) => {
// //                             return (
// //                                 <div className='cart-section' key={item.id}>
// //                                     <div className="cart-img">
// //                                         <img src={item.image} alt={item.product} />
// //                                     </div>
// //                                     <div className="cart-details">
// //                                         <h3>{item.product}</h3>
// //                                         <h2>₹{item.price}</h2>
// //                                         <h3>{item.model}</h3>
// //                                         <h5>{item.description}</h5>
// //                                     </div>
// //                                     <div className="cart-buttons">
// //                                         <button
// //                                             className='removeBtn'
// //                                             onClick={() => RemoveCart(item)}
// //                                         >

// //                                             Remove
// //                                         </button>
// //                                         <button
// //                                             className='buyNowBtn'
// //                                             onClick={() => handleBuyNow(item)}
// //                                         >
// //                                             Buy Now
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                 )}
// //             </div>
// //         </>
// //     );
// // };

// // export default UserCart;


// import React from 'react';
// import { Usecart } from "../stores/contex/Usecontex";
// import Nava from "./componets/nav";
// import "./UserCart.css";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';

// const UserCart = () => {
//     const { cartitem, RemoveCart } = Usecart();

//     const handleBuyNow = (item) => {
//         alert(`Your order is confirmed: ${item.product}`);
//     };
//     console.log(cartitem,"ll");

    
    

//     let Total=cartitem.reduce((acc,item)=>{
//         let str=item.price.replace(",","")

//         let num=Number(str)
//         return acc+=num

//     },0)
//     console.log(Total,"total");

    

//     return (
//         <>
//             <Nava />
//             <div>
//                 <center>
//                     <h2 className="y-cart">Your Cart</h2>
//                 </center>
//                 {cartitem.length === 0 ? (
//                     <center>
//                         <p className="empty">Your Cart is Empty</p>
//                     </center>
//                 ) : (
//                     <div>
//                         {cartitem.map((item) => (
//                             <div className="cart-section" key={item.id}>
//                                 <div className="cart-img">
//                                     <img src={item.image} alt={item.product} />
//                                 </div>
//                                 <div className="cart-details">
//                                     <h3>{item.product}</h3>
//                                     <h2>₹{item.price}</h2>
//                                     <h3>{item.model}</h3>
//                                     <h5>{item.description}</h5>
//                                 </div>
//                                 <div className="cart-buttons">
//                                     <button
//                                         className="removeBtn"
//                                         onClick={() => RemoveCart(item)}
//                                     >
//                                         Remove
//                                     </button>
//                                     <button
//                                         className="buyNowBtn"
//                                         onClick={() => handleBuyNow(item)}
//                                     >
//                                         Buy Now
//                                     </button>
//                                 </div>
//                             </div>
//                             <div>TotalAmount:{Total}</div>
                       
//                         ))}
//                     </div>
                     
                   
//                 )}
                




//             </div>
            
//         </>
//     );
// };

// export default UserCart;


import React from 'react';
import { Usecart } from "../stores/contex/Usecontex";
import Nava from "./componets/nav";
import "./UserCart.css";
import { useNavigate } from "react-router-dom";


const UserCart = () => {
    const { cartitem, RemoveCart } = Usecart();
    const navigate = useNavigate()

    const handleBuyNow = (item) => {
        alert(`Your order is confirmed: ${item.product}`);
       
    };

    // Calculate total amount
    let Total = cartitem.reduce((acc, item) => {
        let str = item.price.replace(",", "");
        let num = Number(str);
        return acc + num;
    }, 0);

    return (
        <>
            <Nava />
            <div>
                <center>
                    <h2 className="y-cart">Your Cart</h2>
                </center>
                {cartitem.length === 0 ? (
                    <center>
                        <p className="empty">Your Cart is Empty</p>
                    </center>
                ) : (
                    <div>
                        {cartitem.map((item) => (
                            <div className="cart-section" key={item.id}>
                                <div className="cart-img">
                                    <img src={item.image} alt={item.product} />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.product}</h3>
                                    <h2>₹{item.price}</h2>
                                    <h3>{item.model}</h3>
                                    <h5>{item.description}</h5>
                                </div>
                                <div className="cart-buttons">
                                    <button
                                        className="removeBtn"
                                        onClick={() => RemoveCart(item)}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="buyNowBtn"
                                        onClick={() => handleBuyNow(item)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                        
                        <div className="total-amount">
                            <center><h2>Total Amount: ₹{Total}</h2></center>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserCart;
