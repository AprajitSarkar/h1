import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Landing = () => {
  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-lg mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome to Watch Together</CardTitle>
            <CardDescription className="text-muted-foreground">
              Experience synchronized video watching with friends and family, no matter where you are.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={() => (window.location.href = "/auth")}
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Landing;
