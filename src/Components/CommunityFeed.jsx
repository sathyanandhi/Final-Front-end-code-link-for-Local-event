// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Heart, Trash2, Edit, Image as ImageIcon, X, ShieldAlert, Send, Check } from 'lucide-react';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';

// dayjs.extend(relativeTime);

// const CommunityFeed = () => {
//   const { id: loggedInUserId } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [content, setContent] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Edit States
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [editPostContent, setEditPostContent] = useState('');
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editCommentText, setEditCommentText] = useState("");
//   const [commentText, setCommentText] = useState({});

//   const API_BASE = "https://final-back-end-code-for-local-event.onrender.com/localevent";
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");
//   // const cloudName = "dn1alzst4";
//   // const uploadPreset = "ofhynmkg";

//   useEffect(() => { fetchPosts(); }, []);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Get the first selected file
//     if (file) {
//       setImageFile(file);
//       setPreview(URL.createObjectURL(file)); // Create a local URL for the preview
//     }
//   };


//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get(`${API_BASE}/all`);
//       setPosts(res.data);
//     } catch (err) { console.error("Fetch error", err); }
//   };

//  const handleCreatePost = async (e) => {
//   e.preventDefault();
//   if (!content.trim() && !imageFile) return;
//   setLoading(true);

//   try {
//     const data = new FormData();
//     data.append("content", content);
//     data.append("author", loggedInUserId);
//     if (imageFile) {
//       data.append("image", imageFile); // The key 'image' must match Multer's config
//     }

//     // Send everything to your backend in one request
//     await axios.post(`${API_BASE}/create`, data, {
//       headers: { 
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "multipart/form-data" // Necessary for files
//       }
//     });

//     setContent(''); setPreview(null); setImageFile(null); fetchPosts();
//     alert("Post created successfully!");
//   } catch (err) {
//     console.error(err);
//     alert("Upload failed.");
//   } finally {
//     setLoading(false);
//   }
// };





//   const handleUpdatePost = async (pid) => {
//     await axios.put(`${API_BASE}/update/${pid}/${loggedInUserId}`, 
//       { content: editPostContent }, { headers: { Authorization: `Bearer ${token}` } }
//     );
//     setEditingPostId(null); fetchPosts();
//   };

//   const handleDeletePost = async (pid) => {
//     if (window.confirm("Delete post?")) {
//       await axios.delete(`${API_BASE}/delete/${pid}/${loggedInUserId}`, { headers: { Authorization: `Bearer ${token}` } });
//       fetchPosts();
//     }
//   };

//   const handleLike = async (pid) => {
//     try {
//       await axios.put(`${API_BASE}/like/${pid}`, { userId: loggedInUserId }, { headers: { Authorization: `Bearer ${token}` } });
//       fetchPosts();
//     } catch (err) { console.error(err); }
//   };

//   // --- COMMENT ACTIONS (CRUD) ---
//   const handleAddComment = async (postId) => {
//     const text = commentText[postId];
//     if (!text?.trim()) return;
//     try {
//       await axios.post(`${API_BASE}/comment/${postId}`, 
//         { userId: loggedInUserId, text }, { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setCommentText({ ...commentText, [postId]: "" }); fetchPosts();
//     } catch (err) { console.error(err); }
//   };


// const handleUpdateComment = async (postId, commentId) => {
//   try {
//     await axios.put(`${API_BASE}/comment/update/${postId}/${commentId}`, 
//       { 
//         userId: loggedInUserId, // Required for the backend ownership check
//         text: editCommentText   // Make sure this matches the key 'text' in the backend
//       }, 
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setEditingCommentId(null); // Close the edit input
//     fetchPosts();              // Refresh the UI
//   } catch (err) {
//     console.error("Update error:", err.response?.data);
//     alert("Failed to update: " + (err.response?.data?.message || err.message));
//   }
// };

// const handleDeleteComment = async (postId, commentId) => {
//   const currentToken = localStorage.getItem("token"); // Get it directly to be sure

//   if (!currentToken) {
//     alert("You must be logged in to delete comments.");
//     return;
//   }

//   try {
//     await axios.delete(`${API_BASE}/comment/delete/${postId}/${commentId}`, {
//       headers: { 
//         Authorization: `Bearer ${currentToken}` 
//       }
//     });
//     fetchPosts(); 
//   } catch (err) {
//     console.error("Delete Error:", err.response?.data);
//   }
// };




