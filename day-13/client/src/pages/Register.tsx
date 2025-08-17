import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type registerSchemaType } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {Loader2} from "lucide-react"

const Register = () => {
  const {register, isLoading, isAuth, isCheckingAuth} = useAuth();
  const navigate = useNavigate()

  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(value: registerSchemaType) {
    try {
     await register(value);
      if(isAuth){
        navigate("/");
      }
    } catch (error) {
      console.error("Signup failed", error);
    }
  }

  if(isAuth){
    navigate("/")
  }

if(isCheckingAuth){
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <Loader2 className="animate-spin" />
    </div>
  )
}

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <p className="text-sm text-muted-foreground">
            Sign up to get started with your account
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="abc@example.com" className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="••••••••"
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full rounded-xl text-base font-medium shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                    <>
                    <Loader2 className="animate-spin mr-2" size={8} />
                    Signing up...
                    </>
                ) : "Sign Up"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
