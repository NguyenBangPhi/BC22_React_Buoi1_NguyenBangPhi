import React from 'react'
export default function Itemsmartphone() {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/300" alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">iPhone X</h4>
            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
            <a href="#1" className="btn btn-primary mr-1">Detail</a>
            <a href="#2" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}
