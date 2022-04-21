const User = require('./../../app/models/User');

describe("Unit Tests for User Class", () => {
    test('1) Create a user object', () => {
        const user = new User(1, "josue9405", "Josue", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1);
        expect(user.username).toBe("josue9405");
        expect(user.name).toBe("Josue");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    });
    test('2) Validate date', () => {
        const user = new User(1, "josue9405", "Josue", "Bio")
        expect(user.id).toBe(1);
        expect(user.username).toBe("josue9405");
        expect(user.name).toBe("Josue");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('3) Usign getters', () => {
        const user = new User(1, "josue9405", "Josue", "Bio")
        expect(user.getUserName).toBe("josue9405");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test('4) Usign setters', () => {
        const user = new User(1, "josue9405", "Josue", "Bio")
        user.setUserName = "Avelar"
        expect(user.getUserName).toBe("Avelar");
        user.setBio = "Cacoluqilla"
        expect(user.getBio).toBe("Cacoluqilla");
    });
  })  