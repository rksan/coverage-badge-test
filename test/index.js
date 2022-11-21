const { describe, it } = require("mocha");
const { assert } = require("chai");

describe("test index", () => {
  const index = require("../index");

  it("index is function", () => {
    assert.isFunction(index);
  });
});
