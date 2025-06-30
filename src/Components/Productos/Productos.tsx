
interface Props {
  nombre: string,
  precio: number
}

/**
 * Necesitas propiedades para imprimirlo en el component?
 * 
 * Si  - lo necesita establece las props. (Propiedades que recibirá el componente).
 * 
 * NO -  no hagas nada :V
 * @param params nombre y precio
 * @returns JSX.Element  son los componentes de react
 */
const Productos = ({ nombre, precio }: Props) => {
  return (
    <div>
      <h1>
        {nombre}
      </h1>
      <p>el precio del producto: {precio * 2} </p>
    </div>
  )
};

export default Productos;