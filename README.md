<h1 align="center">
  Facebook API 🦄
</h1>

## <p>Summary 🦄</a>

* [Installation](#installation)
* [Story](#story)
* [Prisma Models](#prisma-models)
* [API Routes](#api)
* [Credits](#credits)

## <a name='installation'>🐨 Installation</a> 

* Install the dependencies :

```bash
npm install
```

 * To run the app :
```bash
npm run dev
```

## <a name='story'>Story 🦊</a>

This is a **REST API project** 💻.

To do this, you need to create models from **Prisma model** below (see "*prisma model*"). This is used to create our database.  

Then we create routes according to our **API Routes** (see "*API Routes*"), which allow us to test our application.

**We wonder what this application does ?**

In this application, we can create an account (user) and register it. Then we connect with this login, this will give us our token, which will check if it is the right user. 
A small detail, when we create a user, it automatically creates an empty profile. Thanks to this, we can update the profile or even delete it via the user id.

We can also create posts that will be registered with the user we are connected with. Afterwards, we can display all of them, or display only one via the post id, delete or update the post.

And here the story is finished, it's up to you to play 😄 !


## <a name='prisma-models'>🐱 Prisma Models</a>

```
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  Profile   Profile?
  Posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Profile {
  id        Int    @id @default(autoincrement())
  firstName String
  lastName  String
  User      User   @relation(fields: [userId], references: [id])
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id       Int    @id @default(autoincrement())
  message  String
  Author   User   @relation(fields: [authorId], references: [id])
  authorId String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## <a name='api'>API Routes 🐼</a>


## `/api/v1/authentication`
### DTOs
| name          | schema                               |
|:--------------|:-------------------------------------|
| `LoginDto`    |`{ email: string, password: string }` |
| `RegisterDto` |`{ email: string, password: string }` |

### URIs
| method | endpoint    | headers   | body         | Response                          | description                              |
|:-------|:------------|:----------|:-------------|:----------------------------------|:-----------------------------------------|
| `POST` | `/login`    | `null`    |`LoginDto`    | `{ user: User, token: JwtToken }` | return a JWT Token for authentication.   |
| `POST` | `/register` | `null`    |`RegisterDto` | `{ user: User}`                   | register a new User.                     |

## `/api/v1/users`

### DTOs
| name            | schema                                      |
|:----------------|:--------------------------------------------|
| `UpdateProfile` | `{ firstName?: string, lastName?: string }` |

### URIs
| method   | endpoint       | headers                | body            | Response               | description                    |
|:---------|:---------------|:-----------------------|:----------------|:-----------------------|:-------------------------------|
| `GET`    | `/:id/posts`   | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }`    | return a list of User's posts. |
| `GET`    | `/:id/profile` | `Authorization: TOKEN` | `null`          | `{ profile: Profile }` | return a User's profile.       |
| `PATCH`  | `/:id/profile` | `Authorization: TOKEN` | `UpdateProfile` | `{ profile: Profile }` | update a User's profile.       |
| `DELETE` | `/:id`         | `Authorization: TOKEN` | `null`          | `null`                 | delete an user by it's id.     |

## `/api/v1/posts`

### DTOs
| name            | schema                  |
|:----------------|:------------------------|
| `CreatePostDto` | `{ message: string }`   |
| `UpdatePostDto` | `{ message?: string }`  |

### URIs
| method   | endpoint | headers                | body            | Response            | description            |
|:---------|:---------|:-----------------------|:----------------|:--------------------|:-----------------------|
| `POST`   | `/`      | `Authorization: TOKEN` | `CreatePostDto` | `{ post: Post }`    | create a new Post.     |
| `GET`    | `/:id`   | `Authorization: TOKEN` | `null`          | `{ post: Post }`    | return a Post.         |
| `GET`    | `/`      | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }` | return a list of Post. |
| `PATCH`  | `/:id`   | `Authorization: TOKEN` | `UpdatePostDto` | `{ post: Post }`    | update a Post.         |
| `DELETE` | `/:id`   | `Authorization: TOKEN` | `null`          | `null`              | delete a Post.         |

## <a name='story'>�😻 Credits</a>

* Omma Habiba BIPLOB student at EFREI PARIS
* Contact me on Linkedin https://www.linkedin.com/in/omma-habiba-biplob/
