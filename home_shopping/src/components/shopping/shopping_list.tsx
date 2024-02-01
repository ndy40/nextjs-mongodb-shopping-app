"use client";
import { ShoppingList } from "@/types/models/shopping";
import TrashIcon from "../ui/trash";
import { formatDateString } from "@/lib/utils";
import Link from "next/link";

type Props = {
  shoppingList: ShoppingList;
  onDelete: (id: any) => void;
};

export function ShoppingListCard({ shoppingList, onDelete }: Props) {
  return (
    <>
      <div className="mb-4 p-2 w-96 shadow shadow-lg rounded rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-medium">
            <Link
              href={`/shopping/${shoppingList._id}/edit`}
              className="hover:text-gray-900"
            >
              {shoppingList.title}
            </Link>
          </h1>
          <div className="badge bg-slate-200">
            {shoppingList?.items?.length || 0}
          </div>
        </div>
        <div className="pt-1">
          <div className="flex justify-between pt-2">
            <div className="text-sm text-gray-500">
              {shoppingList?.createdAt &&
                formatDateString(shoppingList?.createdAt)}
            </div>
            <div className="pr-1">
              <TrashIcon onClick={async () => onDelete(shoppingList._id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
