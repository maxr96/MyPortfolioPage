const path = require('path');
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory

// If an incoming request uses a protocol other than HTTPS, redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
}

// Instruct the app to use the forceSSL middleware (only in production)
if(process.env.PORT){
    app.use(forceSSL());
}

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
