import React from "react";

function Contact() {
  return (
    <footer
      id="contact"
      className="text-center text-lg-start bg-light text-muted w-100 bg-light mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5">
          <span>Get in touch:</span>
        </div>
      </section>
      <section className>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <a id="link" href="https://www.buymeacoffee.com/feitozamarcelo">
                  Marcelo Gomes Feitoza
                </a>
              </h6>
              <a href="https://www.instagram.com/m.feitozaa_/" target="_blank">
                <p>Instagram</p>
              </a>
              <a
                href="https://www.linkedin.com/in/marcelofeitoza7/"
                target="_blank"
              >
                <p>Linkedin</p>
              </a>
              <a href="https://github.com/marcelofeitoza/" target="_blank">
                <p>Github</p>
              </a>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Eunapolis, BA - Brazil
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                feitoza.marcelo7@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> +55 73 99812 2560
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Contact;
