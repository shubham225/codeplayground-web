import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const chipVariants = cva(
  "rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 ",
        green:
          "border border-green-200 text-green-600 bg-green-100 hover:bg-green-100/80 dark:border-green-400 dark:text-green-100 dark:bg-green-600",
        red:
          "border border-red-200 text-red-600 bg-red-100 hover:bg-red-100/80 dark:border-red-400 dark:text-red-100 dark:bg-red-600",
        blue:
          "border border-blue-200 text-blue-600 bg-blue-100 hover:bg-blue-100/80 dark:border-blue-400 dark:text-blue-100 dark:bg-blue-600",
        orange:
          "border border-orange-200 text-orange-600 bg-orange-100 hover:bg-orange-100/80 dark:border-orange-400 dark:text-orange-100 dark:bg-orange-600",
      },
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

export type ChipVariant = VariantProps<typeof chipVariants>["variant"];

export default function Chip({ className, variant, ...props }: ChipProps) {
  return (
    <Badge className={cn(chipVariants({ variant }), className)} {...props} />
  );
}
