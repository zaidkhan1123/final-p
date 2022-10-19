import React from 'react'

function Title() {
  return (
    <section id="title">
    <div className="container-fluid bg-info title-container-fluid">
      <div className="row align-items-center text-center">
        <div className="col-lg-5 offset-lg-1  col-md-12">
          <h1 className="main-heading text-white  mb-3">
            The Best App <br />
            in the Universe
          </h1>
          <p className=" m-target mb-5 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> eiusmod
            temp <br />
            or incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <div className="button m-target">
            <a href="#" className="text-uppercase header-btn">
              Load More Item
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mobile">
            <img
              className="mt-5 mb-5 "
              src="./smartphone-153650.png"
              alt=""
              style={{ width: "42%" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Title;
