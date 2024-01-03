const Dice = './dice-four-svgrepo-com.svg'

export function Advice ({ advice, newAdvice }) {
  return (
    <main>
      <p>{advice}</p>
      <button onClick={() => newAdvice()}><img src={Dice} alt='dado para generar consejo' /></button>
    </main>
  )
}
