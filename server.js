const express = require('express')
const cookieParser = require('cookie-parser')
// logs
var morgan = require('morgan')

//jwt
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 3000

var app = express()
app.use(cookieParser())

const prefix='/static'

// set a cookie with vallid token
app.get('/validtoken',function (req, res, next) {
  res.cookie('jwt',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  res.send('Valid Token set!')
  next(); // <-- important!
});

// set a cookie with an invallid token
app.get('/invalidtoken',function (req, res, next) {
  res.cookie('jwt',"eyasdasdasdasdiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  res.send('In-Valid Token set!')
  next(); // <-- important!
});


app.get('/cookies',function(req, res){
  res.send(req.cookies)
})



function checkToken(req,res,next){var morgan = require('morgan')
token=req.cookies.jwt
if (token){
  console.log(token)
  
  try {
    var decoded = jwt.verify(token, 'your-256-bit-secret', { algorithms: ['HS256'] });
    console.log(decoded)
    next();
  } catch(err) {
    console.log(err)
    res.status(403).end()
  }
} 
else 
{
  res.status(401).end()
}

}

app.use(prefix,checkToken, express.static('Pictures'))
app.use(morgan('combined'))
app.listen(port,() => console.log(`express-jwt listening on port ${port}!`))