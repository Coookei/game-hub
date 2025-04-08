import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres }, // use static data for first render
  });

export default useGenres;
