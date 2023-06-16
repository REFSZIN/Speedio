import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import faker from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const shortens = await prisma.shortens.findMany();
  if (shortens.length === 0) {
    await prisma.shortens.createMany({
      data: [
        {
          userId: 1,
          shortUrl: "Uakgb_Jc",
          url: "https://www.linkedin.com/in/yanassis/"
        },
        {
          userId: 1,
          shortUrl: "Uakgb_J5",
          url: "https://www.linkedin.com/in/yanassis/",
          views: 10,
        }
      ]
    });
  }
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    const hashedPassword = await bcrypt.hash(faker.internet.password(6), 10);
    await prisma.user.create({
      data: 
        {
          name: "Administrator",
          email: "test@example.com",
          password: hashedPassword
        }
    });
  }
}
main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
