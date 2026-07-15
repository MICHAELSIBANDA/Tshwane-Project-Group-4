import "../styles/Footer.css";

import {

FaFacebookF,

FaInstagram,

FaTwitter,

FaLinkedin

}

from "react-icons/fa";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div>

<h2>

BusLink

</h2>

<p>

Connecting communities through safe,
reliable and modern public transport.

</p>

</div>

<div>

<h3>

Quick Links

</h3>

<ul>

<li>Home</li>

<li>Routes</li>

<li>Schedules</li>

<li>Stations</li>

<li>Contact</li>

</ul>

</div>

<div>

<h3>

Contact

</h3>

<p>

Johannesburg

</p>

<p>

+27 11 000 0000

</p>

<p>

info@buslink.co.za

</p>

</div>

<div>

<h3>

Follow Us

</h3>

<div className="socials">

<FaFacebookF/>

<FaInstagram/>

<FaTwitter/>

<FaLinkedin/>

</div>

</div>

</div>

<hr/>

<p className="copyright">

© 2026 BusLink. All Rights Reserved.

</p>

</footer>

)

}

export default Footer;