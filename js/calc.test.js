const calculateStrings = require("./calc")

test("Testing empty string", () => {
    expect(calculateStrings("")).toBe(1)
})