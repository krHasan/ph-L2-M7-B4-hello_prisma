import { prisma } from ".";

export const rawQuery = async () => {
    const result = await prisma.$queryRaw`SELECT * FROM "posts" WHERE published = true`;
    console.log(result);
};
