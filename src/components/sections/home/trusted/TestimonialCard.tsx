"use client";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    testimonial: string;
    verified: boolean;
    avatar: string;
  };
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-[#0A1A0F] py-0 border-[#2A2A2A] rounded-2xl min-w-[280px] hover:border-[#3DFF87]/30 transition-colors duration-300">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <StarRating />
          {testimonial.verified && (
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 0L9.798 5.202H15.607L11.005 8.596L12.803 13.798L8 10.404L3.197 13.798L4.995 8.596L0.393 5.202H6.202L8 0Z"
                  fill="#3DFF87"
                />
              </svg>
              <span
                className="text-[#3DFF87] text-xs font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Verified
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mb-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#3DFF87]/20"
          />
          <h3
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {testimonial.name}
          </h3>
        </div>

        <p
          className="text-[#CCCCCC] text-sm leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {testimonial.testimonial}
        </p>
      </CardContent>
    </Card>
  );
};
