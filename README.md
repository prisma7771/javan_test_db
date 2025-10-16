# Javan Test App - RESTful API & Frontend

This project consists of a **frontend React app** and a **backend RESTful API** built with **Node.js + Express**, deployed on **Vercel**.  
The app demonstrates simple user management with three endpoints: fetch users, fetch single user, and create a new user.  

---

## 🔗 Related Projects

- **Frontend Repository**: [javan_frontend](https://github.com/prisma7771/javan_frontend)  
- **Backend Repository**: [javan_test_db](https://github.com/prisma7771/javan_test_db)  
- **API Base URL**: https://javan-test-db.vercel.app/api  
- **Frontend App URL**: https://javan-frontend.vercel.app/

---

## 📡 API Documentation

### 1. Get All Users  
**`GET /api/users`**

**Response:**
```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@mail.com",
    "age": 22,
    "device": "iPhone",
    "fun_fact": "Loves cats"
  }
]
```

### 2. Get Users by ID  
**`GET /api/users/1`**




**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 2,
    "name": "Bob",
    "email": "bob@mail.com",
    "age": 30,
    "device": "Android",
    "fun_fact": "Can juggle"
  }
}
```


### 3. Create New Users   
**`POST /api/users`**

**Response:**
```json
 {
  "id": 1,
  "name": "Alice",
  "email": "alice@mail.com",
  "age": 22,
  "device": "iPhone",
  "fun_fact": "Loves cats"
 }
```

**REQUEST**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 2,
    "name": "Bob",
    "email": "bob@mail.com",
    "age": 30,
    "device": "Android",
    "fun_fact": "Can juggle"
  }
}
```

### ERROR HANDLING
**Response:**
```json
{
  "errors": [
    "Name must be at least 2 characters.",
    "Email must be valid."
  ]
}

```

## Testing with HTTPie
**Get All Users**

**`http GET https://javan-test-db.vercel.app/api/users
`**

**Get User By ID**

**`http GET https://javan-test-db.vercel.app/api/users/1`**

**Create New USer**

**`http POST https://javan-test-db.vercel.app/api/users \
  name="Charlie" \
  email="charlie@mail.com" \
  age:=28 \
  device="Windows" \
  fun_fact="Speaks 4 languages"
`**
