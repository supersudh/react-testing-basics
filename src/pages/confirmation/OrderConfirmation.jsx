import { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation({ setOrderPhase }) {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    async function postOrder() {
      try {
        const { data } = await axios.post(`http://localhost:3030/order`);
        setOrderNumber(data.orderNumber);
      } catch (error) {
        // todo: supersudh, handle error here
      }
    }
    // dummy post for now
    postOrder();
  }, []);

  function handleClick() {
    // clear the order details
    resetOrder();

    // send back to the order page
    setOrderPhase('inProgress');
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
}