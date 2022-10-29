import Carousel from "react-bootstrap/Carousel";

export function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
        //   style={{"maxWidth":"70%"}}
          className="d-block w-100  rounded "
          src="https://res.cloudinary.com/dewegl2jr/image/upload/v1667069702/fungi/Setas_comestibles_klrhg6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block w-100 rounded"
          src="https://res.cloudinary.com/dewegl2jr/image/upload/v1667069731/fungi/hongo-comun-e1553277017117-800x400_i0gtuy.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block w-100 rounded"
          src="https://res.cloudinary.com/dewegl2jr/image/upload/v1667069772/fungi/download_szsnfh.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
