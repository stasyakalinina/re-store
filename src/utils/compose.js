const compose = (...funcs) => (component) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), component);
};

export default compose;