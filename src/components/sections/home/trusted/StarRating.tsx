import { Star } from "lucide-react";

export const StarRating = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star
        width={12}
        height={12}
        key={i}
        fill="var(--primary)"
        stroke="var(--primary)"
      />
    ))}
  </div>
);
