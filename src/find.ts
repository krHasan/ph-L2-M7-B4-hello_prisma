import { prisma } from ".";

export const find = async () => {
    //offset pagination
    const offsetPagination = await prisma.post.findMany({
        skip: 2,
        take: 4,
        orderBy: {
            title: "desc",
        },
    });
    // console.log(offsetPagination);

    //cursor based pagination
    const cursorPagination = await prisma.post.findMany({
        skip: 1,
        take: 3,
        cursor: {
            id: 5,
        },
        orderBy: {
            id: "asc",
        },
    });
    console.log(cursorPagination);

    // const findFirst = await prisma.post.findFirst({
    //     where: {
    //         published: false,
    //     },
    //     orderBy: {
    //         id: "desc",
    //     },
    //     select: {
    //         title: true,
    //     },
    // });
    // console.log({ findFirst });

    // const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 999,
    //     },
    // });
    // console.log({ findFirst });

    // const findUnique = await prisma.post.findUnique({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(findUnique);
};
