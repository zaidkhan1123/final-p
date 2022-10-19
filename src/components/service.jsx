import React from 'react'

function Service() {
  return (
    <section id="services" className="section-gap">
    <div className="container">
      <div className="row">
        <div className="col-12  text-center  ">
          <h1 className="text-dark   ">Latest News from all categories</h1>
          <p className="padding-bottom text-muted ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 text-center ">
          {" "}
          <div className="   pt-5">
            {" "}
            <img
              className="mt- mb-5 "
              src="./effects (1).png"
              alt=""
              style={{ width: "16%" }}
            />{" "}
          </div>
          <h5 className="mt-3">Maintenance</h5>
          <p className="text-muted">
            inappropriate behavior is often laughed off <br /> “boys will be
            boys women face higher <br /> especially in the workplace. That
            Lorem, ipsum dolor. why.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 text-center ">
          {" "}
          <div className="   pt-5">
            {" "}
            <img
              className="mt- mb-5 "
              src="./rocket (1).png"
              alt=""
              style={{ width: "16%" }}
            />{" "}
          </div>
          <h5 className="mt-3">Residential Service</h5>
          <p className="text-muted">
            inappropriate behavior is often laughed off <br /> boys will be boys
            women face higher <br /> conduct especially in the workplace. That
            Lorem, ipsum dolor .
          </p>
        </div>
        <div className="col-lg-4 col-md-12 text-center ">
          {" "}
          <div className="   pt-5">
            {" "}
            <img
              className="mt- mb-5 "
              src="./bug (1).png"
              alt=""
              style={{ width: "16%" }}
            />{" "}
          </div>
          <h5 className="mt-3">Commercial Service</h5>
          <p className="text-muted">
            inappropriate behavior is often laughed off <br />
            “boys will be boys women face higher <br /> conduct especially in
            the workplace That Lorem ipsum dolor why.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service;
