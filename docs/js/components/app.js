import React from "react";
import {Home} from "./home";
import {Newsletter} from "./newsletter";
import {Link} from "react-router-dom";

export const App = ({props, children}) => (
    <div>
        <nav className="navbar navbar-toggleable-md navbar-light fixed-top">
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="">
                Palmemordet
            </a>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Hem
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="timeline">
                            Tidslinje
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="video">
                            Videos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/page/tidslinje">
                            Tidslinje i text
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/page/mordet">
                            Mordet
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/page/links">
                            Länkar
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {children || <Home />}
                </div>
                <div className="col-md-4">
                    <Newsletter />
                </div>
            </div>
        </div>
    </div>
);
