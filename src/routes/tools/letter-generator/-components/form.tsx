import { zodResolver } from "@hookform/resolvers/zod";
import { pdf } from "@react-pdf/renderer";
import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import InputWrapper from "@/components/reusable/input-wrapper";
import SelectImage from "@/components/reusable/select-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import useDebounceCallback from "@/hooks/use-debounce-callback";
import { LetterGeneratorFormSchema } from "@/zod/letter-generator";

import { PDF } from "./a4-letter";
import { DEFAULT_LETTER_CONTENT, useLetterContext } from "./letter-context";

const Form = () => {
  const [isSelectImageOpen, setIsSelectImageOpen] = useState(false);
  const { register, watch, formState: { errors }, setValue, handleSubmit } = useForm<LetterGeneratorFormSchema>({
    resolver: zodResolver(LetterGeneratorFormSchema),
    defaultValues: DEFAULT_LETTER_CONTENT,
  });

  const { setLetterContent, letterContent } = useLetterContext();
  const debouncedSetLetterContent = useDebounceCallback(setLetterContent);

  const val = watch();

  useEffect(() => {
    debouncedSetLetterContent(val);
  }, [val]);

  const handleDownload = async () => {
    const blob = await pdf(<PDF letterContent={letterContent} />).toBlob();
    const url = URL.createObjectURL(blob);

    // Create a link and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${val.refNo}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <form
      onSubmit={handleSubmit(handleDownload)}
      className="flex flex-col gap-5 col-span-2 pb-16"
    >
      <h3 className="text-xl font-medium border-b mb-5">
        Letter Content
      </h3>
      <SelectImage
        isOpen={isSelectImageOpen}
        onClose={() => setIsSelectImageOpen(false)}
        onSelect={(url) => {
          if (typeof url === "string") {
            setValue("signatureBlock.signatureUrl", url);
          }
          else {
            // convert the file to object url
            const fileUrl = URL.createObjectURL(url);
            setValue("signatureBlock.signatureUrl", fileUrl);
          }
        }}
      />
      <InputWrapper
        label="Reference No:"
        htmlFor="refNo"
        error={errors.refNo?.message}
      >
        <Input
          {...register("refNo")}
        />
      </InputWrapper>

      <Separator />

      <InputWrapper
        label="Date:"
        htmlFor="content.date"
        error={errors.content?.date?.message}
      >
        <Input
          {...register("content.date")}
        />
      </InputWrapper>
      <InputWrapper
        label="Recipients Info:"
        htmlFor="content.recipientsInfo"
        error={errors.content?.recipientsInfo?.message}
      >
        <Textarea
          {...register("content.recipientsInfo")}
          className="h-24"
        />
      </InputWrapper>
      <InputWrapper
        label="Subject:"
        htmlFor="content.subject"
        error={errors.content?.subject?.message}
      >
        <Input
          {...register("content.subject")}
        />
      </InputWrapper>
      <InputWrapper
        label="Greetings:"
        htmlFor="content.greetings"
        error={errors.content?.greetings?.message}
      >
        <Input
          {...register("content.greetings")}
        />
      </InputWrapper>
      <InputWrapper
        label="body:"
        htmlFor="content.body"
        error={errors.content?.body?.message}
      >
        <Textarea
          {...register("content.body")}
          className="h-52"
        />
      </InputWrapper>

      <Separator />
      <InputWrapper
        label="Signature:"
        htmlFor="signatureBlock.signatureUrl"
        error={errors.signatureBlock?.signatureUrl?.message}
      >
        <Button
          variant="ghost"
          type="button"
          onClick={() => setIsSelectImageOpen(true)}
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm text-left font-normal inline-block"

        >
          {val.signatureBlock?.signatureUrl?.substring(0, 20)}
          {val?.signatureBlock?.signatureUrl?.length > 20 && "..."}
        </Button>
      </InputWrapper>
      <InputWrapper
        label="Salutation:"
        htmlFor="signatureBlock.salutation"
        error={errors.signatureBlock?.salutation?.message}
      >
        <Input
          {...register("signatureBlock.salutation")}
        />
      </InputWrapper>
      <InputWrapper
        label="Name:"
        htmlFor="signatureBlock.name"
        error={errors.signatureBlock?.name?.message}
      >
        <Input
          {...register("signatureBlock.name")}
        />
      </InputWrapper>
      <InputWrapper
        label="Position:"
        htmlFor="signatureBlock.position"
        error={errors.signatureBlock?.position?.message}
      >
        <Input
          {...register("signatureBlock.position")}
        />
      </InputWrapper>
      <Button className="fixed bottom-6 right-6 min-w-48">
        Download
        {" "}
        <DownloadIcon className="size-5 ml-2.5" />
      </Button>
    </form>
  );
};
export default Form;
