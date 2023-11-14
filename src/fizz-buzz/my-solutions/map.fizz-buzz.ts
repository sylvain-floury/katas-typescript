function replaceNumberbyString(value: number, divisor: number, placeholder: string) {
  return value % divisor === 0 ? placeholder : ''
}

export function mapFizzBuzz(given: number): Array<number | string> {
  return Array.from({ length: given }, (_value: number, key: number) => key + 1).map(
    (value: number) => {
      let response: string = ''
      response += replaceNumberbyString(value, 3, 'fizz')
      response += replaceNumberbyString(value, 5, 'buzz')
      return response === '' ? value : response
    }
  )
}
