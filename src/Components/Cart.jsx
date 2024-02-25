import React, { useContext } from "react";
import { myContaxt } from "../App";

const Cart = () => {
  const [data, setData] = useContext(myContaxt);

  const totalPrice = data.reduce((total,data)=>total + data.price * (data.quantity || 1) , 0)
  const totalQuantity = data.reduce((total,data)=>total + (data.quantity || 1), 0)

  

  const handleIncrease = (id,quantity) => {


    setData(preData=>{
      return preData.map((item)=>{
        if(item.id === id){
          return {...item, quantity:(item.quantity + 1 || quantity+1)}
          
        }
        return item
      })
    })

  };

  const handleDecrease = (id,quantity) => {
    setData(preData=>{
      return preData.map((item)=>{
        if(item.id === id && (item.quantity || quantity)>0){
          return {...item, quantity:(item.quantity - 1 || quantity-1)}
          
        }
        return item
      })
    })

  };

  const removeItem = (id) => {

    setData(data.filter((data)=>data.id !== id ) );
  };

  return (
    <div>
      <h1 className="text-center">Mobile Online Shop</h1>
      <div className="container">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <h1>Total Quantity:{totalQuantity}</h1>
      <h1>Total Price:{totalPrice}</h1>
      </div>
  </nav>
</div>
 

      {data.map((item, index) => {
        return (
          <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="card-body">

          <div key={index}>
          
          {/* <div className="card" style={{width: "88rem"}}> */}
          
          <div className="ctn">
            
              {/* <li>{item.id}</li> */}
              <h1 className="card-title"> {item.title} </h1>
              <h3 className="card-id">{item.id}</h3>
              
              <p className="card-text"> {item.description} </p>
               </div>
              {/* <li>{item.title}</li> */}
              {/* <li>{item.description}</li> */}
              
              <ul className="list-group list-group-flush">
             <li className="list-group-item">{item.price}</li>
              <li className="list-group-item">{item.discountPercentage}</li>
               <li className="list-group-item">{item.rating}</li>
               <li className="list-group-item">{item.stock}</li>
              <li className="list-group-item">{item.brand}</li>
               <li className="list-group-item">{item.category}</li>
               <img src={item.thumbnail} className="card-img-top" ></img>
               {/* <li className="list-group-item">{item.thumbnail}</li> */}


                  </ul>
                  </div>
              {/* <li>{item.price}</li>
              <li>{item.discountPercentage}</li>
              <li>{item.rating}</li>
              <li>{item.stock}</li>
              <li>{item.brand}</li>
              <li>{item.category}</li>
              <li>{item.thumbnail}</li> */}

              {item.images.map((img, index) => {
                return (
                  <>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-30" src={img} />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <button className="btn " id="ps" onClick={()=>handleIncrease(item.id,item.quantity || 1)}> + </button>
              <button className="btn " id="ms" onClick={()=>handleDecrease(item.id,item.quantity || -1)}> - </button>
              <button className="btn remove" id="rm" onClick={() => removeItem(item.id,item.quantity )}>Remove Item</button>
            {/* </div> */}
            </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
