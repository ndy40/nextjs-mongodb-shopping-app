import { Schema, Types, models, model, Model } from 'mongoose';
import { Item, ItemSchema } from './items';

interface ShoppingList {
    name: string;
    items?: Types.DocumentArray<Item>;
}

type ShoppingListType = Model<ShoppingList>;
const shoppingListSchema = new Schema<ShoppingList, ShoppingListType>({
    name: String,
    items: [ItemSchema]
})

const ShoppingListDoc = models.ShoppingList || model<ShoppingList, ShoppingListType>('ShoppingList', shoppingListSchema)

export default ShoppingListDoc


