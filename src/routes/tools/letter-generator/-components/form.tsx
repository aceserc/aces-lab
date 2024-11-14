import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

import InputWrapper from "@/components/reusable/input-wrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import useDebounceCallback from "@/hooks/use-debounce-callback";
import { LetterGeneratorFormSchema } from "@/zod/letter-generator";

import { DEFAULT_LETTER_CONTENT, useLetterContext } from "./letter-context";

const Form = () => {
  const { register, watch, formState: { errors } } = useForm<LetterGeneratorFormSchema>({
    resolver: zodResolver(LetterGeneratorFormSchema),
    defaultValues: DEFAULT_LETTER_CONTENT,
  });

  const { setLetterContent } = useLetterContext();

  const debouncedSetLetterContent = useDebounceCallback(setLetterContent);

  const val = watch();

  useEffect(() => {
    debouncedSetLetterContent(val);
  }, [val]);

  return (
    <form className="flex flex-col gap-5">
      <h3 className="text-xl font-medium border-b mb-5">
        Letter Content
      </h3>
      <InputWrapper
        label="Reference No:"
        htmlFor="refNo"
        error={errors.refNo}
      >
        <Input
          type="number"
          {...register("refNo")}
        />
      </InputWrapper>

      <Separator />

      <InputWrapper
        label="Recipients Info:"
        htmlFor="content.recipientsInfo"
        error={errors.content?.recipientsInfo}
      >
        <Textarea
          {...register("content.recipientsInfo")}
        />
      </InputWrapper>
      <InputWrapper
        label="Subject:"
        htmlFor="content.subject"
        error={errors.content?.subject}
      >
        <Input
          {...register("content.subject")}
        />
      </InputWrapper>
      <InputWrapper
        label="Greetings:"
        htmlFor="content.greetings"
        error={errors.content?.greetings}
      >
        <Input
          {...register("content.greetings")}
        />
      </InputWrapper>
      <InputWrapper
        label="body:"
        htmlFor="content.body"
        error={errors.content?.body}
      >
        <Textarea
          {...register("content.body")}
        />
      </InputWrapper>

      <Separator />
      <InputWrapper
        label="Signature Url:"
        htmlFor="signatureBlock.signatureUrl"
        error={errors.signatureBlock?.signatureUrl}
      >
        <Input
          {...register("signatureBlock.signatureUrl")}
        />
      </InputWrapper>
      <InputWrapper
        label="Name:"
        htmlFor="signatureBlock.name"
        error={errors.signatureBlock?.name}
      >
        <Input
          {...register("signatureBlock.name")}
        />
      </InputWrapper>
      <InputWrapper
        label="Position:"
        htmlFor="signatureBlock.position"
        error={errors.signatureBlock?.position}
      >
        <Input
          {...register("signatureBlock.position")}
        />
      </InputWrapper>
    </form>
  );
};
export default Form;
