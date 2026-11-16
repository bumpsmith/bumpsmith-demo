import assert from "node:assert/strict";
import { test } from "node:test";
import { newOrderId, newUserId } from "./ids.js";

test("user ids have a prefix and 21 random characters", async () => {
  const id = await newUserId();
  assert.match(id, /^usr_[A-Za-z0-9_-]{21}$/);
});

test("order ids use the custom alphabet", async () => {
  const id = await newOrderId();
  assert.match(id, /^ord_[0-9A-HJKMNP-TV-Z]{12}$/);
});
