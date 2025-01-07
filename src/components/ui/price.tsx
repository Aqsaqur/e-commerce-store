import { cn } from "@/lib/utils";

interface PriceProps {
  amount: number;
  className?: string;
}

export function Price({ amount, className }: PriceProps) {
  return (
    <span className={cn("font-semibold", className)}>
      ${amount.toFixed(2)}
    </span>
  );
}