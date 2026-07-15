import "../styles/News.css";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

function News() {
  const news = [
    {
      image: news1,
      title: "New Routes Available",
      text: "We've expanded our services to reach more communities across South Africa."
    },
    {
      image: news2,
      title: "Reduced Travel Times",
      text: "Experience faster journeys with our improved transport network."
    },
    {
      image: news3,
      title: "Travel Smart",
      text: "Download our mobile app to track buses and receive live updates."
    }
  ];

  return (
    <section className="news-section" id="news">

      <h2>Latest News</h2>

      <div className="news-grid">

        {news.map((item, index) => (

          <div className="news-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="news-content">

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <button>Read More</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default News;