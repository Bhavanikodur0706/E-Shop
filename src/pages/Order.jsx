import React from 'react';

const Order = ({ order }) => {
  if (!order) {
    return <p>Order details are loading...</p>;
  }

  console.log('Order details gained in order page:', order);

  return (
    <div>
      <h2>Thank you for your order</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly!</p>

      <div>
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber ? order.orderNumber : 'N/A'}</p>

        <div>
          <h2>Shipping Details</h2>
          {order.ShippingInformation ? (
            <>
              <p>City: {order.ShippingInformation.city}</p>
              <p>Zip Code: {order.ShippingInformation.zip}</p>
            </>
          ) : (
            <p>Shipping details are not available.</p>
          )}
        </div>

        <div>
          <h2>Products Ordered</h2>
          {order.products && order.products.length > 0 ? (
            order.products.map((product, index) => (
              <div key={index}>
                <p>{product.name} x {product.quantity}</p>
              </div>
            ))
          ) : (
            <p>No products found in the order.</p>
          )}
        </div>
        <div>
        <p>Order Total: {order.totalPrice ? order.totalPrice : 'N/A'}</p>
        </div>
      </div>
      <div>
        <button>Order Tracking</button>
        <button>Continue Shoppimg</button>
      </div>
    </div>
  );
};

export default Order;
