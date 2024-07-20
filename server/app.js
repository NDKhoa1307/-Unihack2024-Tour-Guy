import express from 'express';
import UsersRouter from './routes/user.routes.js';

const app = express();
const port = 8080;

app.use("/api/users", UsersRouter)

app.listen(port, () => {
    console.log(`Application is live at http://localhost:${port}`);
})