"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_route_1 = require("./routes/index-route");
const user_route_1 = require("./routes/user-route");
const login_route_1 = require("./routes/login-route");
const register_route_1 = require("./routes/register-route");
class ApiRoutes {
    registerApiRoutes(app) {
        app.use('/api/user', user_route_1.userRoutes);
        app.use('/api/login', login_route_1.loginRoutes);
        app.use('/api/register', register_route_1.registerRoutes);
        //always register this route in the end
        app.use('/', index_route_1.indexRoute);
    }
}
exports.apiRoutes = new ApiRoutes();
