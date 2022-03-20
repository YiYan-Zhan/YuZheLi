import React from "react";
import { Link } from "react-router-dom";
function Header({ position }) {
    return (
        <div>
            <header>
                <h2 className="go-home">
                    <Link className="link" to={{ pathname: "/" }}>
                        YuZhe
                    </Link>
                </h2>
                <ul>
                    <li className={position === "about" ? "active" : null}>
                        <Link className="link" to={{ pathname: "/about" }}>
                            關於我
                        </Link>
                    </li>
                    <li className={position === "profolio" ? "active" : null}>
                        <Link className="link" to={{ pathname: "/profolio" }}>
                            作品集
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
