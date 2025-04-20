import { prisma } from ".";

export const update = async () => {
    // const singleUpdate = await prisma.post.update({
    //     data: {
    //         title: "Updated content",
    //         authorName: "Khandoker Rakib Hasan",
    //         published: true,
    //     },
    //     where: {
    //         id: 6,
    //     },
    // });
    // console.log(singleUpdate);
    // const manyUpdate = await prisma.post.updateMany({
    //     data: {
    //         title: "Updated content",
    //         authorName: "Khandoker Rakib Hasan",
    //         content: "Published content ... ... ...",
    //     },
    //     where: {
    //         published: true,
    //     },
    // });
    // console.log(manyUpdate);
    // const upsertData = await prisma.post.upsert({
    //     update: {
    //         title: "Upsert updated content",
    //     },
    //     create: {
    //         title: "Upsert created content",
    //         authorName: "Khandoker Rakib Hasan",
    //         content: "content ... ... ...",
    //     },
    //     where: {
    //         id: 7,
    //     },
    // });
    // console.log(upsertData);
};
