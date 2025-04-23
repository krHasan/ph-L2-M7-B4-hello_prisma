import { PrismaClient } from "@prisma/client";
import { find } from "./find";
import { update } from "./update";
import { deleteData } from "./delete";
import { createData } from "./create";
import { relationalQueries } from "./relationslQuries";
import { loggingInPrisma } from "./logging";
import { initializeDB } from "./initializeDB";
import { aggregate } from "./aggregate";
import { transaction } from "./transaction";
import { rawQuery } from "./rawQuery";

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
    // initializeDB();
    // createData();
    // find();
    // update();
    // deleteData();
    // relationalQueries();
    // loggingInPrisma();
    // aggregate();
    // transaction();
    rawQuery();
};

main();
