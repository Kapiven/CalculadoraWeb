import React from 'react'
import Calculator from './Calculator'
import App from '../App'

export default {
  title: 'Componentes/Calculator',
  component: Calculator
}

// 1. Historia por defecto
export const Default = () => <Calculator />

// 2. Calculadora con zoom (accesibilidad)
export const ZoomedCalculator = () => (
  <div style={{ transform: 'scale(1.5)', transformOrigin: 'top left' }}>
    <Calculator />
  </div>
)

// 3. Calculadora con mucho padding (como si fuera una pantalla grande)
export const LargePadding = () => (
  <div style={{ padding: '50px' }}>
    <Calculator />
  </div>
)

// 4. Calculadora en modo “compacto” (reducida)
export const Compact = () => (
  <div style={{ transform: 'scale(0.7)', transformOrigin: 'top left' }}>
    <Calculator />
  </div>
)
