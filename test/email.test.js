const { changeEmail } = require("../email");
const { faker } = require("@faker-js/faker");
describe("User actions", () => {
        let user;
        beforeEach(() => {
                user = {
                        name: faker.name.findName(),
                        email: faker.internet.email(),
                };
        });

        it("Changes user email", () => {
                const newEmail = faker.internet.email();
                const newUpdateUser = changeEmail(user, newEmail);
                expect(newUpdateUser.email).toBe(newEmail);
        });
});
