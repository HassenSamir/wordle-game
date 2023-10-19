export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const twoDimensionObjectArray = (
  firstArrayLength,
  secondArrayLength
) => {
  return range(firstArrayLength).map(() => {
    const emptyObjectArray = range(0, secondArrayLength).map((x) => {
      return {
        id: crypto.randomUUID(),
        value: "",
      };
    });

    return {
      id: crypto.randomUUID(),
      values: emptyObjectArray,
    };
  });
};
