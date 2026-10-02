import { useState, useEffect, useCallback } from 'react'

export function useTemporizador(segundos = 60) {
  const [restante, setRestante] = useState(segundos)
  const [corriendo, setCorriendo] = useState(false)

  // Descuenta un segundo mientras esté corriendo
  useEffect(() => {
    if (!corriendo) return
    const id = setInterval(() => {
      setRestante((r) => Math.max(r - 1, 0))
    }, 1000)
    return () => clearInterval(id)
  }, [corriendo])

  // Se detiene solo al llegar a cero
  useEffect(() => {
    if (restante === 0) setCorriendo(false)
  }, [restante])

  // Si cambia el parámetro, se reinicia con el nuevo valor
  useEffect(() => {
    setRestante(segundos)
    setCorriendo(false)
  }, [segundos])

  const iniciar = useCallback(() => {
    if (restante > 0) setCorriendo(true)
  }, [restante])

  const pausar = useCallback(() => setCorriendo(false), [])

  const reiniciar = useCallback(() => {
    setCorriendo(false)
    setRestante(segundos)
  }, [segundos])

  return { restante, corriendo, terminado: restante === 0, iniciar, pausar, reiniciar }
}