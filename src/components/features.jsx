

export const Features = (props) => {
  return (
    <div id='features' >
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title text-center'>
          <h2>alpha SAAS</h2>
          <h4>Software como Servicio</h4>
          <img src="img/alpha/rayam.png" className="rayam" alt="" />
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12'>
                  {' '}
                  {/* <h3>{d.title}</h3> */}
                  <p>{d.text}</p>
                  {/* <p>{d.text}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p> */}
                  <div className='col-md-10 col-md-offset-1 section-title text-center '>
                  <p className="mensaje">{d.mensaje}</p>
          
                  </div>

                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
      <h3>Alpha CORE</h3>
      <img src="img/alpha/raya3.png" className="derecha" alt="" />
      <img src="img/alpha/SAAS.png" className="saas " alt="" />
    </div>
  )
}
export const AboutHome= (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
         
          <div className="col-md-10 col-md-offset-1 section-title text-center ">
            <div className="about-text">
            <h2>COMO TRABAJAMOS</h2>
          <img src="img/alpha/rayam.png" className="rayam" alt="" />
              <p className="p-trabajo">1 Estamos atentos a tus requerimientos, tomamos en cuenta cada detalle de tu negocio. 2 de manera que te entregamos una primera propuesta personalizada 3 La cual validaremos lado a lado 4 y así realizar los ajustes y validaciones necesarios  para la aprobacion que 5 dara inicio al proyecto.</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-10 col-md-offset-1 section-title text-center ">
            {" "}
            <img src="img/alpha/PATH.png" className="img-trabajo" alt="" />{" "}
          </div>
          <div className="col-md-10 col-md-offset-1 section-title text-center ">
            <div className="about-text">
            
          
              <p className="p-trabajo">6 Desarrollaremos el proyecto utilizando metodologías ágiles que nos permitirán  7 realizar el seguimiento a lo largo de la vida de todo el proyecto garantizando así 8 La  entrega  a tiempo, con calidad y seguridad acorde a los estándares internacionales.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
