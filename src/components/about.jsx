export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p></p>
              <h2>About FTC</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
        <h3>FTC Robotics Teams:</h3>
        <div className="list-style">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            {props.data
              ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
              : "loading"}
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            {props.data
              ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>)
              : "loading"}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <h3>
              <br />
              Season Timeline:
            </h3>
            <h4>Game Rules Announced</h4>
            <li>
              <b>September </b> Students will begin meeting multiple times
              during the week to discuss the details of the new game and
              strategize
            </li>
            <h4>Build Season</h4>
            <li>
              <b>October - December </b> Students will continue to meet often,
              to take their plans and concepts and bring them to life
            </li>
            <h4>Regional Meets</h4>
            <li>
              <b>October - January </b> Students will participate in several
              practice events along with 3 Divisional Meets
            </li>
            <h4>League Championship</h4>
            <li>
              <b>February - March</b>If the team advances, we will travel to
              state and national championships
            </li>
            <h4>Prep Season</h4>
            <li>
              <b>March - May</b>Students will continue to meet monthly to grow
              as a team and plan for upcomming events
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
