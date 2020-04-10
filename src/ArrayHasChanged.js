const ArrayHasChanged = (array1, array2) => {
  // Assume type checking
  if (array1.length !== array2.length) {
    return true;
  }

  const itemMap = {};
  array1.forEach(item => {
    if (itemMap[item]) {
      itemMap[item] += 1;
    } else {
      itemMap[item] = 1;
    }
  });
  array2.forEach(item => {
    if (itemMap[item]) {
      itemMap[item] -= 1;
    } else {
      itemMap[item] = -1;
    }
  });
  // All values will be 0 if it matches - which is falsy
  // If there are changes, it will be non zero, and thus truthy
  // !! forces the result to a boolean
  return !!Object.values(itemMap).reduce((prev, current) => {
    return prev || current;
  }, 0);
};

export default ArrayHasChanged;
