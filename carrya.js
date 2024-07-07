function curry(func) {
    let args = [];
    return function curriedFunction(...newArgs) {
      args = args.concat(newArgs);
      if (args.length === func.length) return func(...args);
      return curriedFunction;
    };
  }
  
  function add(a, b) { return a + b; }
  
  const curriedAdd = curry(add);
  
  console.log("5 + 3 =", curriedAdd(5)(3));
  console.log("result2(2) =", curriedAdd(10)(2));
  