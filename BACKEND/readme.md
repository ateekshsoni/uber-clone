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

## GET /users/profile

### Description

Fetches the profile of the authenticated user.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **200 OK**
  - Returns the authenticated user's profile.
- **401 Unauthorized**
  - If the user is not authenticated.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  }
}
```

## GET /users/logout

### Description

Logs out the authenticated user by clearing the authentication token.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **200 OK**
  - Returns a message indicating successful logout.
- **401 Unauthorized**
  - If the user is not authenticated.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  }
}
```

## POST /captains/register

### Description

Registers a new captain to the system.

### Request Body

- `fullname` (object, required)
  - `firstname` (string, required): Minimum 3 characters.
  - `lastname` (string, optional): Minimum 3 characters.
- `email` (string, required): Valid email address.
- `password` (string, required): Minimum 8 characters.
- `vehicle` (object, required)
  - `color` (string, required): Minimum 3 characters.
  - `plate` (string, required): Minimum 3 characters.
  - `capacity` (number, required): Minimum 1.
  - `vehicleType` (string, required): Must be one of `'car'`, `'auto'`, `'motorcycle'`.

### Responses

- **201 Created**
  - Returns the newly created captain and an authentication token.
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
  "password": "securepassword",
  "vehicle": {
    "color": "blue",
    "plate": "MP 04 XY ABCD",
    "capacity": "3",
    "vehicleType": "car"
  }
}
```

## POST /captains/login

### Description

Logs in an existing captain.

### Request Body

- `email` (string, required): Valid email address.
- `password` (string, required): Minimum 8 characters.

### Responses

- **200 OK**
  - Returns the authenticated captain and an authentication token.
- **400 Bad Request**
  - Validation errors with details in the `errors` array.
- **401 Unauthorized**
  - Invalid email or password.

### Example Request

```json
{
  "email": "captain.doe@example.com",
  "password": "securepassword"
}
```

## GET /captains/profile

### Description

Fetches the profile of the authenticated captain.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **200 OK**
  - Returns the authenticated captain's profile.
- **401 Unauthorized**
  - If the captain is not authenticated.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  }
}
```

## GET /captains/logout

### Description

Logs out the authenticated captain by clearing the authentication token.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **200 OK**
  - Returns a message indicating successful logout.
- **401 Unauthorized**
  - If the captain is not authenticated.

### Example Request

````json
{
  "headers": {
    "Authorization": "Bearer <token>"
  }
}
````

## POST /rides/create

### Description

Creates a new ride.

### Request Body

- `pickup` (string, required): The pickup location.
- `dropoff` (string, required): The dropoff location.
- `vehicleType` (string, required): The type of vehicle. Must be one of `'auto'`, `'car'`, `'motorcycle'`.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **201 Created**
  - Returns the newly created ride.
- **400 Bad Request**
  - Validation errors with details in the `errors` array.
- **500 Internal Server Error**
  - If there is an error creating the ride.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  },
  "body": {
    "pickup": "123 Main St",
    "dropoff": "456 Elm St",
    "vehicleType": "car"
  }
}
```

## GET /rides/get-fare

### Description

Calculates the fare for a ride based on the pickup and dropoff locations and the vehicle type.

### Query Parameters

- `pickup` (string, required): The pickup location.
- `dropoff` (string, required): The dropoff location.
- `vehicleType` (string, required): The type of vehicle. Must be one of `'auto'`, `'car'`, `'motorcycle'`.

### Headers

- `Authorization` (string, required): Bearer token.

### Responses

- **200 OK**
  - Returns the calculated fare.
- **400 Bad Request**
  - Validation errors with details in the `errors` array.
- **500 Internal Server Error**
  - If there is an error calculating the fare.

### Example Request

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  },
  "query": {
    "pickup": "123 Main St",
    "dropoff": "456 Elm St",
    "vehicleType": "car"
  }
}