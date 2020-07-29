const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const chalk = require('chalk');
const { devMiddleware, hotMiddleware } = require('./middleware/dev-middleware');

const app = express();
const port = process.env.port || 8080;

app.use(history());

app.use(devMiddleware);
app.use(hotMiddleware);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(chalk.cyan(`Server running on port ${port}.`));
});
