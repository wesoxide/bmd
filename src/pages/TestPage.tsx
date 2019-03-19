import React from 'react'

const test = () => (
  <div>
    <h1 tabIndex={-1}>test</h1>
    <p>
      <input type="checkbox" id="asdf" />
      <label htmlFor="asdf">asdf</label>
    </p>

    <p>
      <label htmlFor="bar">
        <input type="checkbox" id="bar" />
        bar
      </label>
    </p>
  </div>
)

export default test
