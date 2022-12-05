// /prisma/user.js
import { list } from 'postcss';
import prisma from './prisma';

// READ
export const getFreq = async (email) => {
    const freq = await prisma.freqItems.findUnique({
        where: { email },
    });
    return freq;
};

// UPDATE
export const updateFreq = async (email, list) => {
    const freq = await prisma.freqItems.findUnique({
        where: { email },
    });
    if (freq === null) {
        const l = [list];
        const freq = await prisma.freqItems.create({
            data: {
                email: email,
                items: l,
            },
        });

        return freq;
    }
    const userUpdate = await prisma.freqItems.update({
        where: {
            email: email,
        },
        data: {
            updateData: {
                list,
                push: true,
            },
        },
    });

    return userUpdate;
};
