import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  if (process.env.DATABASE_URL) {
    let dbUrl = process.env.DATABASE_URL;
    if (dbUrl.includes(':6543') && !dbUrl.includes('pgbouncer=true')) {
      const separator = dbUrl.includes('?') ? '&' : '?';
      process.env.DATABASE_URL = `${dbUrl}${separator}pgbouncer=true`;
      console.log('Modified DATABASE_URL to include pgbouncer=true for Transaction Mode pooler');
    }
  }
  prisma = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
  }
  prisma = global.__db__;
  prisma.$connect();
}

export { prisma };
