const MathJS = require("../math");

describe("Math problems", () => {
        it("findMax([2, 8, 3])", () => {
                expect(MathJS.findMax([2, 8, 3])).toBe(8);
        });

        it("Adds 1 + 1 to equals 2", () => {
                expect(MathJS.sum(1, 1)).toBe(2);
        });
});
