import { Schema, model } from "mongoose";
// memberSchema variable contains certificate details
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
        Grade: {
            required: true,
            type: String,
        },
        status: {
            type: Boolean
        }
    }
);
const Certificates = model("certificates", memberSchema);//give collection name in compass
export default Certificates;