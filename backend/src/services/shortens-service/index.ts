import shortenRepository from "@/repositories/shortens-repository";
import userRepository from "@/repositories/user-repository";
import { shortens } from "@prisma/client";
import { nanoid } from "../../utils/esm-modules";

async function postShort(url: string, userId?: number): Promise<shortens | null> {
  const shortenedUrl = nanoid(8);
  const cleansedUrl = url;
  const shortPosted = await shortenRepository.postShort(cleansedUrl, shortenedUrl, userId);
  if (!shortPosted) {
    throw new Error("Não foi possível postar sua URL");
  }
  return shortPosted;
}

async function getShowShort( shortUrl: string ): Promise<shortens | null> {
  const existingShort = await shortenRepository.findShow( shortUrl );
  if (!existingShort) {
    throw new Error("Este encurtamento não existe");
  }
  return existingShort;
}

async function getRanking(): Promise<shortens[]> {
  const Rank = await shortenRepository.getRank( );
  if (!Rank) {
    throw new Error("Sem ranking ativo");
  }
  return Rank;
}

async function getMyShort( id: number ): Promise<shortens[]> {
  const existingUser = await userRepository.find(id);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  const myshortens = await shortenRepository.getByUser( id );
  return myshortens;
}

async function putShort(shortId: number, url: string, userId: number): Promise<shortens> {
  const id = userId;
  const cleansedUrl = url;
  const existingUser = await userRepository.find(id);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  const updatedAddress = await shortenRepository.update( shortId, cleansedUrl );
  return updatedAddress;
}

async function shortDelete( shortId: number, userId: number): Promise<shortens | null> {
  const existingUser = await userRepository.find( userId );
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  const deletedAddress = await shortenRepository.deleteById( shortId );
  return deletedAddress;
}

const shortensService = {
  shortDelete,
  putShort, 
  getMyShort, 
  getShowShort, 
  getRanking, 
  postShort,
};

export default shortensService;
