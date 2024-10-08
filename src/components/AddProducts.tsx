import Container from "./Container";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PRODUCT_SCHEMA } from "@/constants/product.constant";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { toast } from "@/components/ui/use-toast";
import { CATEGORIES } from "@/constants/category.constant";
import { TCategory } from "@/types";

const AddProducts = () => {
  const form = useForm<z.infer<typeof PRODUCT_SCHEMA>>({
    resolver: zodResolver(PRODUCT_SCHEMA),
    defaultValues: {
      name: "",
      category: "",
      brand: "",
      price: 1,
      image: "",
      description: "",
      quantity: 0,
      rating: 0,
    },
  });
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const onSubmit = async (data: z.infer<typeof PRODUCT_SCHEMA>) => {
    try {
      const result = await createProduct(data).unwrap();
      if (result?.success) {
        toast({
          title: "Product Added Successfully",
          description: "Check your product list to see the new item",
        });

        form.reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast({
        title: error?.data?.message || "An error occured",
      });
    }
  };

  return (
    <div className="py-6 sm:py-8 md:py-10">
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          Add Products
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:w-2/3 space-y-6 mx-auto"
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
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CATEGORIES.map((category: TCategory) => (
                          <SelectItem key={category.name} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Add Product</Button>
            )}
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default AddProducts;
