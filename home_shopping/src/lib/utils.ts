import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocale() {
  "use client";
  return "en";
}

export function formatDateString(dateStr: string | Date) {
  let currDate = dateStr as Date;

  if (typeof dateStr === "string") {
    currDate = new Date(dateStr);
  }
  return currDate.toLocaleDateString(getLocale(), { timeZone: "UTC" });
}
