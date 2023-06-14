import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string, select?: Prisma.userSelect) {
  const params: Prisma.userFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}
async function find(id: number) {
  const params: Prisma.userFindUniqueArgs = {
    where: {
      id,
    },
  };
  return prisma.user.findUnique(params);
}

async function create(data: Prisma.userUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
  find
};

export default userRepository;
