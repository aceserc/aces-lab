

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Control, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormData } from "@/pages/Create";
import { toast } from "sonner";
import React from "react";

type NepaliFormProps = {

  control: Control<FormData>;

};

export default function NepaliForm({ control }: NepaliFormProps) {
  const form = useForm<FormData>();
  const onReset = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    form.reset();
    toast.success("Form reset successfully");
  };
  return (

    <Form {...form}>
      <form className="space-y-8 max-w-3xl mx-auto py-10">

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-6">

            <FormField
              control={control}
              name="refNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ref No</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""

                      type="text"
                      {...field} />
                  </FormControl>
                  <FormDescription>Refrence number of the letter</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">

            <FormField
              control={control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

        </div>

        <FormField
          control={control}
          name="recipientTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipient Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="श्रीमान "
                  type="text"
                  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="recipientAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipient Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="पुर्वान्चल क्याम्पस "
                  type="text"
                  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="विशिष्ट अतिथिको रूपमा आतिथ्यता जनाई पाउँ भन्ने बारे।"
                  defaultValue={"विशिष्ट अतिथिको रूपमा आतिथ्यता जनाई पाउँ भन्ने बारे।"}
                  type="text"
                  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="महोदय , उपर्युक्त सम्बन्धमा"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Content of the letter pad!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="signatureTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valediction</FormLabel>
              <FormControl>
                <Input
                  placeholder="भवदीय"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription>This valediction for your letter</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="signerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Signer Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="ACES"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription>Name of the letter signer.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="signerPosition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Signer Position</FormLabel>
              <FormControl>
                <Input
                  placeholder="President"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription>The position of the signer.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="signature"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Signer Position</FormLabel>
              <FormControl>
                <Input
                  placeholder="Link to your signature"
                  type="text"
                  {...field} />
              </FormControl>
              <FormDescription>Please Provide link to your signature</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={onReset} type="button">Reset Form</Button>
      </form>
    </Form >
  );
}
