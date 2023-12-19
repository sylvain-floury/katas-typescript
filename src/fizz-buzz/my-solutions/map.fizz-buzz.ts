function fizzbuzz(elt: number) {
  if (elt % 3 == 0 && elt % 5 == 0) {
    return 'fizzbuzz'
  } else if (elt % 3 == 0) {
    return 'fizz'
  } else if (elt % 5 == 0) {
    return 'buzz'
  }
  return elt
}

// todo...
export function mapFizzBuzz(given: number): (string | number)[] {
  // on construit une liste de retour des nombres de 1 au parametre given;
  const tableau = [...Array(given).keys()]
  //Array.from(Array(given).keys());
  // const tableau: (number)[]  = [];
  // for(let i = 1; i <= given; i++) {
  //   tableau[i-1] = i;
  // }

  //

  return tableau.map(index => {
    console.log(index)
    return fizzbuzz(index + 1)
  })
}
