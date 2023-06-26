import React from "react";
import aboutImg from "../Assets/Images/about-img.jpg";
import { Col, Container, Row } from "react-bootstrap";
export default function About() {
  return (
      <Container className="m-auto d-md-flex  justify-md-content-center d-block gap-3">
        
          <div className="p-4">
            <img src={aboutImg} alt="about img" height="500px" />
          </div>
          <div >
            <div className="w-75 p-5 ">
              <h2 className="fs-26 ls-1 text-center" style={{color:'#85144b'}}>About Maktabti</h2>
              <p className="fs-17 ms-5   " style={{color:'#001f3f'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus dignissimos consequuntur vero commodi provident
                maiores, iusto atque corrupti voluptate vel sequi consectetur
                unde aliquam corporis saepe animi non, tempora reiciendis
                molestias sed laudantium dolores. Assumenda aperiam fuga quo
                voluptate commodi ullam aliquam expedita voluptas delectus.
              </p>
              <p className="fs-17 ms-5" style={{color:'#001f3f'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                dicta, possimus inventore eveniet atque voluptatibus repellendus
                aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
                dolore amet neque modi quas eum!
              </p>
            </div>
          </div>
       
      </Container>
  );
}
