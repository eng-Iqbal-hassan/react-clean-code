import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function Post() {
  const postData = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      return Object.values(response.data);
    },
  });
  return <div>{postData.isSuccess && postData.data.map((value, index) => <div key={index}>{value.title}</div>)}</div>;
}
