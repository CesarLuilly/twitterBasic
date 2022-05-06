//  //Como recomendacion siempre deberiamos hacer una prueba 
//  //  que falle y que acerte
// describe("Test Suite Dummy Description", () => {
//     test('Case 1 Dummy', () => {
//       const resultOfSomething = 1 + 2
//       expect(resultOfSomething).toBe(3);
//     });
//   })

const User = require("./../../app/models/User");
describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        //  //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "cesargarcia","Cesar", "Bio");

        //  //Aqui validas los resultados de ese codigo
        //  //Esta es una comparacion que va a igualar el valor de la
        //  //  izquierda con el valor de la derecha (valor esperado)
      
        expect(user.id).toBe(1)
        expect(user.username).toBe("cesargarcia")
        expect(user.name).toBe("Cesar")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add Getters', () => {
        //  //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "cesargarcia","Cesar", "Bio");
        expect(user.getUserName).toBe("cesargarcia")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test('Add Setters', () => {
        //  //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "cesargarcia","Cesar", "Bio");
        user.setUserName = "Luilly"
        expect(user.getUserName).toBe("Luilly")
        user.setBio = "New Bio"
        expect(user.getBio).toBe("New Bio")
    });
  })
