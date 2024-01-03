import { useEffect, useState } from 'react'
import { Advice } from './components/Advice'
import './styles/styles.css'
import { getRandomAdvice } from './services/getRandomAdvice'

export function App () {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    getRandomAdvice().then(newAdvice => setAdvice(newAdvice))
  }, [])

  const getNewAdvice = async () => {
    const newAdvice = await getRandomAdvice()
    setAdvice(newAdvice)
  }

  return (
    <div>
      <h1>Advice</h1>
      <Advice advice={advice} newAdvice={getNewAdvice} />
    </div>
  )
}
