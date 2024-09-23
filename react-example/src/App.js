import { useState, useEffect } from 'react';


function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title=`Contador : ${contador}`
  }, [contador])

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  const reiniciar = () => {
    setContador(0);
  }

  return (
    <div>
      <h1>Contador de clicks: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;