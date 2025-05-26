import { useState } from 'react'

export default function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [current, setCurrent] = useState(null)
  const [operator, setOperator] = useState(null)
  const [resetNext, setResetNext] = useState(false)

  const limit = val => val.length > 9 ? 'ERROR' : val

  const format = num => {
    if (num < 0 || num > 999999999) return 'ERROR'
    return limit(String(num))
  }

  const calculate = (a, b, op) => {
    const na = parseFloat(a)
    const nb = parseFloat(b)
    if (op === '+') return na + nb
    if (op === '-') return na - nb
    if (op === '*') return na * nb
    if (op === '/') return nb === 0 ? 'ERROR' : na / nb
    if (op === '%') return na % nb
    return nb
  }

  const handleInput = input => {
    if (input === 'C') return clear()
    if (input === '+/-') return toggleSign()
    if (input === '.') return inputDot()
    if ('0123456789'.includes(input)) return inputNumber(input)
    if (['+', '-', '*', '/', '%'].includes(input)) return setOperation(input)
    if (input === '=') return compute()
  }

  const inputNumber = num => {
    if (display === 'ERROR') return
    if (resetNext) {
      setDisplay(num)
      setResetNext(false)
    } else {
      const next = display === '0' ? num : display + num
      setDisplay(limit(next))
    }
  }

  const inputDot = () => {
    if (resetNext) {
      setDisplay('0.')
      setResetNext(false)
    } else if (!display.includes('.')) {
      setDisplay(limit(display + '.'))
    }
  }

  const setOperation = op => {
    if (current && operator) {
      const result = calculate(current, display, operator)
      setDisplay(format(result))
      setCurrent(String(result))
    } else {
      setCurrent(display)
    }
    setOperator(op)
    setResetNext(true)
  }

  const compute = () => {
    if (!current || !operator) return
    const result = calculate(current, display, operator)
    setDisplay(format(result))
    setCurrent(null)
    setOperator(null)
    setResetNext(true)
  }

  const clear = () => {
    setDisplay('0')
    setCurrent(null)
    setOperator(null)
    setResetNext(false)
  }

  const toggleSign = () => {
    if (display === 'ERROR') return
    const next = display.startsWith('-') ? display.slice(1) : '-' + display
    setDisplay(limit(next))
  }

  return { display, handleInput }
}
