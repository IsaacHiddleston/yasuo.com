import React from "react";
import "./Contack.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75c73d1e-4080-4051-a5c3-8148327e733d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <label htmlFor="god">Your ugly name</label>
        <input type="text" required />
        <label htmlFor="place">where the fuck r u from</label>
        <input type="text" required />
        <label htmlFor="location">tell the fuck about yourself</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="type the fuck up"
          required
        ></textarea>
        <button type="sumit" className="btn">
          summit
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
