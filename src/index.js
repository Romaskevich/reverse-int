module.exports = function reverse (n) {
    n=Math.abs(n);
    let rev = 0;
    while (n) {
      rev = rev*10 + n%10;
      n = Math.floor(n/10);
    }
    return rev;
  }
