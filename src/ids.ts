import { customAlphabet, nanoid } from "nanoid";

const orderId = customAlphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ", 12);

export async function newUserId(): Promise<string> {
  return `usr_${nanoid()}`;
}

export async function newOrderId(): Promise<string> {
  return `ord_${orderId()}`;
}
