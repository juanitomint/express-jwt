const express = require('express')
const cookieParser = require('cookie-parser')
const port = 3000
var app = express()
app.use(cookieParser())
const prefix='/static'


// set a cookie
app.get('setcookie/',function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  } 
  else
  {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});


app.get('/cookie',function(req, res){
    res.send(req.cookies)
})


app.use(prefix, express.static('Pictures'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))