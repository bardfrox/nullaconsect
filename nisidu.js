  const mySymbol = Symbol('description');
  let obj = {
      [mySymbol]: 'value'
  };
  console.log(obj[mySymbol]); // Outputs: 'value'
  