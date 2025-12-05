export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  handle: string;
  role: string;
  bio: string[];
  imageUrl: string;
  twitter?: string;
  linkedin?: string;
  telegram?: string;
}

export interface NavLink {
  label: string;
  href: string;
}