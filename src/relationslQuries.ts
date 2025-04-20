import { prisma } from ".";

export const relationalQueries = async () => {
    // const result = await prisma.user
    //     .findUnique({
    //         where: {
    //             id: 1,
    //         },
    //     })
    //     .Post();

    // const result = await prisma.user
    //     .findUnique({
    //         where: {
    //             id: 1,
    //         },
    //     })
    //     .Profile();

    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1,
    //     },
    //     include: {
    //         Post: true,
    //     },
    // });

    // const result = await prisma.user.findMany({
    //     include: {
    //         Post: {
    //             where: {
    //                 published: true,
    //             },
    //         },
    //     },
    // });

    // const result = await prisma.post.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 title: { contains: "2" },
    //                 published: true,
    //             },
    //         ],
    //     },
    // });

    // const result = await prisma.post.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 title: { contains: "3" },
    //             },
    //             {
    //                 published: true,
    //             },
    //         ],
    //     },
    // });

    // const result = await prisma.post.findMany({
    //     where: {
    //         NOT: [
    //             {
    //                 title: { contains: "3" },
    //             },
    //         ],
    //     },
    // });

    // const result = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             startsWith: "email1",
    //         },
    //     },
    // });

    // const result = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             endsWith: "email1",
    //         },
    //     },
    // });

    // const result = await prisma.user.findMany({
    //     where: {
    //         email: {
    //             equals: "email1@gmail.com",
    //         },
    //     },
    // });

    // const userArray = ["user1"];
    // const result = await prisma.user.findMany({
    //     where: {
    //         username: {
    //             in: userArray,
    //         },
    //     },
    // });

    const result = await prisma.user.findMany({
        where: {
            id: 1,
        },
        include: {
            Post: {
                include: {
                    PostCategory: {
                        include: {
                            category: true,
                        },
                    },
                },
            },
        },
    });

    console.dir(result, { depth: Infinity });
};
