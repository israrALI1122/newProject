import React from 'react'

const Navebar = (props) => {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home </a>
                    </li>
                </ul>
            </div>
            <div className={`form-check form-switch text-${props.color === `light` ? `dark` : `light`}`}>
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
            
        </nav>

    )
}

export default Navebar