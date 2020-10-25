// The function outputs the sum of the squares of numbers between A and B, inclusive. 
// It is not known which of the numbers A or B is greater.
function cycle(a, b) {
  let x = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    x += i * i;
  }
  return x;
}
