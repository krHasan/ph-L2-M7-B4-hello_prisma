import { prisma } from ".";

export const transaction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: "rakib2",
            email: "john2@example.com",
            age: 28,
            role: "user",
        },
    });

    const updateUser = prisma.user.update({
        where: {
            id: 100,
        },
        data: {
            age: 49,
        },
    });

    // const [userData, updateData] = await prisma.$transaction([createUser, updateUser]);

    //-------------------------
    const result = await prisma.$transaction(async (transactionClient) => {
        const getAllPost = await transactionClient.post.findMany({
            where: {
                published: true,
            },
        });
        const countUser = await transactionClient.user.count();

        return {
            getAllPost,
            countUser,
        };
    });
    console.log(result);
};
