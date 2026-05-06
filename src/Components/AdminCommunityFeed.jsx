import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heart, Trash2, ShieldAlert, MessageSquare } from 'lucide-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const AdminCommunityFeed = () => {
  const [posts, setPosts] = useState([]);
  const API_BASE = "https://final-back-end-code-for-local-event.onrender.com/localevent";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetching as a public route (no token needed)
      const res = await axios.get(`${API_BASE}/all`);
      setPosts(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const handleDeletePost = async (pid) => {
  if (window.confirm("Admin: Permanently delete this post?")) {
    try {
      // Sending 'admin' as the second parameter to trigger the bypass logic above
      await axios.delete(`${API_BASE}/delete/${pid}/admin`); 
      
      alert("Post deleted successfully");
      fetchPosts(); // Refresh the list
    } catch (err) {
      console.error("Delete error", err.response?.data || err.message);
      alert("Error: " + (err.response?.data?.message || "Server crash"));
    }
  }
};


  return (
    <div className="max-w-2xl mx-auto p-4 bg-slate-50 min-h-screen">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <ShieldAlert className="text-red-500" /> Community Moderation
        </h1>
        <p className="text-slate-500 text-sm">Reviewing {posts.length} community posts</p>
      </div>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            {/* Header */}
            <div className="flex justify-between mb-3">
              <div>
                <h4 className="font-bold text-slate-900">
                  {post.author?.name || "User"} 
                  <span className="ml-2 text-xs font-normal text-slate-400">
                    {dayjs(post.createdAt).fromNow()}
                  </span>
                </h4>
              </div>
              <button 
                onClick={() => handleDeletePost(post._id)}
                className="text-slate-300 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>

            {/* Content */}
            <p className="text-slate-700 mb-3">{post.content}</p>
            {post.image && (
  <img 
    src={`https://final-back-end-code-for-local-event.onrender.com${post.image}`} 
    className="rounded-lg w-full mb-4 border" 
    alt="Post" 
  />
)}


            {/* Stats Bar */}
            <div className="flex items-center gap-6 py-3 border-t border-slate-50 text-slate-500">
              <div className="flex items-center gap-1 text-sm">
                <Heart size={18} className="text-red-400" /> {post.likes?.length || 0}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <MessageSquare size={18} className="text-blue-400" /> {post.comments?.length || 0}
              </div>
            </div>

            {/* Simplified Comment Preview for Admin */}
            {post.comments?.length > 0 && (
              <div className="mt-3 bg-slate-50 rounded-lg p-3 space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Latest Comments</p>
                {post.comments.slice(0, 3).map(comment => (
                  <div key={comment._id} className="text-sm flex justify-between group">
                    <span className="text-slate-600">
                      <b className="text-slate-800">{comment.user.name || "User"}:</b> {comment.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCommunityFeed;
