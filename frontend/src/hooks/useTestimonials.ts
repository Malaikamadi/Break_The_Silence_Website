import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "@/services/testimonials";
import { defaultTestimonials } from "@/config/site";

export function useTestimonials() {
  const query = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000,
  });

  const testimonials =
    query.data && query.data.length > 0 ? query.data : defaultTestimonials;

  return { ...query, testimonials };
}
