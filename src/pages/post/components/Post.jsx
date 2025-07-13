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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 p-5">
      {postData.isSuccess &&
        postData.data.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{value.title}</h2>
            <p className="text-gray-600">{value.body}</p>
          </div>
        ))}
    </div>
  );
}
