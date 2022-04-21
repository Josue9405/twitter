const UserService = require('./../../app/services/UserService')

describe("Unit Tests for UserService Class", () => {
    test('1) Create a user object', () => {
        const user = UserService.create(1, "josue9405", "Josue")
        expect(user.id).toBe(1);
        expect(user.username).toBe("josue9405");
        expect(user.name).toBe("Josue");
        expect(user.bio).not.toBeUndefined();
    });
    test('2) Use method getInfo to get list', () => {
        const user = UserService.create(1, "josue9405", "Josue")
        const list = UserService.getInfo(user)
        expect(list[0]).toBe(1);
        expect(list[1]).toBe("josue9405");
        expect(list[2]).toBe("Josue");
        expect(list[3]).toBe("Biography")
    });
    test('3) Update user username', () => {
        const user = UserService.create(1, "josue9405", "Josue")
        UserService.updateUserName(user,"tulio")
        expect(user.username).toBe("tulio");
    });
    test('4) Get all UserName', () => {
        const user1 = UserService.create(1, "josue9405", "Josue")
        const user2 = UserService.create(2, "carlogilmar", "Carlo")
        const user3 = UserService.create(3, "tulioBoss", "Tulio")
        const userNames = UserService.getAllUsername([user1,user2,user3])
        expect(userNames).toContain("josue9405");
        expect(userNames).toContain("carlogilmar");
        expect(userNames).toContain("tulioBoss");
    });
  }) 