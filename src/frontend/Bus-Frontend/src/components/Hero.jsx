import "../styles/Hero.css";

import hero from "../assets/strike.jpg";

import { FaMapMarkerAlt, FaCalendarAlt, FaBus } from "react-icons/fa";

function Hero(){

return(

<section className="hero">

<div className="trip-planner">

<h2>Plan Your Journey</h2>

<div className="input-group">

<label>

<FaMapMarkerAlt />

Origin

</label>

<input
type="text"
placeholder="Choose Origin"
/>

</div>

<div className="input-group">

<label>

<FaMapMarkerAlt />

Destination

</label>

<input
type="text"
placeholder="Choose Destination"
/>

</div>

<div className="input-group">


</div>

<button>

<FaBus />

Search Routes

</button>

</div>

<div
className="hero-banner"
style={{

backgroundImage:`url(${hero})`

}}
>

<div className="hero-overlay">

<h1>

Travel Smarter Across South Africa

</h1>

<p>

Safe, Reliable and Affordable Public Transport

</p>

<button>

Learn More

</button>

</div>

</div>

</section>

)

}

export default Hero;