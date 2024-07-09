import "./Carreras.css";

const Carreras = () => {
  return (
    <div className="container_carreras-total">

    


    <div className="background_tittle">
      <div className="container_carreras-tittle">
        <h1 className="carreras__tittle">
          NUESTRAS CARRERAS <i className="fa-duotone fa-graduation-cap"></i>
        </h1>
      </div>

      <div className="background">
        <div className="centering">
          <div className="articles">
            <article>
              <figure>
                <img
                  className="img-article"
                  src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720484277/medidascard_zqns1j.jpg"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2 className="carreras_tittle-protesis">Protesis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Praesent in
                  mauris eu tortor porttitor accumsan.
                  <a href="#" className="read-more" title="Read More">
                    Ver más
                  </a>
                </p>
              </div>
            </article>
            <article>
              <figure>
                <img
                  src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720484277/medidascard_zqns1j.jpg"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Diseño y Desarrollo web</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Praesent in
                  mauris eu tortor porttitor accumsan.
                  <a href="#" className="read-more" title="Read More">
                    Ver mas
                  </a>
                </p>
              </div>
            </article>
            <article>
              <figure>
                <img
                  src="https://res.cloudinary.com/dxhcv6buy/image/upload/v1720484277/medidascard_zqns1j.jpg"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Contabilidad</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent in mauris eu tortor porttitor accumsan. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Praesent in
                  mauris eu tortor porttitor accumsan.
                  <a href="#" className="read-more">
                    Ver mas
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Carreras;
