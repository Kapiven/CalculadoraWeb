import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

export default function Calculator() {
  const calc = useCalculator()
  return (
    <div className="calculator-container">
      <div className="cat-face">
        <div className="brand">CASIO</div>
        <Display value={calc.display} />
        <Keypad onClick={calc.handleInput} />
      </div>
    </div>
  )
}
