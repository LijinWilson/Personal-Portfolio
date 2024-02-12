import React from "react";
// react email import
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type contactFormEmailProp = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: contactFormEmailProp) {
  return (
    <Html>
      <Preview>New Message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the Contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The senders email is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
