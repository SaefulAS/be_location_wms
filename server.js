const app = require('./app');
const sequelize = require('./config/database');

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Run server
const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});