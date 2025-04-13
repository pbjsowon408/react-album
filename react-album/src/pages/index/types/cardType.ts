export interface CardDTO {
  alt_description: string;
  alternative_slugs: any;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description?: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Link;
  promoted_at?: string;
  slug: string;
  sponsorship?: string;
  topic_submissions: any;
  updated_at: string;
  urls: URL;
  user: any;
  width: number;
}

interface Link {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface URL {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}
