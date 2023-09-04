export type PostType = {
  title: string;
  content: string;
  img: string;
  category?: string;
  _id: string;
};

export type PostCard = {[props: string]: PostType[]};
export type ParamsType = {
  params: {
    [key: string]: string;
  };
};
export type PostsType = {
  fetchedPosts: {
    posts: PostType[];
  };
};
