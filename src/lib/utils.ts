import { Code, Language } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function getCodeforLanguage(codesArray: Code[], lang: Language) {
  let indx = codesArray.findIndex((code) => code.language == lang);
  return indx === -1 ? "" : codesArray[indx].code;
}

export function setCodeforLanguage(
  codesArray: Code[],
  lang: Language,
  code: string
) {
  let indx = codesArray.findIndex((code) => code.language == lang);

  if (indx === -1) {
    const codeObj: Code = {
      id: "",
      language: lang,
      code: code,
    };
    codesArray.push(codeObj);
  } else {
    codesArray[indx].code = code;
  }
}

export function capitalizeFirstLetterOfEachWord(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatMilliseconds(ms: number): string {
  if (ms < 1000) {
    return `${ms} ms`;
  }

  const seconds = ms / 1000;
  if (seconds < 60) {
    return `${seconds.toFixed(1)} s`;
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${minutes.toFixed(1)} m`;
  }

  const hours = minutes / 60;
  return `${hours.toFixed(1)} h`;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${kb.toFixed(2)} KB`;
  }

  const mb = kb / 1024;
  if (mb < 1024) {
    return `${mb.toFixed(2)} MB`;
  }

  const gb = mb / 1024;
  return `${gb.toFixed(2)} GB`;
}
