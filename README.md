# MyHelp
frontend repo: https://github.com/kacperkingsford/praca-inzynierska-frontend
# Tasks todo:
* ~~Enable adding help offers/requests, and reserve them~~
* ~~CI/CD which will automatically deploy app to AWS ECS - frontend~~
* Use AWS RDS on production stage
* CI/CD which will automatically deploy app to AWS ECS - backend
* Make mandatory for all endpoints (except login, signin) to use JWT token
* Translation to ukrainian using i18n
* Admin panel for managing all help offers - use in backend of role model
* On localhost use static images instead of AWS S3.

## Hi!
This web application will help foreigners in need.

## How to set up this app locally
Create in root directory file `secrets.yml`:
```
spring:
  datasource:
    username: YOUR_DB_USER
    password: YOUR_DB_PASSWORD

flyway:
  user: YOUR_DB_USER
  password: YOUR_DB_PASSWORD

myhelp:
  app:
    jwtSecret: YOUR_JWT_SECRET
    jwtExpirationMs: YOUR_EXPIRATION_IN_MS
  awsAccessKey: YOUR_AWS_ACCESS_KEY
  awsSecretKey: YOUR_AWS_SECRET_KEY
```
fill `YOUR_*` with your credentials.

In `docker-compose.yml` also change `MYSQL_ROOT_PASSWORD
MYSQL_USER
MYSQL_PASSWORD
MYSQL_DATABASE` to your credentials.

Run `docker-compose up`.
## Instruction for users
Use cases: **[Figma Views](https://www.figma.com/file/4n3T8fkHtGwdw9QgxeiGnW/praca-in%C5%BCynierska?node-id=2%3A51)**


## Documantation for programmers


### Technologies

**Backend**
- Java 17
- Spring Framework
- Spring Boot
- Spring JPA
- Gradle
- MySQL

**Frontend**
- TypeScript
- Angular

**Other**
- Docker
- AWS (S3, ECS, ECR, Code Commit/Build/Pipeline)
