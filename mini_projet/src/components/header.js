import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.css'

export class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <Link id="logo" className="link" to="/">UntitledLux</Link>
                    <div className="nav-container">
                        <div className="nav-bar">
                            <Link id="home-nav-btn" className="link" to="/">Home</Link>
                            <Link id="blog-nav-btn" className="link" to="/blog">Blog</Link>
                            <Link id="contacts-nav-btn" className="link" to="/contacts">Contacts</Link>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Header;