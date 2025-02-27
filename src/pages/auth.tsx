import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AuthFormInputs {
  email: string;
  password: string;
  confirmPassword?: string;
  acceptTerms: boolean;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const onSubmit: SubmitHandler<AuthFormInputs> = (data) => {
    if (isLogin) {
      console.log("Login data:", data);
    } else {
      console.log("Signup data:", data);
    }
  };

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              {isLogin ? "Login" : "Sign Up"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="acceptTerms"
                  {...register("acceptTerms", {
                    required: "You must accept the terms",
                  })}
                />
                <Label htmlFor="acceptTerms">
                  I accept the{" "}
                  <a
                    href="/terms"
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms and conditions
                  </a>
                </Label>
              </div>
              {errors.acceptTerms && (
                <p className="text-destructive text-sm mt-1">
                  {errors.acceptTerms.message}
                </p>
              )}
              <Button type="submit" className="w-full">
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
            <Separator className="my-6" />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log("Google OAuth")}
            >
              Continue with Google
            </Button>
            <p className="text-center text-sm mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="text-primary underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Auth;
