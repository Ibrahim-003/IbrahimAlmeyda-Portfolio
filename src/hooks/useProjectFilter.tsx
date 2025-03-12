import {useState, useEffect, useCallback, useMemo} from 'react';
import { MappedRepo } from '../types/types';

export const useProjectFilter = (reposMapped: MappedRepo[]) => {
    const [listTech, setListTech] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState(reposMapped);
    const allProjects = listTech.length === 0;

    const arrayTech = useMemo(() => [...new Set(reposMapped.flatMap((repo) => repo.tags))], [reposMapped])

    const handleListTech = useCallback((newTag: string) => {
        setListTech(prevList => {
            const isInclude = prevList.includes(newTag);
            const newList = isInclude ? prevList.filter(tag => tag !== newTag) : [...prevList, newTag];

            return newList;
        })
    }, []);

    const handleViewAll = useCallback(() => {
        setListTech([]);
    }, []);

    useEffect(() => {
        if (listTech.length === 0) {
            setFilteredProjects(reposMapped);
        }else {
            const newProjects = reposMapped.filter(project => project.tags.some((tag) => listTech.includes(tag)));
            setFilteredProjects(newProjects);
        }
    }, [listTech, reposMapped]);

    return {allProjects, listTech, handleListTech, handleViewAll, filteredProjects, arrayTech}
}