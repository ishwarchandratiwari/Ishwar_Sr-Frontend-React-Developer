import React from "react";
import utils from "../services/utils";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  user: state.user
});

const Basket = ({ cartItems, removeFromCart, user }) => {
  function checkout() {
    if (user.status===false) {
      alert('Please login')
    } else {
      alert('Checkout page not implemented yet')

    }
  }
  return (
    <div className="alert alert-info">
      {cartItems.length === 0 ? (
        "Basket is empty"
      ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
      {cartItems.length > 0 && (
        <div>
          <ul style={{ marginLeft: -25 }}>
            {cartItems.map(item => (
              <li key={item.id}>
                <b>{item.title}</b>
                <button
                  style={{ float: "right" }}
                  className="btn btn-danger btn-xs"
                  // onClick={e => removeFromCart(e, item)}
                  onClick={() => removeFromCart(cartItems, item)}
                >
                  X
                </button>
                <br />
                {item.count} X {utils.formatCurrency(item.price)}
              </li>
            ))}
          </ul>
          <b>
            Sum:
            {utils.formatCurrency(
            cartItems.reduce((a, c) => a + c.price * c.count, 0)
          )}
          </b>
          <button

            onClick={checkout}
            className="btn btn-primary"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Basket);
