"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});
router.get('/:name', (req, res) => {
    let name = req.params.name;
    res.send(`hello, ${name}`);
});
exports.WelcomeController = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvY29udHJvbGxlcnMvd2VsY29tZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0Q7QUFFcEQsTUFBTSxNQUFNLEdBQVcsZ0JBQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDeEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYTtJQUM3QyxJQUFJLElBQUksR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQVcsTUFBTSxDQUFDIn0=