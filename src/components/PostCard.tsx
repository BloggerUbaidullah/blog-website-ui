import { Link } from "react-router-dom";
import { BlogPost } from "../data";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/post/${post.id}`}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-4">
          <time dateTime={post.date}>{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-6 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-x-3 mt-auto pt-4 border-t border-gray-50">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
            {post.author.charAt(0)}
          </div>
          <div className="text-sm font-medium text-gray-900">{post.author}</div>
        </div>
      </div>
    </Link>
  );
}
