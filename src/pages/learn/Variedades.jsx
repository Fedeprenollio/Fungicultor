import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const pasos = [
  {
    name: "Inoculación en grano de trigo",
    img: "https://res.cloudinary.com/dewegl2jr/image/upload/v1666881650/fungi/inoculacion_trigo_yrfzwg.jpg",
  },
  {
    name: "Obtención del blanco",
    img: "https://res.cloudinary.com/dewegl2jr/image/upload/v1666883865/fungi/obtencion_del_blanco_ephpz7.png",
  },
  {
    name: "Colonización del grano por el micelio",
    img: "https://res.cloudinary.com/dewegl2jr/image/upload/v1666884353/fungi/colonizacion_del_grano_por_el_micelio_chdls6.png",
  },
  {
    name: "Sala de incubación de semillas",
    img: "https://res.cloudinary.com/dewegl2jr/image/upload/v1666884669/fungi/sala_incubacion_de_semilla_z6ldjj.png",
  },
];

const cultivo = [
  {
    info: `Sembrar el micelio sobre un
  sustrato preparado a base
  de paja húmeda de trigo, avena,
  centeno, maíz o cebada, sorgo, mijo… bagazo de
  caña, pulpa de café, residuos del plátano;
  desperdicios de algodón y cáscara de semilla de
  algodón; serrín de madera, residuos de soja, aceite
  de palma, residuos de agave
  (pasteurizada), incubarlo a
  unos 25º C envuelto en
  plástico y luego tenerlo en
  un sitio fresco, húmedo,
  ventilado e iluminado.`,
    sustrato: `Enriquecimiento del sustrato.
  Algunos cultivadores añaden
  distintos aditivos, heno picado,
  harina de maíz, harina de soja,
  harina de girasol, alfalfa
  deshidratada, salvado de arroz,
  etc. Al sustrato se le añaden para
  mejorarlo y proporcionar mayor
  producción: harina de plumas,
  yeso, urea, etc.
  • Tratamiento térmico. Con ello se
  consigue destruir semillas,
  insectos parásitos, hongos, etc,
  que puedan en desarrollarse
  sobre el sustrato. Para ello se
  realiza una pasteurización . `,
    siembra: `Consiste en mezclar el micelio con la paja o sustrato ya preparado,
  de un modo uniforme. La cantidad de micelio comercial varía entre 1 y 5
  % del peso húmedo. A mayor cantidad el desarrollo del hongo será más
  rápido y abundante pero la temperatura también será mayor, lo que
  perjudicará al desarrollo del micelio. El sustrato sembrado se introduce en sacos de plástico de 15 a 30 Kg de
  capacidad. El diámetro de los sacos debe ser inferior a los 40-50 cm, para
  evitar sobrecalentamientos del sustrato y una densidad inferior a 0,36. `,
    incubacion: `Los bloques de sustrato se colocan en la
  sala de incubación a 18-22º C. Para que
  el micelio crezca ha de estar a una
  temperatura óptima de 25º C. A los 15-20
  días el micelio habrá invadido el sustrato.
  Una vez colonizados los bloques, se
  empiezan a formar primordios o botones y
  trasladan a la sala de cultivo. Se darán
  riegos frecuentes pero no excesivos para
  evitar el desarrollo de enfermedades.
  – Su tamaño no puede sobrepasar los
  50cm en ninguna de sus dimensiones,
  para facilitar el transporte.
  – La mayor parte de la superficie ha de
  ser vertical para obtener setas de
  mayor calidad`,
    fructificacion: `Cuando el sustrato esté invadido se llevan los sacos al local de
  fructificación y se hacen agujeros en las bolsas o se retira el plástico
  completamente.
  • La temperatura debe ser fresca (11-14ºC) esto influye en la calidad
  de la seta (consistencia, color) y en la aparición de enfermedades.
  • Se debe mantener una alta humedad y regar los sacos.
  • Se debe disponer de un sistema de ventilación para evitar
  concentraciones de dióxido de carbono superiores al 0,07%.
  • Esta seta produce una ingente cantidad de esporas cuya
  acumulación puede causar trastornos alérgicos a los trabajadores;
  se han conseguido algunas variedades que no producen esporas.
  • La luz es necesaria para la fructificación normal del hongo. 8-12
  horas diarias.
  • Pasadas de 1 a 3 semanas tras la aparición del primer botón las
  setas ya se podrán cosechar.
  • Como en el caso del champiñón se producen varias oleadas
  aprovechándose hasta la tercera.
  • Tras la última recolección se vacía el local.
  • Habrán pasado de 2 a 4 meses desde el inicio del ciclo.`,
  },
];

export const Variedades = () => {
  return (
    <div className="container-fluid">
      <h2>Variedades</h2>
      <h3>Nombre: Pleurotus ostreatus</h3>
      <img
        src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666878718/fungi/200px-Austernseitling-1_zn9kwz.jpg"
        alt=""
      />
      <p className="h6 me-1">
        La seta de ostra o Pleurotus ostreatus es la variedad de seta comestible
        más fácil de cultivar con muy buenas propiedades culinarias y
        medicinales. Con frecuencia presentan un aroma a anís debido a la
        presencia de Benzaldehído
      </p>
      <div>
        <p className="h6">Fases del cultivo</p>
        <ListGroup variant="flush" numbered>
          <ListGroup.Item>Obtención de micelio.</ListGroup.Item>
          <ListGroup.Item> Preparación del sustrato.</ListGroup.Item>
          <ListGroup.Item>Inoculación.</ListGroup.Item>
          <ListGroup.Item>Incubación.</ListGroup.Item>
          <ListGroup.Item>Fructificación.</ListGroup.Item>
          <ListGroup.Item>Recolección.</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="row container-fluid ">
        {pasos.map((product, x) => {
          return (
            <Card className="m-1" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="container-fluid my-2">
        <h3>Cultivo</h3>
        <ListGroup variant="flush">
          <ListGroup.Item> <b> Sustrato:</b> {cultivo[0].sustrato}</ListGroup.Item>
          <ListGroup.Item><b>Siembra:</b> {cultivo[0].siembra}</ListGroup.Item>
          <ListGroup.Item><b>Incubación:</b> {cultivo[0].incubacion}</ListGroup.Item>
          <ListGroup.Item>
            <b>Fructificación:</b> {cultivo[0].fructificacion}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
