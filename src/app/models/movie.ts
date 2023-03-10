export interface Movie{
  adult: boolean,
  backdrop_path: string,
  genres: [],
  id: number,
  media_type: string,
  original_languge: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
export interface Datos{
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}
