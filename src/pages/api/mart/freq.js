// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Freq from '../../../models/freq';
const db = process.env.DATABASE_URL;

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'PUT':
            // Check if name, email or password is provided
            const { email, items } = req.body;
            if (email && items) {
                await Freq.findOne({ email: email })
                    .then(async (res) => {
                        try {
                            const freqUp = await db.freqItems.findAndUpdate(
                                { email: email },
                                { $push: { items: items } },
                                { new: true }
                            );
                            return res.status(200).json(freqUp);
                        } catch (error) {
                            return res.status(500).json({ error, message: 'out error' });
                        }
                    })
                    .catch(async (e) => {
                        try {
                            let user = new Freq({
                                email: email,
                                items: items,
                            });
                            // Create new user
                            let freqCreated = await user.save();
                            return res.status(200).json(freqCreated);
                        } catch (error) {
                            return res.status(500).json({ error, message: 'in error' });
                        }
                    });
            } else {
                res.status(422).send(JSON.stringify(req.body));
            }
            break;
        default:
            res.status(400).json({ success: false, data: req.body });
            break;
    }
}
