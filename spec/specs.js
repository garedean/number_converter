describe("binaryToInteger", function() {
  it("converts a small binary input into an integer", function() {
    expect(binaryToInteger("011")).to.equal(3);
  });
  it("converts a large binary input into an integer", function() {
    expect(binaryToInteger("11000000111001")).to.equal(12345);
  });

});

describe("trinary", function() {
  it("converts a small trinary input to an integer", function() {
    expect(trinaryToInteger("121")).to.equal(16);
  });

  it("converts a large trinary input to an integer", function() {
    expect(trinaryToInteger("11012212")).to.equal(3074);
  });
});

describe("hexadecimalToInteger", function() {
  it("converts a small hexadecimal input to an integer", function() {
    expect(hexToInteger("C")).to.equal(12);
  });

  it("converts a large hexadecimal input to an integer", function() {
    expect(hexToInteger("23C981")).to.equal(2345345);
  });
});
