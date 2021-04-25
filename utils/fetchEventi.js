import fetcher from "../utils/fetcher";

function Eventi(props) {
  // Here the `fetcher` function will be executed on the client-side.
  const { data } = useSWR("/api/posts", fetcher, { initialData: props.posts });

  // ...
}
