import ShoppingListDoc, {
  ShoppingList,
} from "@/types/models/shopping/shopping_lists";
import { cache } from "react";

export const getShoppingLists = async () => {
  return await ShoppingListDoc.find();
};

export async function deleteShoppingList(id: string) {
  await ShoppingListDoc.deleteOne({ _id: id });
}

export async function addShoppingList(list: ShoppingList) {
  return ShoppingListDoc.create(list);
}
