const mergeSort = (arr, compareFn = defaultCompareFunc) => {
  if (arr.length === 1) { return arr }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn
  )
}

const merge = (left, right, compareFn) => {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (compareFn(left[indexLeft], right[indexRight])) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)]
}

const defaultCompareFunc = (a, b) => a < b

export { mergeSort }
