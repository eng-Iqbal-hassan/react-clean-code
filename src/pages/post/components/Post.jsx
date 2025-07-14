import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const POSTS_PER_PAGE = 8;

export function Post() {
  const [page, setPage] = useState(1);
  const postData = useQuery({
    queryKey: ['post', page],
    queryFn: async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`
      );
      return Object.values(response.data);
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5 h-[90vh]">
        {postData.isSuccess &&
          postData.data.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow h-[40vh]"
            >
              <h2 className="text-lg font-semibold mb-2">{value.title}</h2>
              <p className="text-gray-600">{value.body}</p>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-semibold">Page {page}</span>
        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={postData.data && postData.data.length < POSTS_PER_PAGE}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
