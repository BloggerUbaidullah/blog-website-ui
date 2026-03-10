import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Markdown from "react-markdown";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Post not found
          </h2>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to articles
        </Link>

        <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-6">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-x-4 mb-10">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
            {post.author.charAt(0)}
          </div>
          <div className="text-base font-medium text-gray-900">
            {post.author}
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="prose sm:prose-lg prose-indigo mx-auto text-gray-600 leading-relaxed max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>

      <hr className="my-16 border-gray-200" />

      {/* Comments Section Placeholder */}
      <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Alex Johnson</h4>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-600">
                  Great article! I really enjoyed the insights on minimalism.
                  It's something I've been trying to incorporate into my own
                  work.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <form className="relative">
                <textarea
                  className="w-full rounded-2xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                  placeholder="Add a comment..."
                  rows={3}
                />
                <div className="absolute bottom-3 right-3">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
}
