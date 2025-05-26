import Button from './Button'

const keys = [
  ['C', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '']
]

export default function Keypad({ onClick }) {
  return (
    <div className="keypad">
      {keys.flat().filter(k => k).map(k => (
        <Button key={k} label={k} onClick={onClick} />
      ))}
    </div>
  )
}