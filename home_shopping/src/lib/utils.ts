import ShoppingListDoc from "@/types/models/shopping/shopping_lists";
import { cache } from "react";


export const getShoppingLists = cache(async () => {
    const resp = await ShoppingListDoc.create({
        name: 'Shopping1'
    })

    const result = await ShoppingListDoc.find({})
    console.log('result', result)

})