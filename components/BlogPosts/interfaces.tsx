export interface PostSummary {
  slug: string;
  title: string;
}

export interface BlogProps {
  posts: PostSummary[];
}

export interface PostProps {
  slug: string;
}
