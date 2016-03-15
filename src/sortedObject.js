const sortedObject = input =>
  Object.keys(input)
    .sort()
    .reduce((result, key) => ({...result, [key]: input[key]}), {});

export default sortedObject;
