import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // Base path for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/architex-ai' : '';
  // Ensure path starts with / if not present
  const standardizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${standardizedPath}`;
}
