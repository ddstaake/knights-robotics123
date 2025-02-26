export const Events = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Events</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`}>
                    {" "}
                    <div className="col-xs-12 col-md-3">
                      <div class="date">
                        <p>
                          {d.day} <span>{d.month}</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-9">
                      <div class="event_text">
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
