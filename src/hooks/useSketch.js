import { useRef } from 'react'
import generateHilbertCurve from '../utils/hilbert'

const useSketch = (width, height, container) => {
  const counterRef = useRef(0)
  const myp5 = (sketch) => {
    const order = width < 700 && height < 700 ? 8 : 9
    let quadrantNo
    let totalPoints
    let path = []

    quadrantNo = parseInt(Math.pow(2, order))
    totalPoints = quadrantNo * quadrantNo

    sketch.setup = () => {
      sketch.createCanvas(width, height).parent(container)
      sketch.colorMode(sketch.HSB, 360, 255, 255)
      sketch.background(0)

      for (let i = 0; i < totalPoints; i++) {
        path[i] = generateHilbertCurve(order, i, sketch.createVector)
        let len = width / quadrantNo //length of each line, width referes to width of canvas
        path[i].mult(len)
        path[i].add(len / 2, len / 2) //offset the position
      }
    }

    sketch.draw = () => {
      sketch.background(0)
      sketch.stroke(255)
      sketch.strokeWeight(2)

      sketch.noFill()

      for (let i = 1; i < counterRef.current; i++) {
        let h = sketch.map(i, 0, path.length, 0, 360)
        sketch.stroke(h, 255, 255)
        sketch.line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y)
      }

      counterRef.current += 500
      if (counterRef.current >= path.length) {
        counterRef.current = path.length
      }
    }
  }

  return myp5
}

export default useSketch
