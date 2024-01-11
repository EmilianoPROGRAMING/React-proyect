import  PropTypes  from "prop-types"

// function elMasGrande() {
//   if (elMasGrande < 5) {
//     return 'no es el mas grande'
//   }else {
//     return 'este si que lo vamo a romper'
//   }
// }

// const newMessage = {
//   tiulo: 'el mas gande river',
//   descripcion: 'es el mejor equipo de argentina',
//   copas: 70
// };

/* aca estuvimos practicando los diferentes componentes pero no se pueden poner objetos
 porque sino se rompe todo el codigo*/
export const PrimerTarea = ({title, subTitle, name}) => {

  // console.log(props);
  return (
    <>
      {/* <h2> { elMasGrande(7) }</h2> */}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

PrimerTarea.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
}
PrimerTarea.defaultProps = {
  name: 'emiliano',
  subTitle: 'no hay subtitilo',
  // title: 'no hya titulo'
}
