const React = require("react")
const Default = require("./default")

function Home() {
  return (
    <Default title="Home">
      <body className="home">
        <h1>Cinelog</h1>
        <h2>What did you watch?</h2>
        <a href="/movies">
          <button className="btn-primary">Movie Gallery</button>
        </a>
      </body>
    </Default>
  )
}

module.exports = Home
