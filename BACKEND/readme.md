<!-- filepath: /C:/Users/dell/OneDrive/Desktop/Full Stack Development/uber-clone/BACKEND/readme.md -->
# API Documentation

## POST /users/register

### Description

Registers a new user to the system.

### Request Body

- `fullname` (object, required)
  - `firstname` (string, required): Minimum 3 characters.
  - `lastname` (string, optional): Minimum 3 characters.
- `email` (string, required): Valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

- **201 Created**
  - Returns the newly created user and an authentication token.
- **400 Bad Request**
  - Validation errors with details in the `errors` array.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

## POST /users/login

### Description

Logs in an existing user.

### Request Body

- `email` (string, required): Valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

- **200 OK**
  - Returns the authenticated user and an authentication token.
- **400 Bad Request**
  - Validation errors with details in the `errors` array.
- **401 Unauthorized**
  - Invalid email or password.

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```  