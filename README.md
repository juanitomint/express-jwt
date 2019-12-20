# express-jwt
Serve static resources checking the JWT token

## Problem 

serve static resources only to authenticated users wich have a valid jwt

## Approach

use a middleware that checks for token using jsonwebtoken library

## Usage / Test


1 Start the application
```
$ npm start

> express-jwt@0.0.1 start /home/juanb/clientes/fluxit/runrun/express-jwt
> node server.js

express-jwt listening on port 3000!
```

2 Get a valid token


http://localhost:3000/validtoken


3 request a static resource

http://localhost:3000/static/devops.png

should present you an image

4 Get a In-valid token


http://localhost:3000/invalidtoken

5 request a static resource

http://localhost:3000/static/devops.png

should present you an 401 forbbiden error


## Todo

make logs work with static resources

## Disclaimer

this code is a POC: Proof Of Concept, and can be used as a base for other more complex implementations, i leave it here as a reference for others and for myself.

Uses:
    
   * https://www.npmjs.com/package/jsonwebtoken
    
   * https://github.com/expressjs/morgan

   * https://github.com/expressjs/cookie-parser/

    