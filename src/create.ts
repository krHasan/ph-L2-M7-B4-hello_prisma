import { prisma } from ".";

export const createData = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "Test Title 6",
    //         content: "Test content is tent to be long text ...",
    //         authorName: "Rakib Hasan",
    //     },
    // });
    // console.log(result);
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "email2@gmail.com",
    //         role: UserRole.user,
    //     },
    // });
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "ksdjflksdjf",
    //         userId: 1,
    //     },
    // });
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "Category E",
    //     },
    // });

    const createPost = await prisma.post.create({
        data: {
            title: "title 3",
            content: "content 3",
            authorId: 1,
            PostCategory: {
                // create: {
                // category: {
                //     connect: {
                //         id: 1,
                //     },
                // },
                // },
                create: [
                    {
                        categoryId: 1,
                    },
                    { categoryId: 2 },
                    { categoryId: 3 },
                ],
            },
        },
    });
};
