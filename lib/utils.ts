import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isGmail(email: string) {
  return typeof email === 'string' && email.toLowerCase().endsWith('@gmail.com');
}
