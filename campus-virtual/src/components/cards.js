import '../Styles.css';
import inscripcion from '../images/inscipcion.jpeg';


function Cards(props) {
  return (
    <div className="Body">
       <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
           {props.titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.titulo}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.titulo}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.titulo}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.titulo}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.titulo}
          </div>
          <div className="card-body">
          <img className="img-fluid mb-3" src={inscripcion} alt="Inscripcion"></img>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Cards;
