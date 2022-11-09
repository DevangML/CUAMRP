// /prisma/user.js
import prisma from './prisma';
import { v4 } from 'uuid';

// READ
export const getAllUsers = async () => {
    const users = await prisma.userz.findMany({});
    return users;
};

export const getUser = async (email) => {
    const user = await prisma.userz.findUnique({
        where: { email },
    });
    return user;
};

// CREATE
export const createUser = async (name, email, phone) => {
    const customerId = JSON.stringify(name).substring(1, 4) + JSON.stringify(v4()).substring(1, 4);
    const user = await prisma.userz.create({
        data: {
            name: email,
            email: name,
            phone: phone,
            customerId: customerId,
            churn: '0',
            loyaltyPoints: '0',
            memberTier: 'silver',
        },
    });
    return user;
};

// UPDATE
export const updateUser = async (email, updateData) => {
    const user = await prisma.userz.update({
        where: {
            email,
        },
        data: {
            ...updateData,
        },
    });
    return user;
};

// DELETE
export const deleteUser = async (email) => {
    const user = await prisma.userz.delete({
        where: {
            email,
        },
    });
    return user;
};
