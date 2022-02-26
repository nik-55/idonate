import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
      <a className="navbar-brand orgname" href="#">iDonate</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active tabstext" aria-current="page" href="#" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tabstext" href="#">Charity Basket</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tabstext" href="#">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link tabstext" href="#">eHelp</a>
          </li>

          <li className="nav-item">
            <a className="nav-link tabstext" href="#">Alerts</a>
          </li>
        
        </ul>
        {/* <div className="col-md-3 text-end"> */}
        <div style={{marginLeft:"50%"}}>
        <button type="button" className="btn btn-danger">Sign-up</button>
        <button type="button" className="btn btn-success me-2">Login</button>
      </div>
      </div>
    </div>
  </nav>

  )
}