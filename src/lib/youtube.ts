import axios from "axios";

// Base URL for YouTube Data API
const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";

// Ensure the API key is defined
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
if (!YOUTUBE_API_KEY) {
  throw new Error("Missing YouTube API key in environment variables.");
}

interface VideoSearchResult {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
    publishTime: string;
  };
}

interface PopularVideoResult {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
    publishTime: string;
  };
}

interface VideoDetails {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
    publishTime: string;
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
}

// Function to search for videos by keyword
export const searchVideos = async (query: string, maxResults = 10): Promise<VideoSearchResult[]> => {
  try {
    const response = await axios.get(`${YOUTUBE_API_BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        maxResults,
        type: "video",
        key: YOUTUBE_API_KEY,
      },
    });

    return response.data.items as VideoSearchResult[];
  } catch (error) {
    console.error("Error searching videos:", error);
    throw new Error("Failed to fetch video search results.");
  }
};

// Function to fetch a list of popular videos
export const getPopularVideos = async (regionCode = "US", maxResults = 10): Promise<PopularVideoResult[]> => {
  try {
    const response = await axios.get(`${YOUTUBE_API_BASE_URL}/videos`, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode,
        maxResults,
        key: YOUTUBE_API_KEY,
      },
    });

    return response.data.items as PopularVideoResult[];
  } catch (error) {
    console.error("Error fetching popular videos:", error);
    throw new Error("Failed to fetch popular videos.");
  }
};

// Function to fetch video details by video ID
export const getVideoDetails = async (videoId: string): Promise<VideoDetails> => {
  try {
    const response = await axios.get(`${YOUTUBE_API_BASE_URL}/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        id: videoId,
        key: YOUTUBE_API_KEY,
      },
    });

    const [videoDetails] = response.data.items as VideoDetails[];
    return videoDetails;
  } catch (error) {
    console.error("Error fetching video details:", error);
    throw new Error("Failed to fetch video details.");
  }
};