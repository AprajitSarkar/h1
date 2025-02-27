import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Terms and Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to our Terms and Conditions page. By using our services,
              you agree to the terms outlined below. Please read them carefully
              before proceeding.
            </p>
            <h2 className="text-lg font-semibold">Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by
              these Terms and Conditions and our Privacy Policy. If you do not
              agree, please do not use our services.
            </p>
            <h2 className="text-lg font-semibold">Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You must not use our services to
              engage in any illegal or harmful activities.
            </p>
            <h2 className="text-lg font-semibold">Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account. Notify us immediately of any unauthorized use.
            </p>
            <h2 className="text-lg font-semibold">Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our
              platform are owned by us or our licensors. You may not use them
              without prior written consent.
            </p>
            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <p>
              We are not liable for any damages arising from your use of our
              services. This includes direct, indirect, incidental, or
              consequential damages.
            </p>
            <h2 className="text-lg font-semibold">Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any
              time. Continued use of our services after changes indicates your
              acceptance of the updated terms.
            </p>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at support@example.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default TermsAndConditions;
