function padString(str, num, sym, boo) {
  if (str === null || num === null || sym === null) {
    return alert("some error");
  }

  if (boo === "false") {
    const count = num - str.length;
    const result = str + sym.repeat(count);
    return alert(result);
  } else {
    const c = num - str.length;
    const r = sym.repeat(c) + str;
    return alert(r);
  }
}

const string = prompt("Enter string");
const number = +prompt("Enter number");
const symbol = prompt("Enter symbol");
const boolean = prompt("Enter boolean");

padString(string, number, symbol, boolean);
