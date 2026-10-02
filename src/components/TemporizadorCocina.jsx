import { useTemporizador } from '../hooks/useTemporizador'

export default function TemporizadorCocina() {
  const { restante, corriendo, terminado, iniciar, pausar, reiniciar } = useTemporizador(10)

  return (
    <section style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      <h2>🍳 Cocina</h2>
      <p style={{ fontSize: 32 }}>{restante} s</p>
      {terminado && <p>¡La comida está lista!</p>}
      <button onClick={iniciar} disabled={corriendo || terminado}>Iniciar</button>
      <button onClick={pausar} disabled={!corriendo}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </section>
  )
}