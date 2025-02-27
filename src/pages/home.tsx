import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    // Logic to create a new room
    console.log("Create Room");
    navigate("/room/new"); // Redirect to a new room creation page or room
  };

  const handleJoinRoom = () => {
    // Logic to join an existing room
    console.log("Join Room");
    navigate("/room/join"); // Redirect to a room join page
  };

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Create a new room or join an existing one to start watching
              together.
            </p>
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={handleCreateRoom}
            >
              Create Room
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleJoinRoom}
            >
              Join Room
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Home;
