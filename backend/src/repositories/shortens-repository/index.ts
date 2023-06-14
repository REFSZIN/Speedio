import { prisma } from "@/config";
import { shortens } from "@prisma/client";
import { Console } from "console";

const shortenRepository = {
  postShort,
  findShow,
  getByUser,
  getRank,
  deleteById,
  update,
};

async function postShort( cleansedUrl: string, shortenedUrl: string, userId?: number ): Promise<shortens | null> {
  const shorted = await prisma.shortens.create({
    data: { url: cleansedUrl, userId: userId, shortUrl: shortenedUrl },
  });
  return shorted || null;
}

async function findShow(shortUrl: string): Promise<shortens> {
  const short = await prisma.shortens.findFirst({
    where: { shortUrl },
  });
  if (short) {
    await prisma.shortens.update({
      where: { id: short.id },
      data: { 
        views: short.views + 1 
      },
    });
  }
  return short;
}

async function getRank(): Promise<shortens[]> {
  const Rank = await prisma.shortens.findMany({
    orderBy: {
      views: "desc",
    },
    take: 100,
  });
  return Rank;
}

async function deleteById( shortId: number ): Promise<shortens | null> {
  const deletedshort = await prisma.shortens.delete({
    where: { id: shortId },
  });
  return deletedshort || null;
}

async function getByUser( id: number ): Promise<shortens[] | null> {
  const myshortens = await prisma.shortens.findMany({
    where: { userId: id }
  });
  return myshortens;
}

async function update(shortId: number, cleansedUrl: string ): Promise<shortens> {
  const updatedshort = await prisma.shortens.update({
    where: { id: shortId },
    data: { 
      url: cleansedUrl
    },
  });
  return updatedshort;
}

export default shortenRepository;
