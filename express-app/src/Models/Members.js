import { Schema, model } from "mongoose";
const memberSchema = new Schema(
    {

        id: {
            required: true,
            type: String,
            unique: true,
        },
        name: {
            required: true,
            type: String,
        },
        age: {
            required: true,
            type: Number
        },
        status: {
            type: Boolean
        }
    }
);
const Members = model("members", memberSchema);
export default Members;