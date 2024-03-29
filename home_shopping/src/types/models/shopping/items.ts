import { Types, Schema } from "mongoose";

export interface Item {
  name: string;
  quantity: number;
  price?: number;
}

export const ItemSchema = new Schema<Item>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: false },
});
