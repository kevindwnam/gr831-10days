import type { Metadata } from "next";
import { reviews } from "@/data/reviews";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "합격 수기 | 26학년도 76명의 합격생 이야기",
  description:
    "GR831약술형논술연구소 2026학년도 합격생 76명의 실제 합격 수기. GR831 콘텐츠가 어떻게 합격에 도움이 되었는지 직접 들어보세요.",
};

export default function ReviewsPage() {
  return <ReviewsContent reviews={reviews} />;
}
