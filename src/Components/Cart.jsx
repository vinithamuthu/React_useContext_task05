import React, { useContext } from "react";
import { myContaxt } from "../App";

const Cart = () => {
  const [data, setData] = useContext(myContaxt);

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  const handleIncrease = (id, quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrease = (id, quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id && (item.quantity || quantity) > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity - 1 };
        }
        return item;
      });
    });
  };

  const removeItem = (id) => {
    setData(data.filter((data) => data.id !== id));
  };

  return (
    <div>
      <h4 className="text-center">Mobile Online Shop</h4>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h5>Total Quantity:{totalQuantity}</h5>
            <h5>Total Price:{totalPrice}</h5>
          </div>
        </nav>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="card" id="productCarousel">
                <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {item.images.map((img, index) => {
                      return (
                        <div className="carousel-item" key={index}>
                          <img className="d-block w-30" src={img} />
                        </div>
                      );
                    })}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <div>
                    {/* <div className="card" style={{width: "88rem"}}> */}

                    <div className="ctn">
                      {/* <li>{item.id}</li> */}
                      <h5 className="card-title"> {item.title} </h5>
                      <h3 className="card-id">{item.id}</h3>

                      <p className="card-text"> {item.description} </p>
                    </div>
                    {/* <li>{item.title}</li> */}
                    {/* <li>{item.description}</li> */}

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{item.price}</li>
                      <li className="list-group-item">
                        {item.discountPercentage}
                      </li>
                      <li className="list-group-item">{item.rating}</li>
                      <li className="list-group-item">{item.stock}</li>
                      <li className="list-group-item">{item.brand}</li>
                      <li className="list-group-item">{item.category}</li>
                      <img src={item.thumbnail} className="card-img-top"></img>
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

                  <button type="button"
                    className="btn btn-primary"
                    id="ps"
                    onClick={() => handleIncrease(item.id, item.quantity || 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button type="button"
                    className="btn btn-primary"
                    id="ms"
                    onClick={() => handleDecrease(item.id, item.quantity || -1)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button type="button"
                    className="btn btn-danger"
                    id="rm"
                    onClick={() => removeItem(item.id, item.quantity)}
                  >
                    Remove Item
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
