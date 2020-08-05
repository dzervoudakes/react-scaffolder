import path from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';
import { devMiddleware, hotMiddleware } from './middleware/dev-middleware';

const app = express();
const port = process.env.port || 8080;

app.use(history());

app.use(devMiddleware);
app.use(hotMiddleware);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(chalk.cyan(`Server running on port ${port}.`));
});
