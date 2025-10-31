import express from 'express';
import ServiceUsers from '../service/user.service.js'

const router = express.Router();
const service = new ServiceUsers();


router.get('/find', async (req, resp) => {
    const users = await service.findAll();
    resp.json({ message: users.message, row: users.data });
});


export default router;