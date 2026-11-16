import { customAlphabet, nanoid } from "nanoid/async";

const orderId = customAlphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ", 12);

export async function newUserId(): Promise<string> {
  return `usr_${await nanoid()}`;
}

export async function newOrderId(): Promise<string> {
  return `ord_${await orderId()}`;
}
