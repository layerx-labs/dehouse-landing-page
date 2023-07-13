interface Avatar {
  url: string;
}

interface Testimonial {
  avatar?: Avatar;
  name: string;
  message: string;
  twitter?: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}