import styled from 'styled-components'

const thumbSize = 1
const thumbRadius = thumbSize / 2
const stepSize = 0.5
const stepRadius = stepSize / 2
const trackBackgroundColor = 'lightgrey'
const thumbColor = 'black'

const trackStyles = `
  cursor: pointer;
  width: 100%;
  height: ${stepSize}rem;
  margin: ${stepRadius}rem 0;
  background: radial-gradient(
      circle ${stepRadius}rem at calc(0% + ${thumbRadius}rem) ${stepRadius}rem,
      ${thumbColor},
      ${thumbColor} 100%,
      transparent
    ),
    radial-gradient(
      circle ${stepRadius}rem at calc((100% + 0.125rem) * .34) ${stepRadius}rem,
      ${thumbColor},
      ${thumbColor} 100%,
      transparent
    ),
    radial-gradient(
      circle ${stepRadius}rem at calc((100% - 0.125rem) * .66) ${stepRadius}rem,
      ${thumbColor},
      ${thumbColor} 100%,
      transparent
    ),
    radial-gradient(
      circle ${stepRadius}rem at calc(100% - ${thumbRadius}rem) ${stepRadius}rem,
      ${thumbColor},
      ${thumbColor} 100%,
      transparent
    ),
    linear-gradient(
      to right,
      transparent,
      transparent ${thumbRadius}rem,
      ${trackBackgroundColor} ${thumbRadius}rem,
      ${trackBackgroundColor} calc(100% - ${thumbRadius}rem),
      transparent calc(100% - ${thumbRadius}rem),
      transparent
    ), #edeff0;
  border-color: transparent;
  color: transparent;
`
const thumbStyles = `
  height: ${thumbSize}rem;
  width: ${thumbSize}rem;
  border-radius: ${thumbRadius}rem;
  background: ${thumbColor};
  cursor: pointer;
  margin-top: -${stepRadius}rem;
`

const Range = styled.input.attrs({
  type: 'range',
})`
  &,
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  width: 300px;
  background: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    ${trackStyles}
  }
  &:focus::-webkit-slider-runnable-track {
    outline: none;
  }
  &::-webkit-slider-thumb {
    ${thumbStyles}
  }
  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  /* Enable the below if/when adding styles for Moz / MSIE */
  /*
  &::-moz-range-track {
    ${trackStyles}
  }
  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-ms-track {
    ${trackStyles}
  }
  &::-ms-fill-lower {
    background: ${trackBackgroundColor};
  }
  &::-ms-fill-upper {
    background: ${trackBackgroundColor};
  }
  &::-ms-thumb {
    ${thumbStyles}
  }
  */
`

export default Range
