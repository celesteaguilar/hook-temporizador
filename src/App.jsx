import TemporizadorCocina from './components/TemporizadorCocina'
import TemporizadorEstudio from './components/TemporizadorEstudio'

export default function App() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 400, margin: '2rem auto' }}>
      <TemporizadorCocina />
      <TemporizadorEstudio />
    </div>
  )
}