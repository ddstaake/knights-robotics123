import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: ""
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_971iw3u",
        "template_5zolyda",
        e.target,
        "user_urVUoufByBXOjBffX7KUZ"
      )
      .then(
        (result) => {
          alert(name + ", You Are Registered!");
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>
                  SUPER SMASH BROS. TOURNAMENT
                  <br />
                  April 29th - 6:30-10PM
                </h2>
                <p>
                  <b>$10 Per Person - Due at Event</b>
                  <br />
                  The Robotics Club is hosting a{" "}
                  <b>Super Smash Bros Ultimate </b>
                  tournament.{" "}
                </p>
                <p>
                  - What: Super Smash Bros. 2v2 Double Elimination Tournament{" "}
                  <br />
                  - Where : Metro East Lutheran, Aux. Gym <br />
                  - When : April 29th - 6:30PM - 10PM <br />- Who : All MEHLS
                  students and their teammates <br />- Why: Bragging rights and
                  the 1st Place gets a Gift Card
                </p>
                <p>
                  <b>The Specifics</b>
                  <br />
                  <li>
                    Players who do not want to use the standard sideways Joy-Con
                    should bring their own Dual Joy-Con Pro controller
                  </li>
                  <li>
                    Rules: Style: Stock Stock: 3; Time Limit: 8 minutes; FS
                    Meter: Off; Damage Handicap: Off; Items: Off and None; Stage
                    Hazards: Off; Launch Rate: 1.0x; Score Display: Off; Show
                    Damage: Yes; Rotation: Host preference; Max Players: 2;
                    Stage: Choice; Spirits: Off; Voice Chat: Off; Song
                    Selection: Default
                  </li>
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <h2>Register Now:</h2>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        required
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your Teammate (if you have one)"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    value={message}
                    onChange={handleChange}
                    placeholder="Music Requests (Artist, Song...)"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info"></div>
        </div>
      </div>
    </div>
  );
};
