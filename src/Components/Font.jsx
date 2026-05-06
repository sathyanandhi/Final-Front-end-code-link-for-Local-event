import React from 'react'

const Font = () => {
  return (
    <div>
   
    <div className="min-h-screen bg-slate-50 p-6 sm:p-10 font-sans antialiased text-slate-900">
      {/* Page Title with Gradient and Font Style */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent italic">
          Admin Control Center
        </h1>
        <p className="text-slate-500 mt-2 font-medium tracking-wide uppercase text-xs">Event Management & User Analytics</p>
      </header>

      {/* Participants Table Container */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 underline decoration-indigo-500 decoration-4 underline-offset-8">
            Event Participants
          </h2>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
            {eventdata.length} Active Records
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-200">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-[11px] font-black tracking-widest border-b border-slate-200">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Participant Details</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Scheduled Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {eventdata.map((data, index) => (
                <React.Fragment key={data._id}>
                  <tr className="group hover:bg-slate-50/80 transition-all duration-200">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">#{index + 1}</td>
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-800 text-base">{data.participantname}</div>
                      <div className="text-slate-500 text-xs italic">{data.email} • {data.phonenumber}</div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-slate-600 text-sm font-medium">{data.address}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                        {data.result?.eventdate ? new Date(data.result.eventdate).toLocaleDateString() : "Pending"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button 
                        onClick={() => toggleDetails(data._id)}
                        className="inline-flex items-center font-bold text-xs uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        {expandedId === data._id ? "Close Details ↑" : "View Details →"}
                      </button>
                    </td>
                  </tr>

                  {/* Enhanced Expanded View */}
                  {expandedId === data._id && (
                    <tr>
                      <td colSpan="5" className="px-8 py-6 bg-slate-50/50">
                        <div className="bg-white rounded-xl border border-indigo-100 p-6 shadow-sm flex flex-col md:flex-row gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
                          <div className="flex-1 space-y-4">
                            <div>
                              <label className="text-[10px] font-black text-indigo-400 uppercase">Event Target</label>
                              <p className="text-xl font-extrabold text-slate-800">{data.result?.eventname}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase">Time & Venue</label>
                                <p className="text-sm font-bold text-slate-700">{data.result?.eventtime} @ {data.result?.venue}</p>
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] font-black text-slate-400 uppercase">Description</label>
                              <p className="text-sm text-slate-500 italic leading-relaxed">"{data.result?.eventdescription}"</p>
                            </div>
                          </div>
                          {data.result?.img && (
                            <div className="md:w-1/3">
                              <img src={data.result.img} alt="event" className="w-full h-40 object-cover rounded-lg ring-4 ring-slate-50 shadow-md" />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modern Logged-in Users Table */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
          User Activity Log
        </h2>
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-emerald-600 text-white uppercase text-[10px] font-bold tracking-[0.2em]">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">User Identity</th>
                <th className="px-6 py-4">Contact Detail</th>
                <th className="px-6 py-4">Registered On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {userData.map((user, index) => (
                <tr key={user._id} className="hover:bg-emerald-50/20 transition-colors italic hover:not-italic">
                  <td className="px-6 py-4 font-mono text-emerald-600 font-bold">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-800 uppercase tracking-tight">{user.name}</td>
                  <td className="px-6 py-4 font-medium text-slate-500 underline decoration-dotted underline-offset-4 decoration-slate-300">{user.email}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">
                    {user.createdAt ? new Date(user.createdAt).toDateString() : "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  

    </div>
  )
}

export default Font
