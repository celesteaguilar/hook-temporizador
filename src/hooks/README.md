## useTemporizador(segundos = 60)

Cuenta regresiva con estado propio: permite iniciar, pausar y reiniciar,
y se detiene sola al llegar a cero.

**Parámetros**

| Nombre | Tipo | Por defecto | Descripción |
|--------|------|-------------|-------------|
| segundos | number | 60 | Duración inicial de la cuenta regresiva, en segundos. |

**Devuelve**

```js
{ restante, corriendo, terminado, iniciar, pausar, reiniciar }
// restante: number, segundos que faltan
// corriendo: boolean, true si la cuenta está avanzando
// terminado: boolean, true cuando restante llega a 0
// iniciar(): inicia o reanuda la cuenta
// pausar(): detiene la cuenta sin perder el tiempo restante
// reiniciar(): detiene y vuelve a `segundos`
```

**Ejemplo de uso**

```jsx
import { useTemporizador } from '../hooks/useTemporizador'

function TemporizadorCocina() {
  const { restante, corriendo, terminado, iniciar, pausar, reiniciar } = useTemporizador(10)
  return (
    <section>
      <p>{restante} s</p>
      {terminado && <p>¡La comida está lista!</p>}
      <button onClick={iniciar} disabled={corriendo || terminado}>Iniciar</button>
      <button onClick={pausar} disabled={!corriendo}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </section>
  )
}
```

**Limitaciones**

- Solo cuenta hacia atrás, en pasos de 1 segundo.
- No formatea el tiempo (mm:ss): eso le corresponde al componente.
- Pierde precisión si la pestaña queda en segundo plano (el navegador reduce los intervalos).
- No guarda el estado al recargar la página.
- Si cambia `segundos`, el temporizador se reinicia.