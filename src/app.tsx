import * as React from 'react'
import { classes, keyframes, media, style } from 'typestyle'

const fontSize = (value: number|string): object => {
  const valueStr = typeof value === 'string'
    ? value
    : `${value}px`
  return { fontSize: valueStr }
}

const breathingModeAnimation = keyframes({
  '50%': { color: 'skyblue' },
})

const baseClass = style(
  fontSize(20),
  {
    $nest: {
      '&::after': {
        content: `attr(data-after)`,
      },
      '&::selection': {
        backgroundColor: 'black',
        color: 'gold',
      },
      '&:hover': {
        color: 'lightblue',
      },
    },
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationName: breathingModeAnimation,
    color: 'darkorange',
    fontWeight: 'bold',
    position: 'relative',
    transition: 'color 1s, font-size .2s',
  },
  media({ minWidth: 500, maxWidth: 700 }, fontSize(30)),
  media({ minWidth: 701 }, fontSize('3em'))
)

const errorClass = style({ backgroundColor: 'red' })

export const App = ({ extraClass, hasError }: { extraClass?: string, hasError?: boolean }) => (
  <div
    className={
      classes(baseClass, extraClass, hasError && errorClass)
    }
    data-after='!'
  >
    Hello TypeScript
  </div>
)
