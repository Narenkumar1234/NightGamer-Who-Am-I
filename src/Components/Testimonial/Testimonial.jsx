import "./Testimonial.scss";

export default function Testimonials(){
  const data = [
    {
      id: 1,
      name: "Python",
      img: "assets/PythonCert.jpeg",
      desc: "Manipulate files and processes running on the Operating System using Python",
    },
    {
      id: 2,
      name: "Data Science",
      img: "assets/What is dataScience.jpeg",
      desc: "Define data science and its importance in today’s data-driven world.",
      featured: true,
    },
    {
      id: 3,
      name: "Java",
      img: "assets/JavaCert.jpg",
      desc: "Learned the basics of Java Programing. Explored to various OOP Concepts",
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <h1>Certificates</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
