export function mapFizzBuzz(given: number): (number | string)[] {
  const result = []
  for (let i = 1; i <= given; i++) {
    const isMultipleOf3 = i % 3 === 0
    const isMultipleOf5 = i % 5 === 0
    let tmp: string | number = i

    if (isMultipleOf3 && isMultipleOf5) tmp = 'fizzbuzz'
    else if (isMultipleOf5) tmp = 'buzz'
    else if (isMultipleOf3) tmp = 'fizz'

    result.push(tmp)
  }
  return result
}
