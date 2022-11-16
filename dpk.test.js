const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns a hashed value of input, if input is an integer", () => {
    const key = deterministicPartitionKey(1);
    expect(key).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns a string of the value of partitionKey, if input is an event object with a partitionKey key", () => {
    const variableFormerlyKnownAsPrince = "the funk";
    const key = deterministicPartitionKey({partitionKey: variableFormerlyKnownAsPrince})
    expect(key).toBe("the funk");
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns a hashed value of stringified event entered, if input is an event object without a partitionKey key", () => {
    const noGreenText = "inb4";
    const key = deterministicPartitionKey(noGreenText);
    expect(key).toBe("5b7b8323a13b194e79872240b90c1a6c753d875c03eacb8bb27094201420fe968dbaa681fa26dddbb528de44df01fa3d50dc75c6b466deb883ff21b571aca2d0");
  });
});
