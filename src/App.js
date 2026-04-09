import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <p>© My React Website</p>
    </footer>
  );
}

/* ---------- Home ---------- */
function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Home</h2>
      <p>
        I’m Pallabi Boro, a 4th semester Computer Science and Engineering student 
        at Dhemaji Engineering College.
      </p>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <div className="container">
      <h2>Contact</h2>

      <p>
        📞 Contact Number: 
        <a href="tel:123xxxxxxx"> +91 123xxxxxxx</a>
      </p>

      <p>
        📧 E-mail: 
        <a href="mailto:pb@gmail.com"> pb@gmail.com</a>
      </p>

      <p>
        📸 Instagram: 
        <a href="https://instagram.com/your_username" target="_blank" rel="noreferrer">
          instagram.com
        </a>
      </p>

      <p>
        📘 Facebook: 
        <a href="https://facebook.com/your_profile" target="_blank" rel="noreferrer">
          facebook.com
        </a>
      </p>

    </div>
  );
}

/* ---------- Education ---------- */
function Education() {
  return (
    <div className="container">
      <h2>Education</h2>

        <li>
          B.Tech in Computer Science and Engineering (ASTU): Dhemaji Engineering College, 2024 – 2028
        </li>

        <li>
          Higher Secondary (AHSEC): Aryabhatta Ideal Academy, 2023
        </li>

        <li>
          High School (SEBA): Gopchachuba High School, 2021
        </li>
    </div>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  {users.map(user => (
  <p key={user.id}>{user.name}</p>
))}

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h2>Skills</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    </div>
  );
}

/* ---------- Weather (CLICK WORKING) ---------- */
function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "41f5551d8b6bdf0a9226bb2f1d042848"; // put your key

  const getWeather = async () => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="container">
      <h2>Weather</h2>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

/* ---------- App ---------- */
function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>My Website</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/weather">Weather</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;