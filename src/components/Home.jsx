import React, { useState } from "react";
import  Container  from "react-bootstrap/Container";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/carousel/burger.jpg";
import img2 from "../assets/carousel/pasta.jpg";
import img3 from "../assets/carousel/pizza.jpg";
import img4 from "../assets/carousel/romantic_dinner.jpg";
import vg from "../assets/blog/blog_image3.webp";

const Home = () => {
  const [form, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })
  const submitHandler = e => {
    e.preventDefault();
    
  };
  const formInputChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Container className="home-div" id="home">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={1000}
          showThumbs={false}
        >
          <Container id="img-div">
            <img src={img1} alt="Item1" />
            <h1>30% Off This Weekend</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nulla doloribus, adipisci culpa commodi architecto vel. Iusto,
              laborum? Delectus, distinctio nostrum. Quis possimus molestias
              perspiciatis recusandae eius aliquam explicabo ipsum!
            </p>
          </Container>
          <Container id="img-div">
            <img src={img2} alt="Item1" />
            <h1>50% Off Pasta For Nasta</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nulla doloribus, adipisci culpa commodi architecto vel. Iusto,
              laborum? Delectus, distinctio nostrum. Quis possimus molestias
              perspiciatis recusandae eius aliquam explicabo ipsum!
            </p>
          </Container>
          <Container id="img-div">
            <img src={img3} alt="Item1" />
            <h1>30% Off This Weekend</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nulla doloribus, adipisci culpa commodi architecto vel. Iusto,
              laborum? Delectus, distinctio nostrum. Quis possimus molestias
              perspiciatis recusandae eius aliquam explicabo ipsum!
            </p>
          </Container>
          <Container id="img-div">
            <img src={img4} alt="Item1" />
            <h1>30% Off This Weekend</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nulla doloribus, adipisci culpa commodi architecto vel. Iusto,
              laborum? Delectus, distinctio nostrum. Quis possimus molestias
              perspiciatis recusandae eius aliquam explicabo ipsum!
            </p>
          </Container>
        </Carousel>
      </Container>
      <Container className="home">
        <main>
          <h1>Little Lemon WebSite</h1>
          <p>Order Whatever You Want</p>
        </main>
      </Container>
      
     
      <Container className="home3">
        <Container>
          <img src={vg} alt="little lemon" />
          <Container id="detail-opening" className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum,
              odio distinctio, libero voluptate laborum quos nihil,
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Operning Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday & Tuesday</td>
                  <td>CLOSED</td>
                </tr>
                <tr>
                  <td>Wednesday-Friday</td>
                  <td>9am-8pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9am-5pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>11am-7pm</td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Container>
      </Container>
      <Container className="home4" id="about">
        <Container>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            architecto vero ad quo, accusamus corporis sed ipsa eos tenetur
            suscipit. Amet explicabo optio deserunt, voluptatem molestiae
            expedita. Mollitia, unde ratione? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ipsum reiciendis ex ut in autem dicta
            ducimus rem tenetur at sint, cupiditate ad. Ab reiciendis nemo rem
            saepe libero nostrum nihil.
          </p>
        </Container>
      </Container>
      <Container className="contact" id="contact">
        <main>
          <h1>Contact</h1>
          <form>
            <Container>
              <label htmlFor="name" onChange={e => formInputChange(e)}>Name</label>
              <input type="text" name="name" required placeholder="name" />
            </Container>
            <Container>
              <label htmlFor="email" onChange={e => formInputChange(e)}>Email</label>
              <input type="email" name="email" required placeholder="xyz12@gmail.com" />
            </Container>
            <Container>
              <label htmlFor="message" onChange={e => formInputChange(e)}>Message</label>
              <input type="text" name="message" required placeholder="for query" />
            </Container>

            <button type="sumit" onClick={submitHandler}>Send</button>
          </form>
        </main>
      </Container>
    </>
  );
};

export default Home;
