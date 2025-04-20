import { PrismaClient } from "@prisma/client";
import { find } from "./find";
import { update } from "./update";
import { deleteData } from "./delete";
import { createData } from "./create";
import { relationalQueries } from "./relationslQuries";
import { loggingInPrisma } from "./logging";

export const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
    ],
});
prisma.$on("query", (e) => {
    console.log(e.query);
});

const main = async () => {
    // createData();
    // find();
    // update();
    // deleteData();
    // relationalQueries();
    loggingInPrisma();
};

main();
