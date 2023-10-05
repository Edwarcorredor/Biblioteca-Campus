# Library

The project involves developing a web application to manage a library using React, Node.js, and MongoDB technologies. Below are the key aspects of the project:

**Frontend**:

- Development of a user interface (UI) in React to allow users to interact with the library.
- Implementation of registration and login pages to manage user accounts.
- Design and creation of pages to display information about books and other library resources.
- Use of React components to create an intuitive and responsive user experience.
- Integration with the backend to make HTTP requests through API endpoints.

**Backend**:

- Configuration of a Node.js server using Express.
- Database design using MongoDB, including the creation of schemas for necessary collections such as books, authors, users, and more.
- Implementation of Data Transfer Objects (DTO) to structure and validate data flowing between the frontend and backend.
- Integration of Passport.js for user authentication and authorization, including the generation and validation of JSON Web Tokens (JWT).
- Definition of routes and endpoints on the backend to handle CRUD (Create, Read, Update, Delete) operations related to library resources.
- Implementation of security measures such as password hashing and rate limiting.
- Conducting unit and integration tests to ensure the correct operation of routes and business logic.

The project aims to provide users with an intuitive and secure platform to manage a library, including the ability to search for books, obtain detailed information about authors, perform loans, reservations, and more. Additionally, special attention is given to user security and authentication to protect data and ensure a reliable experience.

Efficient collaboration between the frontend and backend is essential for the project's success, and a robust database design and implementation of security measures are required to ensure that the application is secure and operates smoothly.



## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Edwarcorredor/Biblioteca-Campus.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Biblioteca
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and define the necessary environment variables. You can use the provided `dotenv` library to manage environment variables. Here's an example `.env` file:

   ```env
   MY_SERVER={"hostname": "localhost", "port": 3000}
   ```

## Usage

### Starting the Application

To start the application, run the following command:

```bash
npm start
```

This will launch the server, and it will be accessible at `http://localhost:3000` by default (or the configured hostname and port in your `.env` file).

### Endpoints

The following endpoints are available in the application:

#### Authentication

- `POST /auth/login`: Log in a user.
- `POST /auth/register`: Register a new user.

#### User Management

- `PUT /user/actualizar`: Update user information.
- `GET /user/obtener`: Get user information.

#### Inventory Management

- `POST /inventory/create`: Create a new inventory item.
- `PUT /inventory/update/:id`: Update an inventory item.
- `GET /inventory/list`: Get a list of inventory items.

#### Loan Management

- `POST /loan/create`: Create a new loan record.
- `PUT /loan/update/:id`: Update a loan record.

#### Reservation Management

- `POST /reservation/create`: Create a new reservation.
- `PUT /reservation/:id`: Update a reservation.

#### Product Management

- `POST /product/create`: Create a new product.
- `PUT /product/update/:id`: Update a product.

Please note that some endpoints require authentication. You should obtain an access token by logging in before making authenticated requests.

## Dependencies

The project relies on the following external packages and libraries:

- Express.js: A web application framework for Node.js.
- dotenv: Used for managing environment variables.
- Passport: Used for authentication.
- cors: Middleware for handling Cross-Origin Resource Sharing (CORS).

You can find the complete list of dependencies in the `package.json` file.

## 



