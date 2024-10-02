export interface RecommendMovie {
  title: string;
  point: string;
}

export interface DifyApiResponse {
  data: {
    outputs: {
      data: RecommendMovie[];
    };
  };
}

export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  cast: string;
  runtime: number;
  poster_path: string;
  release_date: string;
  genres?: Genre[];
  "watch/providers"?: {
    results: {
      JP?: {
        flatrate: {
          provider_id: number;
          provider_name: string;
          logo_path: string;
        }[];
      };
    };
  };
  point?: string;
}

export interface TmdbApiResponse {
  results: TmdbMovie[];
}

export interface Genre {
  id: number;
  name: string;
}
