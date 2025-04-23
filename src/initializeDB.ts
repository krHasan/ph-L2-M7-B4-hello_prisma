import { prisma } from ".";

export const initializeDB = async () => {
    // Insert basic users
    await prisma.user.createMany({
        data: [
            {
                username: "johndoe",
                email: "john@example.com",
                age: 28,
                role: "user",
            },
            {
                username: "janedoe",
                email: "jane@example.com",
                age: 32,
                role: "admin",
            },
            {
                username: "bobsmith",
                email: "bob@example.com",
                age: 45,
                role: "user",
            },
            {
                username: "alicegreen",
                email: "alice@example.com",
                age: 22,
                role: "user",
            },
            {
                username: "mikejohnson",
                email: "mike@example.com",
                age: 35,
                role: "user",
            },
            {
                username: "sarahk",
                email: "sarah@example.com",
                age: 29,
                role: "admin",
            },
            {
                username: "davidm",
                email: "david@example.com",
                age: 40,
                role: "user",
            },
        ],
    });

    // Insert profiles for users
    await prisma.profile.createMany({
        data: [
            {
                bio: "Software developer and tech enthusiast",
                userId: 1,
            },
            {
                bio: "Blogger and content creator",
                userId: 2,
            },
            {
                bio: "Digital marketing specialist",
                userId: 3,
            },
            {
                bio: "Student and aspiring writer",
                userId: 4,
            },
        ],
    });

    // Insert categories
    await prisma.category.createMany({
        data: [
            { name: "Technology" },
            { name: "Travel" },
            { name: "Food" },
            { name: "Lifestyle" },
            { name: "Business" },
        ],
    });

    // Insert posts
    await prisma.post.createMany({
        data: [
            {
                title: "Getting Started with Prisma",
                content: "Prisma is a modern database toolkit...",
                published: true,
                authorId: 1,
            },
            {
                title: "My Travel Experience in Japan",
                content: "Visiting Japan was an amazing experience...",
                published: true,
                authorId: 2,
            },
            {
                title: "Best Coffee Shops in New York",
                content: "After visiting dozens of coffee shops...",
                published: false,
                authorId: 3,
            },
            {
                title: "How to Improve Your Productivity",
                content: "Productivity is not about working more...",
                published: true,
                authorId: 1,
            },
            {
                title: "The Future of AI in Business",
                content: "Artificial intelligence is transforming...",
                published: true,
                authorId: 4,
            },
            {
                title: "React Hooks Explained",
                content: "React Hooks provide a way to use state...",
                published: true,
                authorId: 1,
            },
            {
                title: "Sustainable Living Tips",
                content: "Reducing your environmental impact...",
                published: true,
                authorId: 2,
            },
            {
                title: "Remote Work Best Practices",
                content: "Working remotely requires discipline...",
                published: false,
                authorId: 5,
            },
        ],
    });

    // Connect posts to categories
    await prisma.postCategory.createMany({
        data: [
            { postId: 1, categoryId: 1 }, // Prisma post -> Technology
            { postId: 1, categoryId: 5 }, // Prisma post -> Business
            { postId: 2, categoryId: 2 }, // Japan post -> Travel
            { postId: 3, categoryId: 3 }, // Coffee post -> Food
            { postId: 3, categoryId: 4 }, // Coffee post -> Lifestyle
            { postId: 4, categoryId: 4 }, // Productivity post -> Lifestyle
            { postId: 4, categoryId: 5 }, // Productivity post -> Business
            { postId: 5, categoryId: 1 }, // AI post -> Technology
            { postId: 5, categoryId: 5 }, // AI post -> Business
            { postId: 6, categoryId: 1 }, // React post -> Technology
            { postId: 7, categoryId: 4 }, // Sustainable living -> Lifestyle
            { postId: 8, categoryId: 5 }, // Remote work -> Business
        ],
    });
};
