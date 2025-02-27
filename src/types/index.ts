/**
 * TypeScript type definitions for the Watch Together application.
 */

// User-related types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Room-related types
export interface Room {
  id: string;
  name: string;
  hostId: string;
  participants: User[];
  createdAt: string;
  updatedAt: string;
}

// Video-related types
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
  };
  channelTitle: string;
  publishTime: string;
  duration?: string; // Optional, fetched from detailed video info
  viewCount?: number; // Optional, fetched from detailed video info
  likeCount?: number; // Optional, fetched from detailed video info
  commentCount?: number; // Optional, fetched from detailed video info
}

// YouTube API response types
export interface YouTubeSearchResult {
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

export interface YouTubeVideoDetails {
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

// Authentication-related types
export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Supabase-related types
export interface SupabaseResponse<T> {
  data: T | null;
  error: string | null;
}

// General API response type
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error?: string;
}
