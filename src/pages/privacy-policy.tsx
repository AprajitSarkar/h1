import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to our Privacy Policy page. Your privacy is critically
              important to us. This document outlines the types of personal
              information we collect and how we use it.
            </p>
            <h2 className="text-lg font-semibold">Information We Collect</h2>
            <p>
              We collect information directly from you when you use our
              services, such as your name, email address, and any other details
              you provide. Additionally, we may collect information
              automatically, such as your IP address, browser type, and usage
              data.
            </p>
            <h2 className="text-lg font-semibold">How We Use Your Information</h2>
            <p>
              The information we collect is used to provide, maintain, and
              improve our services. We may also use your information to
              communicate with you, such as sending updates or responding to
              inquiries.
            </p>
            <h2 className="text-lg font-semibold">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure.
            </p>
            <h2 className="text-lg font-semibold">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. If you have any questions or concerns about your
              privacy, please contact us.
            </p>
            <p>
              By using our services, you agree to the terms outlined in this
              Privacy Policy. We may update this policy from time to time, so
              please review it periodically.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
