export async function getRandomAdvice () {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  const newAdvice = data.slip.advice
  return newAdvice
}
