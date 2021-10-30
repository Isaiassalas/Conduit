


export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>alpha SERVICIOS</h2>
          <img src="img/alpha/rayam.png" className="rayam" alt="" />
          <p>
          Nuestro objetivo es proporcionar servicios profesionales para dar soluciones tecnológicas y de gestión, adaptadas a cada cliente, usando herramientas y metodologías agiles.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  {' '}
                  <img src={d.img} alt='...' className='img-service' />
                  <div className='service-desc'>
                    <p>{d.name}</p>
                    <h3>{d.text}</h3>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}