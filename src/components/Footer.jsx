import React from "react";

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p>© {year} Vikram Gujar. All rights reserved.</p>
        </div>
    );
}


export default Footer;