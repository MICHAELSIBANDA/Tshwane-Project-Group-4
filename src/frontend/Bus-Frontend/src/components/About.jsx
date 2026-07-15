import "../styles/Global.css";
import "../styles/About.css";

function About() {
  return (

    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
          alt="About"
        />
      </div>

      <div className="about-text">

        <h2>About Us</h2>

        <p>
          We provide safe, reliable and innovative transport and technology
          solutions that improve the lives of our customers.
        </p>

        <p>
          Our mission is to deliver world-class services while maintaining
          excellence, sustainability and customer satisfaction.
        </p>

        <button className="about-btn">
          Learn More
        </button>

      </div>

    </section>

  );
}

export default About;