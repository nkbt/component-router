const sortedObject = input => {
  const output = {};

  Object.keys(input).sort().forEach(key => output[key] = input[key]);

  return output;
};

export default sortedObject;
