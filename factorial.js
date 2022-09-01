function factorial(n)
{
  console.log(n);
  let f = 1;
  for(let i = 1; i <= n; i++){
    f *= i;
  }
  return n < 0 || n > 12 ? ValueError : f;
}