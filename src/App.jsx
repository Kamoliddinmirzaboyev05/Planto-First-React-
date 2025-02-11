import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/public/logom.svg" alt="" />
            </div>
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Plants Type</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="navBtns">
              <img src="/public/search.svg" alt="" />
              <img src="/public/cart.svg" alt="" />
              <img src="/public/bar.svg" alt="" />
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="heroHead">
              <div className="heroText">
                <h1>Breath Natureal </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="heroBtns">
                  <button className="explore">Explore</button>
                  <div className="playBtn">
                    <button className="liveDemo">
                      <i className="fa-solid fa-play"></i>
                    </button>
                    <p>Live Demo</p>
                  </div>
                </div>
              </div>
              <div className="heroImg">
                <img src="/public/heroimg.png" alt="" />
                <div className="heroBoxText">
                  <p className="boxTitle">Trendy House Plant</p>
                  <p className="productName">Calathea plant</p>
                  <i className="fas fa-chevron-right toright"></i>
                  <button className="buyNow">Buy Now</button>
                  <div className="dots">
                    <img src="/public/active.svg" alt="" />
                    <img src="/public/dot.svg" alt="" />
                    <img src="/public/dot.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="heroComment">
              <div className="commentWriter">
                <img src="/public/writer1.png" alt="" />
                <div className="rateWriter">
                  <p>Alena Patel</p>
                  <img src="/public/starst.svg" alt="" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
            <div className="trendyPlants">
              <h2 className="plantsTitle">Our Trendy plants</h2>
              <div className="plants">
                <div className="plantsImg">
                  <img src="/public/heroplant.png" alt="" />
                </div>
                <div className="plantsText">
                  <h2>For Small Decs Ai Plat</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <h2>Rs. 599/-</h2>
                  <div className="plantsBtns">
                    <button className="explore">Explore</button>
                    <button className="cartBtn">
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="plants fresh">
                <div className="plantsImg">
                  <img src="/public/gul2.png" alt="" />
                </div>
                <div className="plantsText">
                  <h2>For Small Decs Ai Plat</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <h2>Rs. 599/-</h2>
                  <div className="plantsBtns">
                    <button className="explore">Explore</button>
                    <button className="cartBtn">
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="section1">
          <div className="container">
            <h2 className="sectionTitle">Our Top Selling</h2>
            <div className="block">
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="boxImg">
                  <img src="/public/box1.png" alt="" />
                </div>
                <div className="boxText">
                  <h2>Calathea plant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="price">
                    <h2>Rs. 359/-</h2>
                    <button>
                      <img src="/public/cart.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <h2 className="sectionTitleComment">Customer Review</h2>
            <div className="commentBlock">
              <div className="commentBox">
                <img src="/public/commentback.png" alt="" />
                <div className="commentText">
                  <div className="commentWriter">
                    <img src="/public/writer1.png" alt="" />
                    <div className="rateWriter">
                      <p className="writerName">Alena Patel</p>
                      <img src="/public/starst.svg" alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div className="commentBox">
                <img src="/public/commentback.png" alt="" />
                <div className="commentText">
                  <div className="commentWriter">
                    <img src="/public/writer1.png" alt="" />
                    <div className="rateWriter">
                      <p className="writerName">Alena Patel</p>
                      <img src="/public/starst.svg" alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
              <div className="commentBox">
                <img src="/public/commentback.png" alt="" />
                <div className="commentText">
                  <div className="commentWriter">
                    <img src="/public/writer1.png" alt="" />
                    <div className="rateWriter">
                      <p className="writerName">Alena Patel</p>
                      <img src="/public/starst.svg" alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section3">
          <div className="container">
            <h2 className="sectionTitleBest">Our Best o2</h2>
            <div className="plants">
              <div className="plantsImg">
                <img src="/public/best.png" alt="" />
              </div>
              <div className="plantsText">
                <h2 className="bestTitle">
                  We Have Small And Best O2 Plants Collection’s
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="plantsBtns">
                  <button className="explore">Explore</button>
                  <button className="sliderOrder">
                    <i className="fas fa-chevron-left"></i>
                    <p>01/04</p>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="col">
            <img src="/public/logom.svg" alt="" />
            <p className="footerInfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="socials">
              <p>FB</p>
              <p>TW</p>
              <p>LI</p>
            </div>
          </div>
          <div className="col footerLinks">
            <p className="bolder">Quick Link’s</p>
            <p>Home</p>
            <p>Type’s Of plant’s</p>
            <p>Contact</p>
            <p>Privacy</p>
          </div>
          <div className="col">
            <p className="bolder">For Every Update.</p>
            <form action="#">
              <input type="text" placeholder="Enter Email" />
              <button>Subscribe</button>
            </form>
            <p className="copy">planto © all right reserve</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
