import { useState } from "react";
import "./Contact.scss";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
      emailjs
        .sendForm(
          "service_8vv2phh",
          "template_bw3i7j1",
          e.target,
          "user_22jpP9vlYQZn0bCBjMwW9"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <div className="myImgContainer">
              <img src="assets\Narenkumar_-_Lap-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <TextField name="email" color="secondary" placeholder="Email ID" />
            <TextField
              name="message"
              color="secondary"
              id="outlined-multiline-static"
              multiline
              placeholder="Message"
              rows={6}
            />
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </>
  );
}