//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-amber-50 min-h-screen font-sans pb-10">
//       {/* POST INPUT */}
//       <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200 mb-8">
//         <textarea
//           className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:ring-2 focus:ring-amber-500"
//           placeholder="Share something with the community..."
//           rows="3" value={content} onChange={(e) => setContent(e.target.value)}
//         />
//         {preview && (
//           <div className="relative mt-3">
//             <img src={preview} className="rounded-lg h-48 w-full object-cover border" alt="Preview" />
//             <button onClick={() => { setPreview(null); setImageFile(null); }} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1"><X size={16}/></button>
//           </div>
//         )}
//         <div className="flex justify-between items-center mt-4">
//           <label className="cursor-pointer flex items-center gap-2 text-amber-600 font-bold hover:bg-amber-50 px-3 py-2 rounded-full">
//             <ImageIcon size={20} /> Photo
//             <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
//           </label>
//           <button onClick={handleCreatePost} disabled={loading} className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold disabled:opacity-50">
//             {loading ? "Posting..." : "Post"}
//           </button>
//         </div>
//       </div>

//       {/* FEED */}
//       <div className="space-y-6">
//         {posts.map(post => {
//           const isPostOwner = post.author?._id === loggedInUserId;
//           const isAdmin = userRole === 'admin';

//           return (
//             <div key={post._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
//               <div className="flex justify-between mb-3">
//                 <div>
//                   <h4 className="font-bold text-amber-900 flex items-center gap-2">
//                     {post.author?.name || post.author?.participantname || "User"}
//                     {isAdmin && <ShieldAlert size={14} className="text-red-500" />}
//                   </h4>
//                   <span className="text-[10px] text-slate-400">{dayjs(post.createdAt).fromNow()}</span>
//                 </div>
//                 {(isPostOwner || isAdmin) && (
//                   <div className="flex gap-3 text-slate-300">
//                     <button onClick={() => {setEditingPostId(post._id); setEditPostContent(post.content)}} className="hover:text-amber-600"><Edit size={18}/></button>
//                     <button onClick={() => handleDeletePost(post._id)} className="hover:text-red-500"><Trash2 size={18}/></button>
//                   </div>
//                 )}
//               </div>

//               {editingPostId === post._id ? (
//                 <div className="flex gap-2">
//                   <input className="flex-1 border rounded p-2" value={editPostContent} onChange={(e) => setEditPostContent(e.target.value)} />
//                   <button onClick={() => handleUpdatePost(post._id)} className="text-green-600"><Check /></button>
//                 </div>
//               ) : (
//                 <p className="text-slate-700 mb-3">{post.content}</p>
//               )}

//               {/* {post.image && <img src={post.image} className="rounded-lg w-full mb-4 border" alt="Post" />} */}
//         {post.image && (
//           <img 
//             src={`https://final-back-end-code-for-local-event.onrender.com${post.image}`} 
//             className="rounded-lg w-full mb-4 border" 
//             alt="Post" 
//           />
//         )}
//               <div className="flex items-center gap-4 py-3 border-t border-slate-50">
//                 <button onClick={() => handleLike(post._id)} className={`flex items-center gap-1 text-sm font-bold ${post.likes?.includes(loggedInUserId) ? 'text-red-500' : 'text-slate-400'}`}>
//                   <Heart size={18} fill={post.likes?.includes(loggedInUserId) ? "currentColor" : "none"} />
//                   {post.likes?.length || 0}
//                 </button>
//               </div>

