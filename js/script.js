function exponentiationNumber(number, dagree = 2) {
  if (Number.isNaN(number) || Number.isNaN(dagree)) {
    return "some error";
  }

  const result = number ** dagree;
  return result;
}

const n = +prompt("Enter number");
const d = +prompt("Enter number");
const r = exponentiationNumber(n, d);

if (Number.isNaN(r)) {
  alert(r);
} else {
  alert(r);
}
