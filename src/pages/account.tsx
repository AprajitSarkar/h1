import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface AccountFormInputs {
  name: string;
  email: string;
  avatarUrl: string;
}

const Account = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormInputs>({
    defaultValues: {
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
    },
  });

  const onSubmit: SubmitHandler<AccountFormInputs> = (data) => {
    setUser(data);
    toast({
      title: "Profile updated",
      description: "Your account information has been successfully updated.",
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Account Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex items-center justify-center">
                <Avatar className="h-20 w-20">
                  {user.avatarUrl ? (
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                  ) : (
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  )}
                </Avatar>
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="avatarUrl">Avatar URL</Label>
                <Input
                  id="avatarUrl"
                  type="url"
                  placeholder="Enter avatar URL"
                  {...register("avatarUrl")}
                />
              </div>
              <Button type="submit" className="w-full">
                Update Profile
              </Button>
            </form>
            <div className="mt-6">
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Account;
