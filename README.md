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

## React

### Main folders:  
        
#### public folder:  
            
##### index.html:
    <noscript>You need to enable JavaScript to run this app.</noscript>:  
        - This tag is the warning that will appear if you run the code in a browser that not suport javascript. 
        - The entire project in react runs in javascript.  
    <div id="root"></div>:  
        - The only HTML element were all the components will be rendered.  
        - React use all the componet's code andcreate a virtual DOM and inject in the root element.  
        - The javascript code will be injected here. - The index.js file is the main javascript file.  

#### src folder

##### index.js file

    - the main javascript file.  
    - create the root of the entire aplication into the htlm root element of the index.htl file.  
    - render the App component.  
    - <React.StrictMode>: used in development by react to generate warnings and errors in the code to help the development.  

##### App.js file

    Where you writte the javascript code.  
  
    A component return a JSX code (HTML + JS).  

    export default App:  
        Means that when the App.js file is imported, the App component will be imported.  
    

### JSX (javscript xml)

    The return of every component in react is write in jsx code.  
    When npm run a react project, the jsx code is transpilled to javascript. For every element created, React will call the function React.createElement().  

    A component only returns a simgle element:  
    wrong:  
        function App() {  
            return(
                <h1>Hello</h1>  
                <p>Welcome</p>  
            )
        }  
    right:  
        function App() {  
            return (
                <div>  
                    <h1>Hello</h1>  
                    <p>Welcome</p>  
                </div>  
            )
        }  

    How to have javascript code inside a jsx:  

        function App() {  
            const name: "MyName"
            return (
                <div>  
                    <h1>Hello {name}</h1>  
                    <p>Welcome</p>  
                </div>  
            )
        }

#### Links:  
    
    https://www.youtube.com/watch?v=mWp3fkq_qGE&list=PLLGlmW7jT-nROpfmMFDj7ccjCujXOLIey&index=3  

### Components

    A component is a javascript function.  
    A component starts with a capital letter. If not, react treat like a function.  
        ex:  
            function app() {}; - threat as function.  
            function App() {}; - threat as component.  


#### return

    A component returns a jsx code.  
    A component only returns a simgle element:  
    wrong:  
        function App() {  
            <h1>Hello</h1>  
            <p>Welcome</p>  
        }  
    right:  
        function App() {  
            <div>  
                <h1>Hello</h1>  
                <p>Welcome</p>  
            </div>  
        }

#### Types

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

#### Links

    https://www.youtube.com/watch?v=F0ZvDcOuBdo&list=PLApy4UwQM3UpqUKS1g5B7reczq3ECvtx0&index=1  
    https://reacttraining.com/blog/react-owner-components  
    https://www.youtube.com/watch?v=PraIL031lno&list=PLLGlmW7jT-nROpfmMFDj7ccjCujXOLIey&index=5  

### P rops

    Props are javscript objects.  
    They are used to send data or functions across components.  

#### Links
        
    https://www.youtube.com/watch?v=jDHBY6tV2SE&list=PLApy4UwQM3UpqUKS1g5B7reczq3ECvtx0&index=2  
   
    https://www.epicreact.dev/can-you-modify-react-props  

    
### HOOKS

#### useState

    State is data that can changes over time.  
    Data can be different from one render to another.  

    Links:  
        - https://www.youtube.com/watch?v=V9i3cGD-mts&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2  

#### useEffect

    It is a async function. It will run in parallel. It will not block the render of the component.
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
    
    Warning:  
        A UseEffect should not be used to set a propertie based on another propertie.  
        Syntax:  
            useEffect (() => {  
                setProp1(prop2 === "value");  
            }[prop1]);

    Links:  
        - https://www.youtube.com/watch?v=-4XpG5_Lj_o&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=2  

#### useMemo

    To update a State you have to trigger and re-render the entire component.  
  
    Syntax:  
        const selectItem = useMemo( 
            () =>
        )
    Link:  
        - https://www.youtube.com/watch?v=vpE9I_eqHdM&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=3  

#### useCallback

    Used with memo hook.  
    memo:  
        -it's a hook used for performance reasons.  
        - it wraps the component and intercept the render of the component to check if the props are different from one render to another.  

        Syntax:  
            export default memo(Component)  

    Problem:  
        In REACT function are different in every render. If a function in a component 1 is passed as a props to a component2 and the component 1 is re-rendered the component 2 will always re-render beacause the props will always be considered as different from the last render, even if you have wrapped component 2 with memo.  

    Solution:  
        To a function do not be considered different in every render, it's used useCallback.  
        With useCallback the function is memorized.  
    
    Syntax:  
        const handleFunction = useCallback(
            () => { 
            
            },[]);
        - [] controll's when the function should be different. It's necesary to re-render the function to re-render the variables used in it.
    
    Warning:  
        The variables from the perspective of the function were memorized too. This values will be  updated for the function when the function be re-rendered.
        
#### useContext

    If the component is not wrapped with ContextProvider, a call to it will be return undefined.
    It is necessary to create a hook that will throw a error any time useContext return undefined. This will help debug the application.

#### useRef

#### UseReducer

#### useImperativeHandle

#### useTransition

#### useDefferedValue

#### useLayoutEffect

    It is a sync function. It will block the render of the component.
    - The component will render after run useLayoutEffect

    Links:  
        - https://www.youtube.com/watch?v=9GAt97z8Jc4&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=11  
    
    
          

    


### SPA


### Bootstrap

    npm install bootstrap

### Routes

    Links:  
        https://www.youtube.com/watch?v=oTIJunBa6MA  
    Package.json:  
        npm install react-router-dom  

### Fech data with Axios

    npm install axios

    

### Jwt

    Links:  
        - https://www.youtube.com/watch?v=AcYF18oGn6Y&list=PLApy4UwQM3UqAkfITNFzlqoD__UI6X5pb&index=12  

    

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

### Docker

### Production Mode

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

### Versioning

### Links

    - Versionamento Semântico  
        https://semver.org/lang/pt-BR/  

## Nextjs

### Routing

    * All routes must be placed inside the app folder  
    * Every file that corresponds to a route must be named page.js or page.ts  
    * Every folder corresponds to a path segment in the browser URL  

#### Title Metadata

    * the title field's primary purpose is to define the document title.  
    * it can be either a string or an object.  

    Syntax:
        import { Metadate} from "next";

        export const metadata: Metadata = {
            title: {
                absolute: "<if in the child, ignore the template>",  
                default: "<fallback title for child segments that don't specify a title>",  
                template: "<add a prefix (< %s | <text>) or sufix (<text> | %s) to child title>"  
            },  
            description: "<Write some description>",  
        }  