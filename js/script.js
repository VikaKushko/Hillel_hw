function counter(number = 0) {
  let count = number;
  let increaseCount = 0;
  let decreaseCount = 0;
  let valueCount = 0;

  function increase() {
    count++;
    increaseCount++;
  }

  function decrease() {
    count--;
    decreaseCount++;
  }

  function value() {
    valueCount++;
    return count;
  }

  function getStatistic() {
    return {
      increase: increaseCount,
      decrease: decreaseCount,
      value: valueCount,
    };
  }

  function reset() {
    count = 0;
    increaseCount = 0;
    decreaseCount = 0;
    valueCount = 0;
  }

  return {
    increase,
    decrease,
    value,
    getStatistic,
    reset,
  };
}

const result = counter(7);
result.increase();
result.decrease();
result.increase();

console.log(result.value());
console.log(result.getStatistic());

result.reset();
console.log(result.value());
console.log(result.getStatistic());
