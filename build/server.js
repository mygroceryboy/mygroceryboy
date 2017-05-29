"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("./controllers");
const app = express();
const port = process.env.PORT || 3000;
app.use('/welcome', controllers_1.WelcomeController);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQywrQ0FBa0Q7QUFFbEQsTUFBTSxHQUFHLEdBQXdCLE9BQU8sRUFBRSxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUU5QyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSwrQkFBaUIsQ0FBQyxDQUFDO0FBRXZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMsQ0FBQyJ9