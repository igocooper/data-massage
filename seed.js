function seedSecret(input) {
  const chunkSize = 6; // 24 words, so 4 chunks of 6
  const keys = Object.keys(input).map(Number);
  const values = Object.values(input);

  // Split values into 4 chunks of 6
  let chunks = [];

  for (let i = 0; i < values.length; i += chunkSize) {
    chunks.push(values.slice(i, i + chunkSize));
  }

  // Reverse the chunks
  chunks = chunks.map((chunk) => chunk.reverse());

  // Flatten the reversed chunks back into a single array
  const reversedValues = chunks.flat();

  // Create a new object with the same keys and the new reversed values
  const result = {};

  keys.forEach((key, index) => {
    result[key] = reversedValues[index];
  });

  return result;
}

const output = seedSecret(seed);

console.log(output);
