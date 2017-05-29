import { Router, Request, Response } from "express";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.sendFile('./public/index.html');
});

router.get('/:name', (req: Request, res: Response) => {
    let name: String = req.params.name;
    res.send(`hello, ${name}`);
});

export const WelcomeController: Router = router;