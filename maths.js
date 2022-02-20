function is_even(n) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else {
    return n % 2 === 0;
  }
}

function is_odd(n) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else {
    return n % 2 === 1;
  }
}

function sqrt_root(n) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else {
    return Math.sqrt(n);
  }
}

function any_root(n, root) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else if (typeof root !== "number") {
    return new Error("Please provide a valid root");
  } else {
    return Math.pow(n, 1 / root);
  }
}

function round_off(n, decimal_digit) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else if (typeof decimal_digit !== "number") {
    return new Error("Please provide a valid decimal");
  } else {
    return (
      Math.round(n * Math.pow(10, decimal_digit)) / Math.pow(10, decimal_digit)
    );
  }
}

function is_prime(n) {
  if (typeof n !== "number") {
    return new Error("Please provide a valid number");
  } else if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

module.exports = { is_even, is_odd, sqrt_root, any_root, round_off, is_prime };
