import { getShoppingLists } from "@/lib/services/shopping_list";
import ShowShoppingLists from "@/components/shopping/show_shopping_lists";
import dbConnect from "@/lib/db";
import Link from "next/link";

export default async function ListShoppingItems() {
  await dbConnect();
  const shoppingLists = await getShoppingLists();

  if (!shoppingLists?.length) {
    return (
      <div className="mt-4">
        <p>You currenty do not have any shopping list created.</p>
        <p className="mt-4">
          <Link
            className="btn btn-primary text-white rounded-lg"
            href={`shopping/add/`}
          >
            Create Shopping List
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      {shoppingLists && (
        <ShowShoppingLists lists={JSON.parse(JSON.stringify(shoppingLists))} />
      )}
    </>
  );
}
