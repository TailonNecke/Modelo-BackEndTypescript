import 'reflect-metadata';
import express from 'express';
import AuthDataSource from './database/data-sources/data-sourceAuth';
import routes from './routes'

AuthDataSource
  .initialize()
  .then(() => {
    console.log("📦 Data Source Auth has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source Auth initialization:", err);
  });


const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));
