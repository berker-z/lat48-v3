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
  email?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
  url: string;
  logo: string;
}

export interface PortfolioEvent {
  title: string;
  url: string;
  location: string;
  imageUrl: string;
}
