import { createShoppingList } from "@/actions/shopping";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  async function handleSubmit(form: FormData) {
    "use server";
    await createShoppingList(form);
    redirect("/shopping/");
  }

  return (
    <div className="mt-7 w-auto">
      <form action={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="title"
                  placeholder="Shopping list a title."
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={"mt-2"}>
          <button type="submit" className={"border border-blue-700"}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
