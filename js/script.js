function bind(fn, context) {
  return function () {
    const args = [];

    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.context = context;

    return fn(args);
  };
}
function result(args) {
  const context = args.context;
  const greeting = args[0];
  console.log(`${greeting}, ${context.firstName} ${context.lastName}`);
}

const someObj = {
  firstName: "Ihor",
  lastName: "Cat",
};

const boundGreet = bind(result, someObj);
boundGreet("Hello");
