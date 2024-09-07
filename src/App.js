import "./App.css";
import Sidebar from "./Sidebar";

import "./styles/css.css";
import "./styles/w3.css";
import Contact from "./components/contact/index.js";
import First from "./components/first/index.js";
import Footer from "./components/footer/index.js";
import Header from "./components/header/index.js";
import Images from "./components/images/index.js";
import Menu from "./components/menu/index.js";
import Pagination from "./components/pagination/index.js";
import Second from "./components/second/index.js";

function App() {
  return (
    <>
      {/* Sidebar/menu */}
      <Menu />
      ;{/* Overlay effect when opening sidebar on small screens */}
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onclick="w3_close()"
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      />
      {/* !PAGE CONTENT! */}
      <div className="w3-main" style={{ marginLeft: 300 }}>
        {/* Header */}
        <Header />
        {/* First Photo Grid*/}
        <First />
        {/* Second Photo Grid*/}
        <Second />
        {/* Pagination */}
        <Pagination />
        {/* Images of Me */}
        <Images />
        <div
          className="w3-container w3-padding-large"
          style={{ marginBottom: 32 }}
        >
          <h4>
            <b>About Me</b>
          </h4>
          <p>
            Just me, myself and I, exploring the universe of unknownment. I have
            a heart of love and an interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla. Praesent tincidunt sed
            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
            ultricies congue gravida diam non fringilla.
          </p>
          <hr />
          <h4>Technical Skills</h4>
          {/* Progress bars / Skills */}
          <p>Photography</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-padding w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <p>Web Design</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-padding w3-center"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <p>Photoshop</p>
          <div className="w3-grey">
            <div
              className="w3-container w3-dark-grey w3-padding w3-center"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <p>
            <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
              <i className="fa fa-download w3-margin-right" />
              Download Resume
            </button>
          </p>
          <hr />
          <h4>How much I charge</h4>
          {/* Pricing Tables */}
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-third w3-margin-bottom">
              <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">1GB Storage</li>
                <li className="w3-padding-16">Mail Support</li>
                <li className="w3-padding-16">
                  <h2>$ 10</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
            <div className="w3-third w3-margin-bottom">
              <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">50GB Storage</li>
                <li className="w3-padding-16">Endless Support</li>
                <li className="w3-padding-16">
                  <h2>$ 25</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
            <div className="w3-third">
              <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">Unlimited Storage</li>
                <li className="w3-padding-16">Endless Support</li>
                <li className="w3-padding-16">
                  <h2>$ 25</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
        <div className="w3-black w3-center w3-padding-24">
          Made with{" "}
          <a
            href="https://www.w3schools.com/spaces"
            title="spaces"
            target="_blank"
            className="w3-hover-opacity"
          >
            W3Schools Spaces
          </a>
        </div>
        {/* End page content */}
      </div>
      <Sidebar />
    </>
  );
}

export default App;
