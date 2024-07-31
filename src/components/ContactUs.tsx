import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "./Container";
import Lottie from "lottie-react";
import contact from "./../assets/lottieImage/contact.json";
import { CONTACT_FORM_SCHEMA } from "@/constants/contactFormSchema.constant";
import { useToast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const form = useForm<z.infer<typeof CONTACT_FORM_SCHEMA>>({
    resolver: zodResolver(CONTACT_FORM_SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = () => {
    form.reset();
    toast({
      title: "Form Submitted",
      description:
        "Thank you for contacting us! We will get back to you shortly.",
    });
  };
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Contact Us
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-72 mx-auto sm:w-1/2">
            <Lottie animationData={contact} loop={false} />
          </div>
          <div className="sm:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactUs;
