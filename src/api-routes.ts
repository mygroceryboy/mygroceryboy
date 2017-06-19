import * as express from 'express';
import { indexRoute } from "./routes/index-route";
import { userRoutes } from "./routes/user-route";
import { loginRoutes } from "./routes/login-route";
import { registerRoutes } from "./routes/register-route";

class ApiRoutes {

    public registerApiRoutes(app: express.Application): void {
        app.use('/api/user', userRoutes);
        app.use('/api/login', loginRoutes);
        app.use('/api/register', registerRoutes);
        //always register this route in the end
        app.use('/', indexRoute);
    }
}

export let apiRoutes: ApiRoutes = new ApiRoutes();