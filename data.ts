export type TPost = {
  id: string;
  title: string;
  content: string;
};

export const posts: TPost[] = [...Array(3)].map((_, idx) => {
  const suffix = idx + 1;

  return {
    id: `uuid-${suffix}`,
    title: `title-${suffix}`,
    content: `content-${suffix}`,
  };
});
