import { useState } from "react"

const CatFacts = () => {
  const [catFact, setCatFact] = useState()

  const getCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact')
      const data = await response.json()
      console.log(data)
      setCatFact(data.fact)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <section>
      <p>{catFact}</p>
      <button className="fact-btn" onClick={getCatFact}>Generate cat fact</button>
    </section>
  )
}

export default CatFacts;