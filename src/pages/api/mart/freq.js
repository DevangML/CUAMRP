// pages/api/user

import { getFreq, updateFreq } from '../../../../prisma/freq';

async function handle(req, res) {
    try {
        switch (req.method) {
            case 'GET': {
                try {
                    const user = await getFreq(req.query.email);
                    return res.status(200).json(user);
                } catch (e) {
                    return res.status(500).json({ e, success: false });
                }
            }
            case 'PUT': {
                // Update an existing user
                const { list } = req.body;
                const upFreq = await updateFreq(req.query.email, list);
                return res.json(upFreq);
            }
            default:
                break;
        }
    } catch (error) {
        return res.status(500).json({ ...error, message: error.message });
    }
}

export default handle;
