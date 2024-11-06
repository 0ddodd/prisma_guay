// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//     const existingPosts = await prisma.article.findMany({
//         select: { title: true },
//     });
    
//     const existingTitles = existingPosts.map(post => post.title);
//     console.log("Existing titles:", existingTitles);

//     const post1 = await prisma.article.upsert({
//         where: { title: 'Prisma adds support for ' },
//         update: {
//             body: "support for has been one of the most...",
//             description: "we are .... description",
//             published: false,
//         },
//         create: {
//             title: "prisma adds support for ", // Make sure this is unique or adjust it
//             body: "support for has been one of the most...",
//             description: "we are .... description",
//             published: false,
//         }
//     });

//     const post2 = await prisma.article.upsert({
//         where: { title: 'Prisma adds support for 2' },
//         update: {
//             body: "support for has been one of the most...1",
//             description: "we are .... description2",
//             published: true,
//         },
//         create: {
//             title: "prisma adds support for 2", // Ensure this title is also unique
//             body: "support for has been one of the most... 2",
//             description: "we are .... description 2",
//             published: true,
//         }
//     });

//     console.log({ post1, post2 });
// }

// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
