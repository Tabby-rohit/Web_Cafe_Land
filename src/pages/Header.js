import "./Header.css";
import {useEffect,useState} from "react";

const Header = () => {
  const [mouse,setMouse] = useState({x: 0,y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      setMouse({x,y});
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const floatingItems = [
  {className: "floating--pink",x: -190,y: -290,depth: 20},
  {className: "floating--blue",x: -420,y: 200,depth: 35},
  {className: "floating--yellow",x: 400,y: -180,depth: 18},
  {className: "floating--green",x: 450,y: 180,depth: 25},
  {className: "floating--purple",x: 260,y: -290,depth: 15},
  {className: "floating--green",x: -650,y: -200,depth: 25}
];

  return (
    <header className="header">
      <div className="header__overlay"></div>

      <nav className="navbar">
        <div className="navbar__logo">WebCafe</div>

        <ul className="navbar__links">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <button className="navbar__button">Get Started</button>
      </nav>

      <div className="hero">
        <div className="hero__content">
          <h1>
            The all-in-one platform
            <br />
            for AI and Web Design
          </h1>

          <p>
            WebCafe helps you build, launch and scale production-ready AI
            experiences in real-time.
          </p>

          <button className="hero__button">
            Get Started — It’s Free →
          </button>
        </div>

        {floatingItems.map((item,index) => (
          <div
            key={index}
            className={`floating ${item.className}`}
            style={{
              transform: `translate3d(${item.x + mouse.x * item.depth}px, ${item.y + mouse.y * item.depth}px, 0)`
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;