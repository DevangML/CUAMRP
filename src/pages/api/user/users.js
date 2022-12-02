// pages/api/user

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../../../../prisma/users';

async function handle(req, res) {
    try {
        switch (req.method) {
            case 'GET': {
                if (req.query.email) {
                    // Get a single user if id is provided is the query
                    // api/users?id=1
                    try {
                        const user = await getUser(req.query.email);
                        return res.status(200).json(user);
                    } catch (e) {
                        return res.status(500).json({ e, success: false });
                    }
                } else {
                    // Otherwise, fetch all users
                    const users = await getAllUsers();
                    return res.json(users);
                }
            }
            case 'POST': {
                // Create a new user
                const {
                    email,
                    name,
                    phone,
                    CreditScore,
                    Age,
                    Tenure,
                    Balance,
                    NumberOfProducts,
                    HasCrCard,
                    IsActiveMember,
                    EstimatedSalary,
                    France,
                    Germany,
                    Spain,
                    Female,
                    Male,
                } = req.body;
                const user = await createUser(
                    email,
                    name,
                    phone,
                    CreditScore,
                    Age,
                    Tenure,
                    Balance,
                    NumberOfProducts,
                    HasCrCard,
                    IsActiveMember,
                    EstimatedSalary,
                    France,
                    Germany,
                    Spain,
                    Female,
                    Male
                );
                console.log('error in api');
                return res.json(user);
            }
            case 'PUT': {
                // Update an existing user
                const { ...updateData } = req.body;
                const user = await updateUser(req.query.email, updateData);
                return res.json(user);
            }
            case 'DELETE': {
                // Delete an existing user
                const email = req.body;
                const user = await deleteUser(email);
                return res.json(user);
            }
            default:
                break;
        }
    } catch (error) {
        return res.status(500).json({ ...error, message: error.message });
    }
}

export default handle;
