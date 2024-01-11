import {Types, Schema} from 'mongoose'

export interface Item {
    _id: Types.ObjectId;
    name: string;
    quantity: number;
    price?: number;
}

export const ItemSchema = new Schema<Item>({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: {type: Number, required: false}
})