//               {/* COMMENTS */}
//               <div className="mt-4 space-y-3 bg-slate-50 p-3 rounded-xl">
//                 {post.comments?.map((comment) => (
//                   <div key={comment._id} className="group text-sm">
//                     <div className="flex justify-between">
//                       <div className="flex-1">
//                         <span className="font-bold text-amber-800 mr-2">{comment.user?.name || "User"}:</span>
//                         {editingCommentId === comment._id ? (
//                           <input 
//                             className="border rounded px-2 py-0.5 text-xs" 
//                             value={editCommentText} 
//                             onChange={(e) => setEditCommentText(e.target.value)}
//                             onKeyDown={(e) => e.key === 'Enter' && handleUpdateComment(post._id, comment._id)}
//                           />
//                         ) : (
//                           <span className="text-slate-600">{comment.text}</span>
//                         )}
//                       </div>
//                       {(comment.user?._id === loggedInUserId || isAdmin) && (
//                         <div className="hidden group-hover:flex gap-2 text-slate-300">
//                           <button onClick={() => {setEditingCommentId(comment._id); setEditCommentText(comment.text)}}><Edit size={12}/></button>
//                           <button onClick={() => handleDeleteComment(post._id, comment._id)}><Trash2 size={12}/></button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//                 <div className="flex gap-2 mt-2">
//                   <input 
//                     placeholder="Write a comment..." className="flex-1 bg-white border rounded-full px-4 py-1 text-sm outline-none"
//                     value={commentText[post._id] || ""} onChange={(e) => setCommentText({ ...commentText, [post._id]: e.target.value })}
//                     onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post._id)}
//                   />
//                   <button onClick={() => handleAddComment(post._id)} className="text-amber-600"><Send size={18} /></button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CommunityFeed;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Heart, Trash2, Edit, Image as ImageIcon, X, ShieldAlert, Send, Check } from 'lucide-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const CommunityFeed = () => {
  const { id: loggedInUserId } = useParams();
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Edit States
  const [editingPostId, setEditingPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");
  const [commentText, setCommentText] = useState({});

const API_BASE = "https://final-back-end-code-for-local-event.onrender.com/localevent";
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  useEffect(() => { fetchPosts(); }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/all`);
      setPosts(res.data);
    } catch (err) { console.error("Fetch error", err); }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!content.trim() && !imageFile) return;
    setLoading(true);
    try {
      const data = new FormData();
      data.append("content", content);
      data.append("author", loggedInUserId);
      if (imageFile) data.append("image", imageFile);

      await axios.post(`${API_BASE}/create`, data, {
        headers: { 
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      setContent(''); setPreview(null); setImageFile(null); fetchPosts();
      alert("Post created successfully!");
    } catch (err) { alert("Upload failed."); } finally { setLoading(false); }
  };

  const handleUpdatePost = async (pid) => {
    await axios.put(`${API_BASE}/update/${pid}/${loggedInUserId}`, 
      { content: editPostContent }, { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditingPostId(null); fetchPosts();
  };

  const handleDeletePost = async (pid) => {
    if (window.confirm("Delete post?")) {
      await axios.delete(`${API_BASE}/delete/${pid}/${loggedInUserId}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchPosts();
    }
  };

  const handleLike = async (pid) => {
    try {
      await axios.put(`${API_BASE}/like/${pid}`, { userId: loggedInUserId }, { headers: { Authorization: `Bearer ${token}` } });
      fetchPosts();
    } catch (err) { console.error(err); }
  };

  const handleAddComment = async (postId) => {
    const text = commentText[postId];
    if (!text?.trim()) return;
    try {
      await axios.post(`${API_BASE}/comment/${postId}`, 
        { userId: loggedInUserId, text }, { headers: { Authorization: `Bearer ${token}` } }
      );
      setCommentText({ ...commentText, [postId]: "" }); fetchPosts();
    } catch (err) { console.error(err); }
  };

  const handleUpdateComment = async (postId, commentId) => {
    try {
      await axios.put(`${API_BASE}/comment/update/${postId}/${commentId}`, 
        { userId: loggedInUserId, text: editCommentText }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingCommentId(null); fetchPosts();
    } catch (err) { console.error(err); }
  };

  const handleDeleteComment = async (postId, commentId) => {
    if (!window.confirm("Delete comment?")) return;
    try {
      await axios.delete(`${API_BASE}/comment/delete/${postId}/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPosts(); 
    } catch (err) { console.error(err); }
  };

  return (
    // Responsive container: Full width on mobile, max-width on desktop
    <div className="w-full max-w-2xl mx-auto p-2 md:p-4 bg-amber-50 min-h-screen pb-10">
      
      {/* POST INPUT */}
      <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-amber-200 mb-6 md:mb-8">
        <textarea
          className="w-full p-2 md:p-3 bg-slate-50 rounded-xl outline-none border border-slate-100 focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
          placeholder="Share something..."
          rows="3" value={content} onChange={(e) => setContent(e.target.value)}
        />
        {preview && (
          <div className="relative mt-3">
            <img src={preview} className="rounded-lg h-40 md:h-48 w-full object-cover border" alt="Preview" />
            <button onClick={() => { setPreview(null); setImageFile(null); }} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1"><X size={16}/></button>
          </div>
        )}
        <div className="flex justify-between items-center mt-3 md:mt-4">
          <label className="cursor-pointer flex items-center gap-2 text-amber-600 font-bold hover:bg-amber-50 px-2 md:px-3 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
            <ImageIcon size={18} /> <span>Photo</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
          <button onClick={handleCreatePost} disabled={loading} className="bg-amber-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full font-bold text-xs md:text-sm disabled:opacity-50">
            {loading ? "..." : "Post"}
          </button>
        </div>
      </div>

      {/* FEED */}
      <div className="space-y-4 md:space-y-6">
        {posts.map(post => {
          const isPostOwner = post.author?._id === loggedInUserId;
          const isAdmin = userRole === 'admin';

          return (
            <div key={post._id} className="bg-white rounded-xl p-3 md:p-5 shadow-sm border border-slate-200">
              <div className="flex justify-between mb-2 md:mb-3">
                <div className="flex flex-col">
                  <h4 className="font-bold text-amber-900 text-sm md:text-base flex items-center gap-1">
                    {post.author?.name || post.author?.participantname || "User"}
                    {isAdmin && <ShieldAlert size={14} className="text-red-500" />}
                  </h4>
                  <span className="text-[9px] md:text-[10px] text-slate-400">{dayjs(post.createdAt).fromNow()}</span>
                </div>
                {(isPostOwner || isAdmin) && (
                  <div className="flex gap-2 md:gap-3 text-slate-300">
                    <button onClick={() => {setEditingPostId(post._id); setEditPostContent(post.content)}} className="hover:text-amber-600"><Edit size={16}/></button>
                    <button onClick={() => handleDeletePost(post._id)} className="hover:text-red-500"><Trash2 size={16}/></button>
                  </div>
                )}
              </div>

              {editingPostId === post._id ? (
                <div className="flex gap-2 mb-3">
                  <input className="flex-1 border rounded px-2 py-1 text-sm" value={editPostContent} onChange={(e) => setEditPostContent(e.target.value)} />
                  <button onClick={() => handleUpdatePost(post._id)} className="text-green-600"><Check size={20}/></button>
                </div>
              ) : (
                <p className="text-slate-700 text-sm md:text-base mb-3 leading-relaxed">{post.content}</p>
              )}

               {/* POST IMAGE (Responsive: Full-width on mobile)  */}
              {/* {post.image && (
                <div className="-mx-3 md:mx-0 mb-3">
                  <img src={post.image} className="w-full h-auto max-h-[400px] object-cover md:rounded-lg border-y md:border border-slate-100" alt="Post" />
                </div>
              )}  */}

              {post.image && (
          <img 
             src={`https://final-back-end-code-for-local-event.onrender.com${post.image}`} 
            className="rounded-lg w-full mb-4 border" 
           alt="Post" 
         />
       )}

               
              <div className="flex items-center gap-4 py-2 border-y border-slate-50 mb-3">
                <button onClick={() => handleLike(post._id)} className={`flex items-center gap-1 text-xs md:text-sm font-bold ${post.likes?.includes(loggedInUserId) ? 'text-red-500' : 'text-slate-500'}`}>
                  <Heart size={18} fill={post.likes?.includes(loggedInUserId) ? "currentColor" : "none"} />
                  <span>{post.likes?.length || 0}</span>
                </button>
              </div>

              {/* COMMENTS SECTION */}
              <div className="space-y-2">
                {post.comments?.map((comment) => {
                  const isCommentOwner = (comment.user?._id || comment.user) === loggedInUserId;
                  return (
                    <div key={comment._id} className="group bg-slate-50 p-2 md:p-3 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="font-bold text-[10px] md:text-xs text-amber-900 block">{comment.user?.name || "User"}</span>
                          {editingCommentId === comment._id ? (
                            <div className="flex gap-2 mt-1">
                              <input className="flex-1 text-xs border-b border-amber-500 bg-transparent outline-none" value={editCommentText} onChange={(e) => setEditCommentText(e.target.value)} autoFocus />
                              <button onClick={() => handleUpdateComment(post._id, comment._id)} className="text-green-600"><Check size={14}/></button>
                            </div>
                          ) : (
                            <p className="text-xs md:text-sm text-slate-600">{comment.text}</p>
                          )}
                        </div>
                        {(isCommentOwner || isAdmin) && (
                          <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button onClick={() => {setEditingCommentId(comment._id); setEditCommentText(comment.text)}} className="text-slate-400 hover:text-amber-600"><Edit size={12}/></button>
                            <button onClick={() => handleDeleteComment(post._id, comment._id)} className="text-slate-400 hover:text-red-500"><Trash2 size={12}/></button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* ADD COMMENT INPUT */}
                <div className="flex gap-2 pt-2 items-center">
                  <input
                    className="flex-1 bg-slate-100 rounded-full px-4 py-1.5 text-xs md:text-sm outline-none focus:ring-1 focus:ring-amber-200"
                    placeholder="Write a comment..."
                    value={commentText[post._id] || ""}
                    onChange={(e) => setCommentText({ ...commentText, [post._id]: e.target.value })}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post._id)}
                  />
                  <button onClick={() => handleAddComment(post._id)} className="text-amber-600">
                    <Send size={16} />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityFeed;
