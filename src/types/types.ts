export interface ButtonProps {
    onClick?: () => void;
    styles?: string;
    children: React.ReactNode;
}

export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    topics: string[];
}

export interface MappedRepo {
    id?: number;
    title: string;
    description: string;
    githubRepoUrl: string;
    demo: string;
    tags: string[];
}
