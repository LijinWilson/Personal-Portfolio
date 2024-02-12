"use server";

import { getErrorMessage, validateString } from "@/lib/utilities";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (FormData: FormData) => {
    const senderEmail = FormData.get("sender Email");
    const message = FormData.get("sender message");

    // simple server side validation for message 
    if (!validateString(message, 5000)) {
        return{ 
            error: "Invalid message"
        }
    }

    // simple server side validation for Email
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender mail"
        }
    }

    let data;
    try {
        await resend.emails.send({
            from: "Contact form <onboarding@resend.dev>",
            to: "5035@mbcpeermade.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string})
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    }
  };