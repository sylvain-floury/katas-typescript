export function mapFizzBuzz(given: number): (number | string)[] {
  const numbers = Array.from(Array<number>(given).keys())

  return numbers.map((i: number) => {
    const n = i + 1
    const isMultipleOf3 = n % 3 === 0
    const isMultipleOf5 = n % 5 === 0
    let tmp: string | number = n

    if (isMultipleOf3 && isMultipleOf5) tmp = 'fizzbuzz'
    else if (isMultipleOf5) tmp = 'buzz'
    else if (isMultipleOf3) tmp = 'fizz'

    return tmp
  })
}
