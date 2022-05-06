 //Como recomendacion siempre deberiamos hacer una prueba 
 //  que falle y que acerte
// describe("Test Suite Dummy Description", () => {
//     test('Case 1 Dummy', () => {
//       const resultOfSomething = 1 + 2
//       expect(resultOfSomething).toBe(35);
//     });
//   })

const UserService = require("../../app/services/UserService")

describe("Tests for UserService", () => {
    test("1. Create a new User using the UserService", () => {
        const user = UserService.Create(1, "cesargarcia", "Cesar");
        expect(user.id).toBe(1);
        expect(user.username).toBe("cesargarcia");
        expect(user.name).toBe("Cesar");
        expect(user.bio).not.toBeUndefined();
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.Create(1, "cesargarcia", "Cesar");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("cesargarcia");
        expect(userInfoInList[2]).toBe("Cesar");
        expect(userInfoInList[3]).toBe("Sin bio");
    })

    test("3. Update username", () => {
        const user = UserService.Create(1, "cesargarcia", "Cesar");
        UserService.updateUsername(user, "luillys")
        expect(user.username).toBe("luillys");
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.Create(1, "cesargarcia1", "Cesar");
        const user2 = UserService.Create(1, "cesargarcia2", "Cesar");
        const user3 = UserService.Create(1, "cesargarcia3", "Cesar");
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("cesargarcia1");
        expect(usernames).toContain("cesargarcia2");
        expect(usernames).toContain("cesargarcia3");
    })
});

// const User = require("./../../app/models/User");
// describe("Unit Tests for User class", () => {
//     test('Create an User object', () => {
//         //  //Aqui invocas el codigo que vas a usar en tu app.
//         const user = new User(1, "cesargarcia","Cesar", "Bio");

//         //  //Aqui validas los resultados de ese codigo
//         //  //Esta es una comparacion que va a igualar el valor de la
//         //  //  izquierda con el valor de la derecha (valor esperado)
      
//         expect(user.id).toBe(1)
//         expect(user.username).toBe("cesargarcia")
//         expect(user.name).toBe("Cesar")
//         expect(user.bio).toBe("Bio")
//         expect(user.dateCreated).not.toBeUndefined()
//         expect(user.lastUpdated).not.toBeUndefined()
//     });
//     test('Add Getters', () => {
//         //  //Aqui invocas el codigo que vas a usar en tu app.
//         const user = new User(1, "cesargarcia","Cesar", "Bio");
//         expect(user.getUserName).toBe("cesargarcia")
//         expect(user.getBio).toBe("Bio")
//         expect(user.getDateCreated).not.toBeUndefined()
//         expect(user.getLastUpdated).not.toBeUndefined()
//     });
//     test('Add Setters', () => {
//         //  //Aqui invocas el codigo que vas a usar en tu app.
//         const user = new User(1, "cesargarcia","Cesar", "Bio");
//         user.setUserName = "Luilly"
//         expect(user.getUserName).toBe("Luilly")
//         user.setBio = "New Bio"
//         expect(user.getBio).toBe("New Bio")
//     });
//   })
