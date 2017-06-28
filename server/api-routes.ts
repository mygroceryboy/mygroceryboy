import * as express from 'express';
import { indexRoute } from "./routes/index-route";
import { userRoutes } from "./routes/user-route";
import { personalInfoRoutes } from "./routes/personal-info.route";
import { loginRoutes } from "./routes/login-route";
import { registerRoutes } from "./routes/register-route";
import { cityRoutes } from "./routes/city-route";

class ApiRoutes {

    public registerApiRoutes(app: express.Application): void {
        app.use('/api/user', userRoutes);
        app.use('/api/personal-info', personalInfoRoutes);
        app.use('/api/login', loginRoutes);
        app.use('/api/register', registerRoutes);
        app.use('/api/cities', cityRoutes);
        // app.use('/api/cities', cityRoutes);
        //always register this route in the end
        app.use('/', indexRoute);
    }
}

export let apiRoutes: ApiRoutes = new ApiRoutes();