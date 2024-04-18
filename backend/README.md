# BACK-END

### AUTH ROUTES:

##### User Sign up

```
POST /api/auth/user/signup
```

##### User Log in

```
POST /api/auth/user/login
```

##### User Verify

```
GET /api/auth/user/verify
```

##### Company Sign up

```
POST /api/auth/company/signup
```

##### Company Log in

```
POST /api/auth/company/login
```

##### Company Verify

```
GET /api/auth/company/verify
```

### USERS ROUTES:

##### Get one user

```
GET /api/users/:userId
```

##### Edit one user

```
PUT /api/users/:userId
```

##### Delete one user

```
DELETE /api/users/:userId
```

### COMPANIES ROUTES:

##### Get all companies

```
GET /api/companies
```

##### Get one company (private)

```
GET /api/companies/:companyId
```

##### Edit one company (private)

```
PUT /api/companies/:companyId
```

##### Get one company and related job offers (public)

```
GET /api/companies/profile/:companyId
```

##### Delete one company

```
DELETE /api/companies/:companyId
```

### JOB OFFERS ROUTES:

##### Get all job offers

```
GET /api/joboffers
```

##### Get one job offer

```
GET /api/joboffers/:jobOfferId
```

##### Post a new job offer

```
POST /api/joboffers
```

##### Archive one job offer

```
PATCH /api/joboffers/:jobOfferId
```

##### Get all applications for one job offer

```
GET /api/joboffers/:jobOfferId/applications
```

### APPLICATIONS ROUTES:

##### Get all applications

```
GET /api/applications
```

##### Get one application

```
GET /api/applications/:applicationId
```

##### Post one application

```
POST /api/applications/:userId/:jobOfferId
```

### FAVORITES ROUTES:

##### Get all favorites of a user

```
GET /api/favorites
```

##### Post one favorite

```
POST /api/favorites/:jobOfferId
```

##### Delete one favorite

```
DELETE /api/favorites/:favoriteId
```
