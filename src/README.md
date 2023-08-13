The flow of the application step by step:

Main Entry Point (main.ts):

- The application starts execution from the main.ts file.
- The NestFactory class is used to create an instance of the Nest application.
- The app.module.ts file is passed as the root module to bootstrap the application.

App Module (app.module.ts):

- The root module defines the main application context and imports other modules.
- It imports the UserModule and AuthModule modules.

User Module (user.module.ts):

- Defines the user-related components, such as controllers, services, and entities.
- Imports the TypeOrmModule to establish a database connection and manages user entities.
- The UserController, UserService, and UserRepository are wired up within this module.

Auth Module (auth.module.ts):

- Defines the authentication-related components, such as controllers, services, and strategies.
- Imports the JwtModule to handle JSON Web Tokens and the PassportModule for authentication.
- The AuthController, AuthService, and JwtStrategy are wired up within this module.

User Entity (user.entity.ts):

- Defines the structure of the User entity, including its properties and their data types.
- This entity represents the database table and is used for CRUD operations.

User Controller (user.controller.ts):

- Handles incoming HTTP requests related to users.
- Utilizes the UserService to perform CRUD operations and responds with appropriate HTTP responses.

User Service (user.service.ts):

- Contains the business logic for interacting with the database and performing CRUD operations.
- Utilizes the UserRepository to perform database operations.

User Repository (user.repository.ts):

- Provides a set of methods to perform database operations related to the User entity.
- Extends the Repository class from TypeORM and is injected into the UserService.

JWT Strategy (jwt.strategy.ts):

- Implements a custom strategy for JWT-based authentication.
- Validates and extracts user information from the JWT payload.
- Utilizes the JwtPayload interface defined in jwt-payload.interface.ts.

JWT Payload Interface (jwt-payload.interface.ts):

- Defines the structure of the JWT payload, including properties like sub (subject).
- This interface is used to represent the payload data of the JWT.

Authentication Controller (auth.controller.ts):

- Handles authentication-related HTTP requests, such as login and token issuance.
- Utilizes the AuthService to handle authentication logic.

Authentication Service (auth.service.ts):

- Implements authentication logic, including generating and verifying JWTs.
- Utilizes the JwtModule and JwtStrategy for JWT-related operations.
