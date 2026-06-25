import "./About.css";

const About = () => {
  const features = [
    {
      title: "AI Powered",
      description:
        "Leverage advanced AI tools to accelerate design and development."
    },
    {
      title: "Fast Deployment",
      description:
        "Launch your web projects instantly with seamless integrations."
    },
    {
      title: "Scalable Solutions",
      description:
        "Build systems that grow with your business needs effortlessly."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__left">
          <p className="about__tag">ABOUT WEBCAFE</p>

          <h2>
            Building the future of
            <span> AI Experiences</span>
          </h2>

          <p className="about__description">
            At WebCafe, we combine creativity, technology and intelligence to
            help businesses build premium digital products. From landing pages
            to AI-powered platforms, we deliver modern experiences designed for
            performance and growth.
          </p>

          <div className="about__stats">
            <div>
              <h3>50+</h3>
              <p>Projects Built</p>
            </div>

            <div>
              <h3>20+</h3>
              <p>AI Integrations</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="about__right">
          {features.map((feature,index) => (
            <div className="about__card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;