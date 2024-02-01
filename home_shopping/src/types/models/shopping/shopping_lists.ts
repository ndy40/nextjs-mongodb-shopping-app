import { Schema, models, model, Model, Types } from "mongoose";
import { Item, ItemSchema } from "./items";

export interface ShoppingList {
  _id?: Types.ObjectId | string;
  title: string;
  createdAt?: Date;
  items?: Item[];
}

type ShoppingListType = Model<ShoppingList>;
const shoppingListSchema = new Schema<ShoppingList, ShoppingListType>({
  title: String,
  createdAt: { type: Date, default: Date.now },
  items: [ItemSchema],
});

const ShoppingListDoc =
  models.ShoppingList ||
  model<ShoppingList, ShoppingListType>("ShoppingList", shoppingListSchema);

export default ShoppingListDoc;
