export const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
}
