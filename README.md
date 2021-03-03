# BookSwitch
<br>

## Description

This is an app that allows users to switch books with other users in their city.

## User Stories

-  **Error:** As a non/user I can see an error message so that I know it's not my fault
-  **Signup:** As a non I can sign up in the app so that I can start creating and managing my profile
-  **Login:** As a user I can login to the app so that I can start switching books and managing my profile
-  **Logout:** As a user I can logout from the app so no one else can modify my information
-  **Toogle Search** As a user I can toogle between different types of search: map or list
-  **View books** As a user I can view all of the available books in my city
-  **View book details** As a user I can view details of a specific book
-  **Add books** As a user I can add books to my library
-  **Edit books** As a user I can edit books from my library
-  **Delete books** As a user I can delete books from my library
-  **Books switch status** As a user I can mark books in my library as switched
<!-- -  **Random element** As a user I can get a random element from my city's library -->
-  **Check profile** As a user I can check my profile
-  **Edit profile** As a user I can edit my profile
-  **Add profile photo** As a user I can upload/change my profile photo
-  **Request switch** As a user I can contact other users to request a switch
-  **Send and receive message** As a user I can send and receive messages with other users
-  **Read messages** As a user I can read all the messages I have with other users


## Backlog

- Email verification
- Most switched books
- Notifications when receiving messages
- Temporarily switched books section
- Welcome message to first time users
- API for countries and cities list

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions                 | Behavior                                                     |
| ------------------------- | --------------------           | -----------                 | ------------------------------------------------------------ |
| `/`                       | n/a                            | public `<Route>`            | Redirect to home page                                        |
| `/signup`                 | NavBar, SignupForm, FooterBar  | public `<Route>`            | Signup form, navigate to homepage with Welcome message       |
| `/login`                  | NavBar, LoginForm, FooterBar   | public `<Route>`            | Login form, link to signup, navigate to homepage after login |
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session            |
| `/home`                   | NavBar, ElementList, FooterBar | public `<Route>`            | Shows all books in your city, link to search and map view    |
| `/book/:id`               | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows book details, similar books and functional buttons     |
| `/book/edit/:id`          | NavBar, ElementList, FooterBar | owner only `<PrivateRoute>` | Shows book details in a form and allows editing and saving   |
| `/profile`                | NavBar, ElementList, FooterBar | user only `<PrivateRoute>`  | Shows profile, library section and functional buttons        |
| `/book/add`               | NavBar, BookForm, FooterBar    | user only `<PrivateRoute>`  | Add a book to the library, navigate to profile               |
| `/messages`               | NavBar, MessagesList, FooterBar| user only  `<PrivateRoute>` | Shows messages grouped by user contacted                     |
| `/messages/:contactId`    | NavBar, MessageWith, FooterBar | user only `<PrivateRoute>`  | Shows messages thread with one user                          |
          

## Components

- LoginForm

- SignupForm

- NavBar

- FooterBar

- ElementList

- BookForm

- SearchForm

- BookCard

- BookDetails

- BookList

- ProfileCard

- ProfileForm

- SearchResults

- MapView

- MessageList

- MessageWith

- Error


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

<!-- - Book Service
  - backlog.filter(type, status) // for different types of books and if they are done or not
  - backlog.detail(id)
  - backlog.add(id)
  - backlog.delete(id)
  - backlog.update(id) -->
  
- External API
  - API for books
  - API for maps



<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, require: true},
  name: {type: String,},
  lastName: {type: String,},
  email: {type: String,require: true,unique: true},
  passwordHash: {type: String,require: true,},
  photo: {type: String,default: defaultProfileImg,},
  city: {type: String,ENUM: ['Amsterdam', 'Augsburg', 'Berlin', 'Frankfurt', 'Ljubljana', 'Madrid', 'Munich', 'Paris','Versailles'],require: true}
}
```


Book model

```javascript
 {
  title: {type: String,require: true},
  author: {type: String,require: true},
  owner: {type: Schema.Types.ObjectId,ref: "user",require: true},
  language: {type: String,ENUM: ["English", "French","German", "Spanish" ]},
  description: {type: String},
  photo:{type: String,default: defaultImg},
  category: {type: String,ENUM: ['1', '2', '3'],require: true},
  switchMode: {type: String,ENUM: ['switch', 'gift', 'temporary-switch'],}
 }
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                              |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ |--------------------------------------------------------- |
| POST        | `/auth/signup`                | {username, email, password, city}      | 200            | 500          | Checks if fields not empty (422) and user does not exist (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 500          | Checks if fields not empty (422), if user exists (404), and if password does not match (404), then stores user in session    |
| POST        | `/auth/logout`                | (empty)                      | 204            | 500         | Logs out the user and destroy session                                           |
| POST        | `/search/add`                 | {platform, title, type, id}  |                | 500          | Add new backlog element and add to user                                               |
| GET         | `/auth/user`             |                              |       200         | 500          | Show homepage                                          |
<!-- | GET         | `/books/series`             |                              |                | 500          | Show series elements                                           |
| GET         | `/books/films`              |                              |                |              | Show film elements                                           |
| GET         | `/books/games`              |                              |                |              | Show games elements                                          |
| GET         | `/media/:id`                        |                              | 201            | 500          | Show specific element                                        |
| PUT         | `/media/:id`                 |                              | 200            | 500          | edit element                                                 |
| DELETE      | `/media/:id`                 |                              | 201            | 500          | delete element                                               |
| GET         | `/done/series`                |                              |                | 500          | Show series elements                                         |
| GET         | `/done/films`                 |                              |                |              | Show film elements                                           |
| GET         | `/done/games`                 |                              |                |              | Show games elements                                          | -->



<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/nvrVQc0w/switch-kanban) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/erdemce/Book-Switch-Client)

[Server repository Link](https://github.com/erdemce/Book-Switch-Server)

[Deployed App Link](https://book-switch.herokuapp.com)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1KUCO-ArM3JeFq50ajZ6mUtc9WSAdtXTtyIDVDITnlD0/edit?usp=sharing)