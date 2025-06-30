import { useState } from "react";
import Productos from "./Components/Productos/Productos";
import { productos } from "./data/productos.data";

function App() {

  let variableCorriente = false;

  // Función que inicializa y cambia el estado el componente 
  const [variableState, setVariableState] = useState(false);


  /* Función que cambia el estado ,Por lo general solo se escriben como handler y la acción. Pero hace lo que quieras.*/

  const handleClick = () => {

    variableCorriente = true;

    /*  set nombre de las variableState. todo los estados tiene este método para actualizar los estados */

    setVariableState(true);

  }

  /*  Los siguientes valores son considerados falsy en JavaScript: 
 false (el booleano)
 0 (cero)
 -0 (cero negativo)
 0n (BigInt cero)
 "" (cadena vacía)
 null
 undefined
 NaN (Not a Number)
 document.all
 Valores Truthy:
 Cualquier valor que no esté en la lista anterior se considera truthy. Esto incluye: 
 Todos los números distintos de cero (positivos y negativos)
 Cadenas no vacías (incluyendo cadenas con espacios en blanco)
 Arrays (incluso vacíos)
 Objetos (incluso vacíos)
 Funciones
 Infinity y -Infinity
 Contexto Booleano:
  */
  return (
    <>
      {/*    <p>Te gusta la pizza</p>
 */}
      {
        variableCorriente && <p>Respuestas de variable corriente</p>
      }

      Las variables normales no actualizan los estados del componte. Para eso utiliza el hook useState
      {
        variableState && <p>Respuesta variable state</p>
      }

      {/* onClick propiedad que establece los eventos , existe muchas mas pero todos empizan con on */}
      <button onClick={handleClick}>Cambiar</button>


      {
        productos.map((producto) => (
          <Productos nombre={producto.nombre} precio={producto.precio} />
        ))
      }


    </>
  )
}

export default App;
