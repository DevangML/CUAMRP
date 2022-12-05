// /prisma/user.js
import prisma from './prisma';

// READ
export const getFreq = async (email) => {
    const freq = await prisma.freqItems.findUnique({
        where: { email },
    });
    return freq;
};

// CREATE

export const createFreq = async (email, items) => {
    const freq = await prisma.freqItems.create({
        data: {
            email: email,
            items: "['212']",
        },
    });

    return freq;
};

// UPDATE
export const updateFreq = async (email, list) => {
    const freq = await prisma.freqItems.findUnique({
        where: { email },
    });
    if (freq === null) {
        const freq = await prisma.freqItems.create({
            data: {
                email: email,
                items: list[0],
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
