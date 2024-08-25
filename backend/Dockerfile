# BASE IMAGE
FROM node:21.2.0-alpine

# POSTGRES-CLIENT IS THE PACKAGE FOR THE POSTGRESSQL CLIENT UTILITIES,
# WHICH INCLUDES COMMAND-LINE TOOLS LIKE psql FOR INTTERACTIONG WITH 
# A POSTGRESSQL DATABASE
RUN apk add --no-cache postgresql-client

WORKDIR /app

# COPY ALL PACKAGE.JSON FILES TO APP DIRECTORY
COPY package*.json ./

# INSTALL DEPENDENCIES AND DEVDEPENDENCIES
RUN npm install

# COPY THE DOCKERFILE DIRECTORY TO APP DIRECTORY
COPY . .

# COMPILLE TYPESCRIPT FILES INTO JAVSCRIPT FILES. CREATE /dist DIRECTORY
RUN npm run build

# is a tool that allows you to run TypeScript files directly without 
# needing to compile them to JavaScript first
# RUN npm install -g ts-node


# NECESSARY PACKAGES TO RUN BYCRYPT
# RUN npm i @types/bcrypt
RUN npm i request && npm i node-pre-gyp
RUN apk add --no-cache python3 make g++
RUN npm i bcrypt@5.0.0

# Set environment variables
ENV NODE_ENV=production

# RUN npm install --save @types/multer
# RUN npm install -g dotenv-cli

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]