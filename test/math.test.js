const MathJS = require("../math");

describe("Give Math function", () => {
        describe("Test findMax function", () => {
                it("find max of [2, 8, 3]", () => {
                        expect(MathJS.findMax([2, 8, 3])).toBe(8);
                });

                it("Find max of empty array", () => {
                        expect(MathJS.findMax([])).toBeNull();
                });
        });

        describe("Test square function", () => {
                it("Square of 2", () => {
                        expect(MathJS.square(2)).toBe(4);
                });
        });
});
