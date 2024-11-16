import { z } from "zod";

import { Email, NonEmptyString, URL } from "./common";

export const LetterGeneratorFormSchema = z.object({
  headers: z.object({
    heading: NonEmptyString("Heading"),
    subHeading: NonEmptyString("Subheading"),
    estd: NonEmptyString("Established"),
  }),
  refNo: NonEmptyString("Reference Number"),
  logos: z.object({
    leftLogo: URL("Left Logo"),
    rightLogo: URL("Right Logo"),
  }),
  content: z.object({
    date: NonEmptyString("Date"),
    recipientsInfo: NonEmptyString("Recipient's Information"),
    subject: NonEmptyString("Subject"),
    greetings: NonEmptyString("Greetings"),
    body: NonEmptyString("Body"),
  }),
  signatureBlock: z.object({
    signatureUrl: URL("Signature URL"),
    name: NonEmptyString("Name"),
    position: NonEmptyString("Position"),
    salutation: NonEmptyString("Salutation"),
  }),
  email: Email("Email"),
});

export type LetterGeneratorFormSchema = z.infer<typeof LetterGeneratorFormSchema>;
