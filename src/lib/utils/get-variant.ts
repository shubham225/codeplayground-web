import { ChipVariant } from "@/components/custom-ui/chip";

export function getVariantForDifficulty(difficulty: string): ChipVariant {
  switch (difficulty.toUpperCase()) {
    case "EASY":
      return "green";
    case "MEDIUM":
      return "orange";
    case "HARD":
      return "red";
    default:
      return "default";
  }
}

export function getVariantForStatus(status: string): ChipVariant {
  switch (status.toUpperCase()) {
    case "PENDING":
      return "blue";
    case "OPEN":
      return "red";
    case "SOLVED":
      return "green";
    default:
      return "default";
  }
}