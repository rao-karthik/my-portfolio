import { Schema, model } from "mongoose";
import IContactForm from "../types/contactForm.type";

const contactFormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const ContactForm = model<IContactForm>('contactForm', contactFormSchema);

export default ContactForm;