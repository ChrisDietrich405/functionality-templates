import React from "react";
import { Link } from "next/link"

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Accordion</h5>
              <p className="card-text">
                A simple accordion template from 15-react-apps
              </p>
              <a href="https://github.com/ChrisDietrich405/15-accordion" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Accordion
              </a>
            </div>
          </div>
          <div className="card my-auto" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between" style={{height: "15rem"}}>
              <h5 className="card-title">Form</h5>
              <p className="card-text">
                A simple form with no libraries.
              </p>
              <a href="https://github.com/ChrisDietrich405/form" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Form
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Navbar</h5>
              <p className="card-text">
               A simple navbar with responsivity and hamburger menu from 15 react apps
              </p>
              <a href="https://github.com/ChrisDietrich405/15-navbar" className="btn btn-primary">
                Navbar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Pagination</h5>
              <p className="card-text">
                A simple pagination
              </p>
              <a href="https://github.com/ChrisDietrich405/pagination" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Pagination
              </a>
            </div>
          </div>
          <div className="card my-auto" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between" style={{height: "15rem"}}>
              <h5 className="card-title">Form</h5>
              <p className="card-text">
                A simple form with no libraries.
              </p>
              <a href="https://github.com/ChrisDietrich405/form" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Form
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Navbar</h5>
              <p className="card-text">
               A simple navbar with responsivity and hamburger menu from 15 react apps
              </p>
              <a href="https://github.com/ChrisDietrich405/15-navbar" className="btn btn-primary">
                Navbar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
