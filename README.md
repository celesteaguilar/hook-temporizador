# hook-temporizador

Demostración de un custom hook propio, `useTemporizador`, usado en dos componentes
independientes: `TemporizadorCocina` y `TemporizadorEstudio`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

## Documentación del hook

Ver [src/hooks/README.md](src/hooks/README.md).

## Análisis

**1. ¿Qué lógica encapsula el hook y por qué es un hook y no una utilidad?**
El hook guarda el tiempo restante y si el temporizador está corriendo, y usa
`useEffect` para crear y limpiar el intervalo. Como tiene estado y ciclo de vida,
debe ser un hook. Las funciones de `formato.js` solo reciben un dato y devuelven otro,
sin estado, por eso son utilidades.

**2. ¿Por qué los dos componentes no comparten el estado?**
Cada llamada a `useTemporizador` crea su propio `useState` dentro de su componente.
El hook comparte la lógica, no los datos. En la captura 2, Cocina avanzó hasta `6 s`
y Estudio siguió en `00:25`.

**3. Versionado semántico**
Un cambio que rompa el uso existente obliga a la 2.0.0, por ejemplo devolver un arreglo
en lugar de un objeto o renombrar `restante` o `iniciar`. Un cambio compatible requiere
solo la 1.1.0, por ejemplo agregar un valor nuevo como `progreso`.