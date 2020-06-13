const express = require('express');
// creates an instance of express
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// creates a variable that uses whatever
const PORT = process.env.PORT || 5000;


// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherStuff = "Hello there. This is the extra stuff you requested."

// Set Handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        // we can pass stuff into our app here
        stuff: otherStuff
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));