# BACK-END

### AUTH ROUTES:

##### Applicant Sign up

```
POST /api/auth/applicant/signup
```

##### Company Sign up

```
POST /api/auth/company/signup
```

##### User Log in

```
POST /api/auth/user/login
```

##### User Verify

```
GET /api/auth/user/verify
```

### APPLICANTS ROUTES:

##### Get one applicant

```
GET /api/applicants/:applicantId
```

##### Edit one applicant

```
PUT /api/applicants/:applicantId
```

##### Delete one applicant

```
DELETE /api/applicants/:applicantId
```

#### Get all applications for an applicant

```
GET /api/applicants/applications
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
POST /api/applications/:applicantId/:jobOfferId
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
