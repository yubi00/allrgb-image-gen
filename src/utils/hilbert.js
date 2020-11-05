export default function generateHilbertCurve(order, index, createVector) {
  const points = [
    createVector(0, 0),
    createVector(0, 1),
    createVector(1, 1),
    createVector(1, 0)
  ]

  let i = index & 3 //bit masking
  let vertex = points[i]

  for (let j = 1; j < order; j++) {
    index = index >>> 2 //zero fill right shifting two bits
    i = index & 3 //bit masking last two bits
    let len = Math.pow(2, j) //get the length
    switch (i) {
      case 0:
        //rotate the top left first order hilbert curve
        let temp = vertex.x
        vertex.x = vertex.y
        vertex.y = temp
        break
      case 1:
        vertex.y += len
        break
      case 2:
        vertex.x += len
        vertex.y += len
        break
      case 3:
        //rotate the top right first order hilbert curve
        let t = len - 1 - vertex.x
        vertex.x = len - 1 - vertex.y
        vertex.y = t
        vertex.x += len
        break
      default:
        break
    }
  }
  return vertex
}
