import React from 'react'

function Pricing() {
  return (
    <section id="pricing" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5 mb-5  ">
          <h1>Choose the Perfect Plan for you</h1>
          <p className="text-muted">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-4   ">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ width: "100%" }}
          >
            <div className="card-header py-3  bg-white card-body ">
              <h4 className="my-0 fw-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $199<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button  "
                className="w-100 btn btn-lg btn-dark btn-effect rounded-0 "
              >
                PURCHASE PLANE
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4  ">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ width: "100%" }}
          >
            <div className="card-header py-3 bg-white card-body ">
              <h4 className="my-0 fw-normal">Business</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $299<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-dark rounded-0"
              >
                PURCHASE PLANE
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4  ">
          <div
            className="card mb-4 rounded-3 shadow-sm"
            style={{ width: "100%" }}
          >
            <div className="card-header py-3 bg-white card-body ">
              <h4 className="my-0 fw-normal">Ultimate</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $399<small className="text-muted fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-dark rounded-0"
              >
                PURCHASE PLANE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing;
