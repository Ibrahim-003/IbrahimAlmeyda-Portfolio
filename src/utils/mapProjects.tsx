import { GithubRepo, MappedRepo } from "../types/types";

const mapProjects = (reposData: GithubRepo[]):MappedRepo[] => {
  return reposData?.map((repoData) => ({
    id: repoData.id,
    title: repoData.name,
    description: repoData.description,
    githubRepoUrl: repoData.html_url,
    demo: repoData.homepage,
    tags: repoData.topics,
  }));
};

export default mapProjects;
