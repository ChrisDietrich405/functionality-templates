import React from "react";
import { Link } from "next/link";

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
              <a
                href="https://github.com/ChrisDietrich405/15-accordion"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Accordion
              </a>
            </div>
          </div>
          <div className="card my-auto" style={{ width: "18rem" }}>
            <div
              className="card-body d-flex flex-column justify-content-between"
              style={{ height: "15rem" }}
            >
              <h5 className="card-title">Form</h5>
              <p className="card-text">A simple form with no libraries.</p>
              <a
                href="https://github.com/ChrisDietrich405/form"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Form
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Navbar</h5>
              <p className="card-text">
                A simple navbar with responsivity and hamburger menu from 15
                react apps
              </p>
              <a
                href="https://github.com/ChrisDietrich405/15-navbar"
                className="btn btn-primary"
              >
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
              <p className="card-text">A simple pagination</p>
              <a
                href="https://github.com/ChrisDietrich405/pagination"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Pagination
              </a>
            </div>
          </div>
          <div className="card my-auto" style={{ width: "18rem" }}>
            <div
              className="card-body d-flex flex-column justify-content-between"
              style={{ height: "15rem" }}
            >
              <h5 className="card-title">Search Input</h5>
              <p className="card-text">A simple search-input</p>
              <a
                href="https://github.com/ChrisDietrich405/search-input"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Search Input
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Slideshow</h5>
              <p className="card-text">
                A slideshow with arrows for users to scroll
              </p>
              <a
                href="https://github.com/ChrisDietrich405/15-slider"
                className="btn btn-primary"
              >
                Slideshow
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Sidebar</h5>
              <p className="card-text">
                A collapsable sidebar (navbar) with hamburger and with links
                that have icons next to them. It also includes a simple modal
              </p>
              <a
                href="https://github.com/ChrisDietrich405/15-sidebar-tsx"
                className="btn btn-primary"
              >
                Sidebar
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Stripe</h5>
              <p className="card-text">
                A navbar with an expanded submenu for sublinks
              </p>
              <a
                href="https://github.com/ChrisDietrich405/15-stripe"
                className="btn btn-primary"
              >
                Stripe
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">React Table</h5>
              <p className="card-text">
                A table with form inputs including name, email, address. It
                includes the inputs in one state object. It includes ability to
                add and edit people.
              </p>
              <a
                href="https://github.com/ChrisDietrich405/react-table"
                className="btn btn-primary"
              >
                React Table
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Chris Blakely Budget</h5>
              <p className="card-text">
                A budget app with context api, reduce function, bootstrap,
                search
              </p>
              <a
                href="https://github.com/ChrisDietrich405/chris-blakely-budget"
                className="btn btn-primary"
              >
                Chris Blakely Budget
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Julio Budget</h5>
              <p className="card-text">
                A budget app similar to Chris Blakely's but with Material UI
              </p>
              <a
                href="https://github.com/ChrisDietrich405/julio-budget"
                className="btn btn-primary"
              >
                Julio Budget
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Clothes Ecommerce</h5>
              <p className="card-text">
                An Ecommerce app with dynamic routing in React Router, and a
                cart using the reduce function and local storage. It also
                includes authentication for users to log in order to go to the
                cart
              </p>
              <a
                href="https://github.com/ChrisDietrich405/clothes-app-github"
                className="btn btn-primary"
              >
                React Table
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Deved React Todo</h5>
              <p className="card-text">
                A todo app with complete, delete functionality and a
                select/option to display the completed or incomplete todos
              </p>
              <a
                href="https://github.com/ChrisDietrich405/deved-react-todo"
                className="btn btn-primary"
              >
                Deved React Todo
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Counter Redux</h5>
              <p className="card-text">A very simple redux example</p>
              <a
                href="https://github.com/ChrisDietrich405/counter-redux/tree/main/src"
                className="btn btn-primary"
              >
                Counter Redux
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Jhonson Tours Practice</h5>
              <p className="card-text">
                An application that includes TypeScript, Context, and dynamic
                routing in React Router using useNavigate
              </p>
              <a
                href="https://github.com/ChrisDietrich405/jhonson-tours-practice"
                className="btn btn-primary"
              >
                Jhonson Tours Practice
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">useReducer Practice</h5>
              <p className="card-text">
                A simple login page with useReducer for the logging in
                functionality and try catch
              </p>
              <a
                href="https://github.com/ChrisDietrich405/useReducer-practice"
                className="btn btn-primary"
              >
                useReducer Practice
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Notes</h5>
              <p className="card-text">
                An application that includes TypeScript, a search functionality
                and local storage
              </p>
              <a
                href="https://github.com/ChrisDietrich405/notes"
                className="btn btn-primary"
              >
                Notes
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Groceries Typescript</h5>
              <p className="card-text">
                An input application with editing, local storage and typescript
              </p>
              <a
                href="https://github.com/ChrisDietrich405/Groceries-Typescript"
                className="btn btn-primary"
              >
                Groceries Typescript
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Crud Prac</h5>
              <p className="card-text">
                A Node JS application with back end functionality
              </p>
              <a
                href="https://github.com/ChrisDietrich405/crud-prac"
                className="btn btn-primary"
              >
                Crud Practice
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Next Events</h5>
              <p className="card-text">
                A Next application with serverSideProps and staticSideProps and
                backend functionality
              </p>
              <a
                href="https://github.com/ChrisDietrich405/events-app"
                className="btn btn-primary"
              >
                Next Events
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Next Material</h5>
              <p className="card-text">
                A great template for working with Next and Material UI together.
                It has a few different components
              </p>
              <a
                href="https://github.com/hadnazzar/nextjs-materialui"
                className="btn btn-primary"
              >
                Next Material
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-content-between">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Mario React Api</h5>
              <p className="card-text">
                A very simple form with backend and MYSQL
              </p>
              <a
                href="https://github.com/ChrisDietrich405/mario-create-api"
                className="btn btn-primary"
              >
                Mario React Api
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Next Events</h5>
              <p className="card-text">
                A Next application with serverSideProps and staticSideProps and
                backend functionality
              </p>
              <a
                href="https://github.com/ChrisDietrich405/events-app"
                className="btn btn-primary"
              >
                Next Events
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">Next Material</h5>
              <p className="card-text">
                A great template for working with Next and Material UI together.
                It has a few different components
              </p>
              <a
                href="https://github.com/hadnazzar/nextjs-materialui"
                className="btn btn-primary"
              >
                Next Material
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
