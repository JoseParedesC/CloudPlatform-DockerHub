import express from 'express';
import ServiceUsers from '../service/user.service.js'

const router = express.Router();
const service = new ServiceUsers();


router.get('/find', async (req, resp) => {
    const users = await service.findAll();
    resp.json({ message: "Response Users Find All", row: users.data });
});


export default router;