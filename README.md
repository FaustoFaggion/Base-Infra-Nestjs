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

    Seeding:  
        Package.json:  
            "prisma": {  
                "seed": "ts-node prisma/seed.ts"  
            },  
    CLI:
        npx prisma db seed

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

    npm install
    npm install react-scripts --save
    npm install -g create-react-app 
    npx create-react-app frontend --template typescript
    npm install --save-dev @babel/plugin-proposal-private-property-in-object

### Components

    Links:  
        - https://www.youtube.com/watch?v=F0ZvDcOuBdo&list=PLApy4UwQM3UpqUKS1g5B7reczq3ECvtx0&index=1  
        - https://reacttraining.com/blog/react-owner-components  

    Client components:
        - Are re-render in the browser.  
        - Can not be owner of a server.  
        - Can be parent of a server component.  

    Server components:  
        - It's just a HTML at client side.  
        - It's not re-render at client side.   

    Owner component:  
        - An owner component "owns" the JSX of another component and can pass props into it.  
        - Owner's re-render their children.  

    Parent component:  
        - A parent component cannot pass props into the child.  
        - Parent's do not re-render their children.  


### Props

    Links:  
        - https://www.youtube.com/watch?v=jDHBY6tV2SE&list=PLApy4UwQM3UpqUKS1g5B7reczq3ECvtx0&index=2  
        - https://www.epicreact.dev/can-you-modify-react-props  

    
### HOOKS

#### UseState

    State is data that can changes over time.  
    Data can be different from one render to another.  

    Links:  
        - https://www.youtube.com/watch?v=V9i3cGD-mts&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2  

#### UseEffect

    Use to provide side effects into the application. Make something happen as a consequence of something else.  
    Side effect will be a result of a state changing.  

    Syntax:  
        useEffect(() => {
            The code we want to run
                - run's when the component mount.  
  
            Optional return function  
                return () => {
                    -  run's when the component unmount.  
                    - like a setup before run the code we want to run.    
                }
        },[]),  
        
        []:
            - dependency array.  
            - what useEffect should listen to.  
            - if is empty it runs once when the component is mounted.

    Links:  
        - https://www.youtube.com/watch?v=-4XpG5_Lj_o&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=2  




### SPA


### Bootstrap

    npm install bootstrap

### Routes

    Links:  
        https://www.youtube.com/watch?v=oTIJunBa6MA  
    Package.json:  
        npm install react-router-dom  

### Axios

    npm install axios

### Cookies

    Link 
        -  https://www.npmjs.com/package/universal-cookie
        -  https://www.youtube.com/watch?v=a5Krfkfl9MM
    
    npm install universal-cookie

### Profile page

    Link:  
        https://www.youtube.com/watch?v=rSXnyQozUJg  
    Package.json:  
        npm install react-select  

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
