import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Pagination,
  Card,
} from "react-bootstrap";
import logo from "./logo.svg";
import Slider1 from "./images/Slider1.jpg";
import Slider2 from "./images/Slider2.jpg";
import Slider3 from "./images/Slider3.jpg";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";
import card5 from "./images/card5.gif";
import card6 from "./images/card6.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* NavBar Code */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">MANHWA TEAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Main Page</Nav.Link>
              <Nav.Link href="#action2">Manga List</Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Magic</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">School Life</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Newest
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Carousels Code */}
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src={Slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src={Slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="600px"
            src={Slider3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Cards Code */}
      <div className="SectionCard">
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" height="400px" src={card5} />
          <Card.Body>
            <Card.Title>Return Of The Mount Hua</Card.Title>
            <Card.Text>
              is a Korean manhwa and webnovel. Chung Myung, The 13th Disciple of
              the Mount Hua Sect, One of the 3 Great Swordsmen, Plum Blossom
              Sword Saint, defeated Chun Ma, who has brought destruction and
              disarray onto the world. He is reborn after 100 years in the body
              of a child. What will he do now?
            </Card.Text>
            <Button variant="primary">Read Manhwa</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" height="400px" src={card4} />
          <Card.Body>
            <Card.Title> Noblesse </Card.Title>
            <Card.Text>
              The story revolves around a vampire theme, and (without spoiling
              it for you) I find that although it is not some drastic change and
              new look into vampire manga, the Noble look at vampires is the
              focal point concerning the vampires, nobles, and the humans. The
              story is building up well
            </Card.Text>
            <Button variant="primary">Read Manhwa</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" height="400px" src={card1} />
          <Card.Body>
            <Card.Title>DICE</Card.Title>
            <Card.Text>
              The story follows Dongtae, an unlucky boy who has problems with
              just about everything including the girl he can't have or doesn't
              want to be embarrassed. It seems, grades, even being bullied,
              hates his life. He asks him once: If you could change your life by
              playing a game, would you?
            </Card.Text>
            <Button variant="primary">Read Manhwa</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" height="400px" src={card6} />
          <Card.Body>
            <Card.Title>Martial Peak</Card.Title>
            <Card.Text>
              The pinnacle of martial arts is solitary and lonely,In order to
              surpass the limits of martial arts, growth and the will to survive
              in adverse situations is necessary. One day, Yang Kai, discovered
              a Wordless Black Book.That marked the turn in his luck and the
              beginning of his martial arts.
            </Card.Text>
            <Button variant="primary">Read Manhwa</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" height="400px" src={card3} />
          <Card.Body>
            <Card.Title>Solo Leveling</Card.Title>
            <Card.Text>
              Plot. In a world where hunters, humans who possess magical
              abilities, must battle deadly monsters to protect the human race
              from certain annihilation, a notoriously weak hunter named Sung
              Jinwoo finds himself in a seemingly endless struggle for survival.
            </Card.Text>
            <Button variant="primary">Read Manhwa</Button>
          </Card.Body>
        </Card>
      </div>
      {/* Pagination  Code */}
      <div className="Pagination1">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
      {/* Pargraph Code */}
      <div>
        <br></br>
        <p>
          The best translations and in several languages,,,,<br></br> Follow all
          the new in the world of manhwa,,,,<br></br> You only have to register
          for free with us to receive all that,,,,<br></br> Be the first and
          take the initiative to register
        </p>
        <br></br>
      </div>
      {/* Form Code */}
      <Form className="mainform">
        <div className="formdiv">
          <Form.Group className="mb-3 formstyle " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 formstyle" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 formstyle" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I'm Not a Robot" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Done
          </Button>
        </div>
      </Form>
      <br></br>
      {/* Footer Code */}
      <footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT US </h5>
              <p>
                Our site translates and publishes the latest versions of the
                Manhwa comics, and we maintain the privacy of our subscribers
                and the arrival of everything new to them We also welcome your
                contact with us...
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : tahatiay53@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 0021654080468</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218916627970</a>
                </li>
                <li>
                  <a href="#!">Address : Aluwaina-tunes</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
