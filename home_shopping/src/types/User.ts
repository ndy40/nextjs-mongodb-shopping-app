import mongoose from 'mongoose'

export interface User {
    firstName: string, 
    lastName: string,
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema<User>({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
        maxlength: [32, 'Maximum size of 32.'],
        minlength: [3, 'Minimum size of 3 letters']
    }
})