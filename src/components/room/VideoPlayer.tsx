import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  url: string;
  onPlay?: () => void;
  onPause?: () => void;
  onSeek?: (time: number) => void;
  onVolumeChange?: (volume: number) => void;
  isPlaying?: boolean;
  initialVolume?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  onPlay,
  onPause,
  onSeek,
  onVolumeChange,
  isPlaying = false,
  initialVolume = 0.8,
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(isPlaying);
  const [volume, setVolume] = useState(initialVolume);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
    if (playing) {
      onPause?.();
    } else {
      onPlay?.();
    }
  };

  const handleSeek = (value: number[]) => {
    const time = (value[0] / 100) * duration;
    playerRef.current?.seekTo(time);
    setPlayed(value[0] / 100);
    onSeek?.(time);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    onVolumeChange?.(newVolume);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full bg-card rounded-lg shadow-sm p-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          onProgress={({ played }) => setPlayed(played)}
          onDuration={(duration) => setDuration(duration)}
          width="100%"
          height="100%"
          controls={false}
        />
      </div>
      <div className="mt-4 space-y-4">
        {/* Playback Controls */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePlayPause}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                />
              </svg>
            )}
          </Button>
          <div className="text-sm text-muted-foreground">
            {formatTime(played * duration)} / {formatTime(duration)}
          </div>
        </div>

        {/* Seek Slider */}
        <Slider
          value={[played * 100]}
          onValueChange={handleSeek}
          className="w-full"
        />

        {/* Volume Control */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-muted-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 5.25l-5.5 5.5H3.75v2.5h2l5.5 5.5v-13.5z"
            />
          </svg>
          <Slider
            value={[volume * 100]}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
