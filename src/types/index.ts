export type letterContent = {
  refNo?: string
  date?: string
  recipientTitle?: string
  recipientAddress?: string
  subject?: string
  content?: string
  signatureTitle?: string
  signerName?: string
  signerPosition?: string
}

export type content = {
  refNo?: string;
  date?: Date;
  recipientTitle: string;
  recipientAddress: string;
  subject: string;
  content: string;
  signatureTitle: string;
  signerName: string;
  signerPosition: string;
  signature?: string;
};