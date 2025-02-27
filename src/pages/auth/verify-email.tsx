import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const VerifyEmail = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleResendEmail = () => {
    console.log("Resend verification email");
    setEmailSent(true);
  };

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Verify Your Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              A verification email has been sent to your email address. Please
              check your inbox and click the verification link to activate your
              account.
            </p>
            <Button
              variant="default"
              className="w-full"
              onClick={handleResendEmail}
              disabled={emailSent}
            >
              {emailSent ? "Email Sent" : "Resend Email"}
            </Button>
            {emailSent && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                A new verification email has been sent. Please check your inbox.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default VerifyEmail;
