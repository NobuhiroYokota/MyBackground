import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const usersData: Prisma.UserCreateInput[] = [
  {
    username: 'yamada',
    email: 'example11@gmail.com',
    password: '0123',
  },
];

async function main() {
  for (const data of usersData) {
    await prisma.user.create({
      data,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
