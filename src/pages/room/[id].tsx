import { VideoPlayer } from "@/components/room/VideoPlayer";
import { Chat } from "@/components/room/Chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RoomPage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="space-y-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Watch Together Room
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <VideoPlayer />
            </div>
            <div>
              <Chat />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default RoomPage;
