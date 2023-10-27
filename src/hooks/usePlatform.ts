import usePlatform from "./usePlatforms";

const useFindPlatform = (id?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === id);
};

export default useFindPlatform;
