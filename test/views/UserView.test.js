const UserView = require('./../../app/views/UserView')

describe("Unit Tests for UserService Class", () => {
    test('1) Create a user object with null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Payload no existe/);
    });
    test('2) Create a user object with invalid payload', () => {
        const payload = {username: null, name: "Josue Avelar", id: "id"};
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Datos inválidos/);
    });
    test('3) Create a user object with missing properties', () => {
        const payload = {username: "Josue9405"};
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Propiedades faltantes/);
    });
    test('4) Create a user object with missing properties', () => {
        const payload = {username: "josue9405", name: "Josue Avelar", id: 1};
        const result = UserView.createUser(payload)
        expect(result.user.getUserName).toBe("josue9405");
        expect(result.user.getName).toBe("Josue Avelar");
        expect(result.user.getId).toBe(1);
    });
  }) 