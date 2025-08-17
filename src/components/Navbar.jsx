import React from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className={`container-fluid`}>
    <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">Netflix-Cards</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">Home</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">About</a>
        </li>
         <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">More Options</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleBtn} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
