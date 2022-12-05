import connectDB from '../../../middleware/mongodb';
import Freq from '../../../models/freq';
const db = process.env.DATABASE_URL;

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        // Check if name, email or password is provided
        const { email, items } = req.body;
        if (email && items) {
            const freqItem = await db.freqItems.findOne({ email: email }).catch((e) => {
                console.log(e);
            });
            if (freqItem === null) {
                try {
                    let user = new Freq({
                        email: email,
                        items: items,
                    });
                    // Create new user
                    let freqCreated = await user.save();
                    return res.status(200).send(freqCreated);
                } catch (error) {
                    return res.status(500).send(error.message);
                }
            }
            try {
                const freqUp = await db.freqItems.findAndUpdate(
                    { email: email },
                    { $push: { items: items } },
                    { new: true }
                );
                return res.status(200).send(freqUp);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);
