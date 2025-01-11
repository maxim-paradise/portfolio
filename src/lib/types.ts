import { LucideIcon } from "lucide-react";
import { z } from "zod";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  github: string;
  link: string;
  img: string;
};

export const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10),
});

export type PropsTech = { icon: string | LucideIcon; language: string };
