"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_route_1 = require("./routes/index-route");
const user_route_1 = require("./routes/user-route");
const personal_info_route_1 = require("./routes/personal-info.route");
const login_route_1 = require("./routes/login-route");
const register_route_1 = require("./routes/register-route");
const city_route_1 = require("./routes/city-route");
class ApiRoutes {
    registerApiRoutes(app) {
        app.use('/api/user', user_route_1.userRoutes);
        app.use('/api/personal-info', personal_info_route_1.personalInfoRoutes);
        app.use('/api/login', login_route_1.loginRoutes);
        app.use('/api/register', register_route_1.registerRoutes);
        app.use('/api/cities', city_route_1.cityRoutes);
        //always register this route in the end
        app.use('/', index_route_1.indexRoute);
    }
}
exports.apiRoutes = new ApiRoutes();
