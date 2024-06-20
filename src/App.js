
import { useState } from 'react';
import './App.css';

function App() {

  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please Enter your amount")
    }
    else {
      const options = {
        key: "rzp_test_zn6RTHGabYStIV",
        key_secret: "BpOnwmLstFQ1kziw8OJN7Afx",
        amount: amount * 100,
        currency: "INR",
        name: "Dharaneesh",
        description: "For sample integration razorpay in react",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert("Transaction Sucessfully Completed")
        },
        prefill: {
          name: "Dharaneesh",
          email: "dharaneeshdharaneesh76@gmail.com",
          contact: "7598844817",
        },
        notes: {
          address: "Razorpay",
        },
        theme: {
          color: "#f9f9",
        },
      };
      const pay = new window.Razorpay(options)
      pay.open();
    }
  }
  return (
    <div className="App">
      <h2>Razorpay Payment Integration In React</h2>
      <br />
      <br />
      <input type="text" placeholder='Enter Your Amount' value={amount} onChange={(e) =>
        setAmount(e.target.value)
      } />
     
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
