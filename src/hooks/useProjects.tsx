import { useState, useEffect, useCallback } from "react";
import { GithubRepo, MappedRepo } from "../types/types";
import mapProjects from "../utils/mapProjects";
import { handleApiError } from "../utils/errorHandling";
import { searchProjects } from "../service/githubApi";

export const useProjects = () => {
  const [projects, setProjects] = useState<MappedRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const cacheData = localStorage.getItem("projects");
      if (cacheData) {
        setProjects(JSON.parse(cacheData));
        setLoading(false);
        return;
      }

      const response = await searchProjects("4", "update", "desc");

      if (!response.ok) throw new Error(handleApiError(response));

      const data: GithubRepo[] = await response.json();
      const mappedData = mapProjects(data);
      localStorage.setItem("projects", JSON.stringify(mappedData));
      setProjects(mappedData);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return { projects, loading, error };
};
