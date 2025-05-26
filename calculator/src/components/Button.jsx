export default function Button({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)} className="button">
      {label}
    </button>
  )
}