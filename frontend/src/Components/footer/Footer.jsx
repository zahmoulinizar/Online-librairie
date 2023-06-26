import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const products = useSelector((state) => state.prod.products);

  return (
   
      <footer style={{backgroundColor:'#001f3f'}}>
        <div className="container p-4 d-none d-lg-flex">
          <section>
            <div className="row">
              {products.slice(0,6).map((product)=> (
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded w-100 h-100"
                  data-ripple-color="light"
                >
                  <img src={product.image.url} className="w-100 h-100"  width="300" height="300" alt="" />
                  
                </div>
              </div>
              ))}
            </div>
          </section>
        </div>

        <section className="d-flex justify-content-start justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className=" border-bottom">
          <div className="container  ">
            <div className="row mt-3">
              <div className="col-md-12 col-lg-4  col-xl-2 col-sm-12  col-12 ">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-2 col-sm-6 col-6  ">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                {products.slice(0,3).map((prod)=> (
                <p>
                  <a href="#!" className="text-reset">
                    {prod.name}
                  </a>
                </p>
                ))}
                
              </div>

              <div className="col-md-4 col-lg-4 col-xl-2  col-sm-6  col-6 ">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link href="#!" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link href="#!" className="text-reset">
                    Store
                  </Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                
              </div>

              <div className="col-md-4 col-lg-6 col-xl-3  col-sm-6  col-6 ">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Tunisia ,Sfax, Skhira 3050
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  nizarzahmouli351@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 216 52 368 662
                 
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-3  col-sm-6 col-6 ">
                <form action="">
                  <div className="row">
                    <div className="col-auto mb-4 mb-md-0">
                      <p className="pt-2">
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>

                    <div className="col-md-12 col-12 mb-4 mb-md-0">
                      <div className="form-outline mb-4 bg-light">
                        <input
                          type="email"
                          id="form5Example25"
                          className="form-control"
                        />
                        <label className="form-label" for="form5Example25">
                          Email address
                        </label>
                      </div>
                    </div>

                    <div className="col-auto mb-4 mb-md-0">
                      <button type="submit" className="btn btn-primary mb-4">
                        Subscribe
                      </button>
                    </div>
                    <div classNameName="text-center mt-3">
                      © 2023 Copyright:
                      <a className="text-info" href="#">
                        Maktabti.com
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
  
  );
};

export default Footer;
