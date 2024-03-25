export default function User({ username = "", posts = [], savedposts = [] }) {
    return {
      username,
      posts,
      savedposts
    };
  }
  