import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RxReload } from "react-icons/rx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signup } from "@/api/auth";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
});
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const data = await signup({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      });
      setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("error in signin");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-row ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[400px] p-5 border-2 border-slate-500 rounded-lg"
          >
            <div className="flex flex-col">
              <FormLabel className="text-xl font-bold">Signup</FormLabel>
              <FormLabel className="text-sm text-slate-500">
                with Pigeon
              </FormLabel>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        required
                        type="text"
                        placeholder="Tony"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        required
                        type="text"
                        placeholder="Stark"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="email"
                      placeholder="tonystark@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passord</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="password"
                      placeholder="Jarvis"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isLoading ? (
              <Button disabled className="w-full max-w-[400px]">
                <RxReload className="mr-2 h-4 w-4 animate-spin" />
                Signin in...
              </Button>
            ) : (
              <Button className="w-full max-w-[400px]" type="submit">
                Submit
              </Button>
            )}
          </form>
        </Form>
        <img
          src="../../public/signin.svg"
          className="hidden md:block max-w-[500px] "
        />
      </div>
    </div>
  );
};

export default Signup;
