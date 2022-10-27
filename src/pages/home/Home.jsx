import React from "react";
import Container from "react-bootstrap/Container";
import { Footer } from "../foot/Footer";

export const Home = () => {
  return (
    <div className="container-fluid ">
      <Container>
        <Container className="text-center ">
          <img
            className="rounded-circle img-fluid"
            src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666721949/fungi/mushroom-illustration-logo-vector-design-260nw-1747652519_e6d1qk.webp"
            alt=""
          />
        </Container>
        <h1 className="text-center mb-4">Martin Fungicultor!</h1>
        {/* <div  className='portada mt-3'></div> */}

        <div class="row">
          <div class="col text-center">
            <img
              className="portada1 img-fluid float-start   "
              src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666711252/fungi/img_fdbbz0.jpg"
              alt=""
            />
            <p className="text-center h3">Instructivos</p>
          </div>
          <div class="col text-center">
            <img
              className="portada2 img-fluid  "
              src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666711252/fungi/img_fdbbz0.jpg"
              alt=""
            />
            <p className="text-center h3">Insumos</p>
          </div>

          <div class="col text-center">
            <img
              className="portada3 img-fluid float-end "
              src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666711252/fungi/img_fdbbz0.jpg"
              alt=""
            />
            <p className="text-center h3">Informacion</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
