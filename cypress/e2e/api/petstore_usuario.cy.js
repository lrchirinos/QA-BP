describe('Petstore API Testing - User CRUD', () => {
    
    //Usar un Date.now para garantiza un ID unico y evita colisiones de datos
    const uniqueId = Date.now(); 
    //Aseguramos que el ID no exceda los limites de caracteres
    const safeNumId = uniqueId % 10000000; 
    const usernameBase = `rolando_qa_${uniqueId}`;
    const baseUrl = 'https://petstore.swagger.io/v2';


    // Payload base inicial con mi nombres y datos random
    const payloadUsuario = {
        id: safeNumId,
        username: usernameBase,
        firstName: "Rolando",
        lastName: "Chirinos",
        email: "rchirinos@qa-devsu.com",
        password: "Password123!",
        phone: "987654321",
        userStatus: 1
    };

    // Aqui me aseguro que el entorno este limpio antes de ejecutar las pruebas
    before(() => {
        cy.log('Limpiando estado: Verificando que el usuario no exista');
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/user/${usernameBase}`,
            failOnStatusCode: false // Si el usuario no existe entonces la prueba no falla y continúa
        }).then((response) => {
            if (response.status === 200) {
                cy.log('Usuario residual encontrado y eliminado con éxito.');
            }
        });
    });

    it('Debe crear un usuario exitosamente (POST)', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/user`,
            body: payloadUsuario
        }).then((response) => {
            expect(response.status).to.eq(200);
            //La api de Petstore devuelve el ID como string en el campo message
            expect(response.body.message).to.eq(safeNumId.toString());
        });
    });

    it('Debe buscar el usuario creado (GET)', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/user/${usernameBase}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(usernameBase);
            expect(response.body.email).to.eq(payloadUsuario.email);
        });
    });

    it('Debe actualizar el nombre y correo del usuario (PUT)', () => {
        const payloadActualizado = {
            ...payloadUsuario,
            firstName: "Luis Rolando", // Actualizando nombre
            email: "luis.chirinos@qa-devsu.com" // Actualizando correo
        };

        cy.request({
            method: 'PUT',
            url: `${baseUrl}/user/${usernameBase}`,
            body: payloadActualizado
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Debe buscar el usuario actualizado (GET)', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/user/${usernameBase}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstName).to.eq("Luis Rolando");
            expect(response.body.email).to.eq("luis.chirinos@qa-devsu.com");
        });
    });

    it('Debe eliminar el usuario (DELETE)', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/user/${usernameBase}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq(usernameBase);
        });
        
        //Verificar que realmente se elimino
        cy.request({
            method: 'GET',
            url: `${baseUrl}/user/${usernameBase}`,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});