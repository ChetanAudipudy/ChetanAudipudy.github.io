import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import "./Contact.css";

const styles = {
  width: "95%"
};
const Contact = () => {
  return (
    <div>
      <Appbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className=" get-in-touch-container">
              <div className="card">
                <div className="get-in-touch">
                  <h3>Get in Touch!</h3>
                  <p>
                    You can reach me by sending a message on the right, by email
                    or by phone as listed below.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Email:</b> chetan.audipudy@gmail.com
                  </li>
                  <li className="list-group-item">
                    <b>Ph:</b> +1(847)-(778)-(3316)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form-container">
              <div className="card" style={styles}>
                <div className="contact-form">
                  <h3>Message me here!</h3>
                  <form
                    method="POST"
                    action="https://formspree.io/chetan.audipudy@gmail.com"
                  >
                    <div className="form-group">
                      <label for="exampleInputEmail1">Your Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Type your email here"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Your Messsage</label>
                      <input
                        className="form-control message-form"
                        name="message"
                        placeholder="Type your message here"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="_next"
                      value="https://www.chetanaudipudy.com"
                    />
                    <button type="submit" className="btn btn-dark bg-dark">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
