const express = require('express');
const session = require('express-session');
//const handlebars = require('express-handlebars');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// View engine setup (Handlebars)
//app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
//app.set('view engine', 'handlebars');

// API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: 'http://localhost:${PORT}`);
});
