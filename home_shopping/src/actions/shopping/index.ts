"use server";

import { addShoppingList, deleteShoppingList } from "@/lib/services";
import { ShoppingList } from "@/types/models/shopping";
import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

export async function createShoppingList(formData: FormData) {
  const rawData = {
    title: formData.get("title") as string,
    createdAt: new Date(),
  };

  await addShoppingList(rawData);
}

export async function removeItem(id: any) {
  await deleteShoppingList(id);
  revalidatePath("shopping/", "page");
}

export async function updateShoppingList(id: any, data: any) {}
