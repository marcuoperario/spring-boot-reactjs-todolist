# Listify Spring Boot REST API 

This is the backend of Listify that allows users to create, read, update, and delete todo items. The application uses the following technologies:

- [Spring Boot](https://spring.io/projects/spring-boot): A popular Java web framework for building robust, scalable, and secure web applications. Spring Boot is built on top of the [Spring Framework](https://spring.io/projects/spring-framework), which provides a wide range of modules for building various components of web applications, such as Spring Web for building web applications, Spring Data for data access, and Spring Security for authentication and authorization.
- [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html): A module of the Spring framework that provides support for building web applications.
- [Spring Data MongoDB](https://spring.io/projects/spring-data-mongodb): A module of the Spring Framework that provides integration with the [MongoDB NoSQL database](https://www.mongodb.com/).
- [Lombok](https://projectlombok.org/): A Java library that helps reduce boilerplate code in Java classes.
- [MongoDB Atlas](https://www.mongodb.com/atlas): A fully managed cloud database service provided by MongoDB.

# Running the Backend server
1. Make sure you have Java 17 or higher installed on your machine.
2. Create a new MongoDB Atlas cluster and get the connection string.
3. Open Vistual Studio Code or the IntelliJ IDE
4. Go to the project backend directory
5. Update the application.properties file with your MongoDB Atlas connection string.
6. Run the Spring Boot application with the following commands in the terminal:
```bash
  cd backend
  ./mvnw spring-boot:run
```


# API Reference

### Create new todo item

```http
  POST /api/v1/todos/new
```
### Request Body 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of item to update |
| `entry`| `string` |  Value of task entry |
| `isCompleted`| `boolean` |  Marks items as completed or not completed |



### Get all Todo items

```http
  GET /api/v1/todos/all
```

### Get Todo item by id

```http
  GET /api/v1/todos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

### Get all Todo items by completion 
```http
  GET /api/v1/todos/completed={isCompleted}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isCompleted`      | `boolean` | **Required**. Marks items as completed or not completed |

### Update Todo item by id 
```http
  PUT /api/v1/todos/{id}
```
#### Request Body 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of item to update |
| `entry`| `string` |  Value of task entry |
| `isCompleted`| `boolean` |  Marks items as completed or not completed |

### Delete Todo item by id
```http
  DELETE /api/v1/todos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of item to delete |


