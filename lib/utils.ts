import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeTime(dateString: string): string {
  if (!dateString) return "Never";

  const storedDate = new Date(dateString);
  const now = new Date();

  // Strip hours, minutes, seconds to accurately compare pure calendar days
  const storedZero = new Date(storedDate.getFullYear(), storedDate.getMonth(), storedDate.getDate());
  const nowZero = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Calculate the absolute difference in milliseconds and convert to days
  const diffTime = nowZero.getTime() - storedZero.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  
  const months = Math.floor(diffDays / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}