describe("Define name of group test", () => {
        it("Define name of test", () => {
                // Logic Test here
                let value = functionNeedToTest();

                //  Define expect value
                let exceptedValue = "The value of your expect";

                // Logic Expect
                except(value).toBe(exceptedValue);
        });
});
