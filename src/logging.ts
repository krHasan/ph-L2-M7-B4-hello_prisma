import { prisma } from ".";

export const loggingInPrisma = async () => {
    const result = await prisma.post.findMany({});

    // console.log(result);
};
