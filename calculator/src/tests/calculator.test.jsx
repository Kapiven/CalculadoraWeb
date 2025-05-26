import { expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'
import '@testing-library/jest-dom'

test('suma de dos números de más de un dígito', () => {
  const { getByText } = render(<Calculator />)
  fireEvent.click(getByText('1'))
  fireEvent.click(getByText('2'))
  fireEvent.click(getByText('+'))
  fireEvent.click(getByText('3'))
  fireEvent.click(getByText('4'))
  fireEvent.click(getByText('='))
  expect(getByText('46')).toBeInTheDocument()
})

test('limpiar con C reinicia la calculadora', () => {
  const { getByText } = render(<Calculator />)
  fireEvent.click(getByText('7'))
  fireEvent.click(getByText('C'))
  fireEvent.click(getByText('5'))
  fireEvent.click(getByText('+'))
  fireEvent.click(getByText('2'))
  fireEvent.click(getByText('='))
  expect(getByText('7')).toBeInTheDocument()
})

test('división por cero muestra ERROR', () => {
  const { getByText } = render(<Calculator />)
  fireEvent.click(getByText('9'))
  fireEvent.click(getByText('/'))
  fireEvent.click(getByText('0'))
  fireEvent.click(getByText('='))
  expect(getByText('ERROR')).toBeInTheDocument()
})

test('toggleSign cambia el signo del número', () => {
  const { getByText } = render(<Calculator />)
  fireEvent.click(getByText('5'))
  fireEvent.click(getByText('+/-'))
  expect(getByText('-5')).toBeInTheDocument()
  fireEvent.click(getByText('+/-'))
  expect(getByText('5')).toBeInTheDocument()
})
