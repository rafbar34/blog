export type PostType = {
  title: string;
  content: string;
  img: string;
  category?: string;
  _id: string;
};

export type PostCard = {posts: PostType[]};

export type PostsType = {
  fetchedPosts: {
    posts: PostType[];
  };
};
