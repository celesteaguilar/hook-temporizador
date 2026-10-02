import { useTemporizador } from '../hooks/useTemporizador'

export default function TemporizadorEstudio() {
  const { restante, corriendo, terminado, iniciar, pausar, reiniciar } = useTemporizador(25)
  const min = String(Math.floor(restante / 60)).padStart(2, '0')
  const seg = String(restante % 60).padStart(2, '0')

  return (
    <section style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      <h2>📚 Sesión de estudio</h2>
      <p style={{ fontSize: 32 }}>{min}:{seg}</p>
      {terminado && <p>Hora de descansar.</p>}
      <button onClick={iniciar} disabled={corriendo || terminado}>Empezar</button>
      <button onClick={pausar} disabled={!corriendo}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </section>
  )
}