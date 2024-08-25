# Basic Setup

# Backend

## Cors

app.enableCors();
https://github.com/expressjs/cors#configuration-options

## Validation Pipe

npm i --save class-validator class-transformer
https://docs.nestjs.com/pipes

### Dto Validation

npm install @nestjs/mapped-types - Used for Partial-Types

## Authentication

### JWT
     npm install --save @nestjs/jwt

### Joi

    npm install joi
    npm install @types/joi --save-dev

### Refresh Token

    Link: https://www.youtube.com/watch?v=uAKzFhE3rxU

### bcrypt

    npm install bcrypt
    
    Install in development instance only.
        npm install -D @types/bcrypt

## Environment Variables
    Link to setup  
        https://dev.to/pitops/managing-multiple-environments-in-nestjs-71l

    Validation
        npm install joi
    
## DataBase

    Use with prisma:
        npm install -g dotenv-cli
        dotenv -e ./config/env/development.env npx prisma migrate dev


## Backend Test
### Unit Test

#### backend/package.json

    Add the folow script:
        scripts: {
            test:unit": "jest --config ./test/jest-unit.json",
        }

#### backend/test

    Create file jest-unit.json with the following json:
~~~ 
        {
            "moduleFileExtensions": ["js", "json", "ts"],
            "rootDir": "./unit-tests",
            "testEnvironment": "node",
            "testRegex": ".spec.ts$",
            "transform": {
            "^.+\\.(t|j)s$": "ts-jest"
            }
        
        }
~~~
    Create directory unit-tests with the file:
        user.controller.spec.ts

### Integration Test

#### backend/package.json

    Add the folow script:
        scripts: {
            "test:e2e": "jest --config ./test/jest-int.json",
        }

#### backend/test

    Create file jest-int.json with the following json:
~~~ 
        {
            "moduleFileExtensions": ["js", "json", "ts"],
            "rootDir": "./int-tests",
            "testEnvironment": "node",
            "testRegex": ".int-spec.ts$",
            "transform": {
            "^.+\\.(t|j)s$": "ts-jest"
                }
        } 
~~~

    Create directory unit-tests with the file:
        app.int-spec.ts

# Frontend

    mpm install
    npm install react-scripts --save
    npm install -g create-react-app 
    npx create-react-app frontend --template typescript
    npm install --save-dev @babel/plugin-proposal-private-property-in-object
    
### Bootstrap

    npm install bootstrap

### Routes

    npm install react-router-dom

### Axios

    npm install axios

### Cookies

    Link 
        -  https://www.npmjs.com/package/universal-cookie
        -  https://www.youtube.com/watch?v=a5Krfkfl9MM
    
    npm install universal-cookie



## Docker

## Production Mode

### Links

    https://www.youtube.com/watch?v=tGPjCGo8fS4  

### Step by Step

- Update package.json  
    &emsp;scripts: {  
    &emsp;&emsp;"start:prod": "node dist/src/main",  
    &emsp;} 

- Create the dist folder with the javascript code created from typyscript  
    &emsp;npm run build

- Run the javascript files  
    &emsp;npm dist/src/main.js

- It is not necessary to install in Docker the "devDependencies" from package.json

## Versioning

### Links

    - Versionamento Semântico  
        https://semver.org/lang/pt-BR/  
