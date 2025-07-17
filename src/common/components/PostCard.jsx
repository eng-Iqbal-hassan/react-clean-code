export default function PostCard({ key, title, body }) {
  return (
    <div
      key={key}
      className="bg-white shadow-md border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow h-[38vh]"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}
