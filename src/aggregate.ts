import { prisma } from ".";

export const aggregate = async () => {
    // const result = await prisma.user.count();

    // const result = await prisma.user.aggregate({
    //     _count: {
    //         age: true,
    //     },
    //     _max: {
    //         age: true,
    //     },
    //     _min: {
    //         age: true,
    //     },
    //     _sum: {
    //         age: true,
    //     },
    //     _avg: {
    //         age: true,
    //     },
    // });

    const result = await prisma.post.groupBy({
        by: ["published", "authorId"],
        _count: {
            title: true,
        },
        having: {
            authorId: {
                _sum: {
                    gt: 3,
                },
            },
        },
    });

    console.log(result);
};
