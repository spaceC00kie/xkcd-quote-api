import React from "react"

const Quotes = () => {
  const [quote, setQuote] = useState("Let's try it")
  const more = () => {
    fetch("https://xkcd.com/info.0.json")
      .then((res) => res.json())
      .then((i) => )
  }
  return <div>test</div>
}

export default Quotes
