import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null
  );

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data.name}</div>;
};
