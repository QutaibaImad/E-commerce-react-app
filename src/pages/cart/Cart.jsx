import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom"

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return cartItems.length < 1 ? (
    <div className="empty-cart">
      <h1>Your Shopping Cart Is Empty</h1>
      <p>There Is No Goods</p>
      <Link className="empty-cart-link" to="/products">
        Goods Page
      </Link>
    </div>
  ) : (
    <>
      <section className="cart">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    Amount:
                    <span>{item.quantity}</span>
                  </div>
                  <div className="cart-item-price">
                    Price:
                    <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                  </div>
                  <i
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              Part Of Your Order Is Qualifie For Free Shipping, Select This Option After
              Payment Has Been Received
            </div>
            <div className="cart-summary-total">
              Total:
              <span>
                {cartItems
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}
                $
              </span>
            </div>
            <button className="cart-summary-btn">Complete The Purchase</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
