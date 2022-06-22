export interface ThoughtSummary {
  slug: string;
  title: string;
}

export interface GardenProps {
  thoughts: ThoughtSummary[];
}

export interface ThoughtProps {
  slug: string;
}
