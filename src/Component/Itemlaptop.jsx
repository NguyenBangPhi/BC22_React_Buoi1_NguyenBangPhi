import React from 'react'

export default function Itemlaptop() {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src="https://picsum.photos/200/300?grayscale" alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">MACBOOK</h4>
            <p className="card-text">The MacBook is a brand of notebook computers manufactured by Apple Inc</p>
            <a href="#" className="btn btn-primary mr-1">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}
