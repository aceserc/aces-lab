import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { InfoIcon, Download } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { content } from "@/types";
import NepaliForm from "@/components/reuseable/nepali-form";
import { A4LetterTemplate } from "@/components/a4-letter-template";
import { useForm } from "react-hook-form";
import * as z from "zod";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  refNo: z.string().optional(),
  date: z.coerce.date(),
  recipientTitle: z.string().min(1, "Recipient title is required"),
  recipientAddress: z.string().min(1, "Recipient address is required"),
  subject: z.string().min(1, "Subject is required"),
  content: z.string().min(1, "Content is required"),
  signatureTitle: z.string().min(1, "Signature title is required"),
  signerName: z.string().min(1, "Signer name is required"),
  signerPosition: z.string().min(1, "Signer position is required"),
  signature: z.string().url().optional()
});

export type FormData = z.infer<typeof formSchema>;

export default function CreateLetter() {
  const { control, watch } = useForm<FormData>({
    defaultValues: {
      refNo: "",
      date: new Date(),
      recipientTitle: "",
      recipientAddress: "",
      subject: "",
      content: "",
      signatureTitle: "",
      signerName: "",
      signerPosition: "",
      signature: ""
    },
  });

  const [letterData, setLetterData] = useState<content>({
    refNo: "",
    date: new Date(),
    recipientTitle: "",
    recipientAddress: "",
    subject: "",
    content: "",
    signatureTitle: "",
    signerName: "",
    signerPosition: "",
    signature: ""
  });

  const watchedValues = watch();

  useEffect(() => {
    setLetterData(watchedValues);
  }, [watchedValues]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="w-full lg:w-1/2 p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Letter Generator</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <InfoIcon className="h-5 w-5" />
                    <span className="sr-only">Info</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Fill out this form to generate a letter in Nepali format.</p>
                  <p>The generated letter will appear on the right side.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <form>
            <NepaliForm control={control} />
            <Button type="submit" className="mt-4 w-full">Generate Letter</Button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 overflow-y-auto">
          <div className="sticky top-0 z-10 bg-gray-50 pb-4 mb-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Preview</h3>
            <Button onClick={() => window.print()} className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
          <A4LetterTemplate {...letterData} />
        </div>
      </div>
    </div>
  );
}