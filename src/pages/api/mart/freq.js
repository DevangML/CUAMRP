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
                await Freq.findOne({ email })
                    .then(async (fes) => {
                        if (fes !== null) {
                            await Freq.findOneAndUpdate(
                                { email: email },
                                { $push: { items: items } },
                                { new: true }
                            )
                                .then((reg) => {
                                    return res.status(200).json({ reg, message: 'gg' });
                                })
                                .catch((eg) => {
                                    return res.status(500).json({ eg, message: 'in' });
                                });
                        } else {
                            throw new Exception();
                        }
                    })
                    .catch(async (e) => {
                        let user = new Freq({
                            email: email,
                            items: items,
                        });
                        // Create new user
                        const resp = await Freq.findOne({ email });
                        if (resp === null) {
                            await user
                                .save()
                                .then((rf) => {
                                    return res.status(200).json({ rf, message: 'vv' });
                                })
                                .catch((ev) => {
                                    return res.status(500).json(ev);
                                });
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
