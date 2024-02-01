"use client";
import { removeItem } from "@/actions/shopping";
import { ShoppingList } from "@/types/models/shopping";
import { ShoppingListCard } from ".";
import { redirect } from "next/navigation";

type Props = {
  lists: ShoppingList[];
};

export default function ShowShoppingLists({ lists }: Props) {
  async function handleDelete(id: any) {
    await removeItem(id);
  }

  return (
    <>
      {lists.map((list) => (
        <ShoppingListCard
          shoppingList={list}
          key={list.title}
          onDelete={async (id) => handleDelete(id)}
        />
      ))}
    </>
  );
}
