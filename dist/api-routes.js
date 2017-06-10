"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_route_1 = require("./routes/index-route");
const login_api_route_1 = require("./routes/login-api-route");
const register_api_route_1 = require("./routes/register-api-route");
class ApiRoutes {
    registerApiRoutes(app) {
        app.use('/api/login', login_api_route_1.loginRoutes);
        app.use('/api/register', register_api_route_1.registerRoutes);
        //always register this route in the end
        app.use('/', index_route_1.indexRoute);
    }
}
exports.apiRoutes = new ApiRoutes();
