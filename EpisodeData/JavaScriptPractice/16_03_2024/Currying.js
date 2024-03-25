// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.
// Advanced curry implementation
// In case you’d like to get in to the details, here’s the “advanced” curry implementation for multi-argument functions that we could use above.
function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
}

function sum(...args){
    let s=0;
    let l = args.length;
    for(let i=0;i<l;i++){
        s+=args[i];
    }
    return s;
}
