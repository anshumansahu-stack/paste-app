// src/components/Paste.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full h-full py-10 max-w-6xl mx-auto px-5">
      {/* Search Section */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-5xl font-extrabold font-orbitron text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          ARCHIVES
        </h1>
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search data nodes..."
            className="w-full p-4 pl-6 rounded-xl bg-black/30 backdrop-blur-md text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-lg font-orbitron"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* List Container */}
      <div className="flex flex-col gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              className="border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-4 shadow-xl hover:bg-white/10 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              key={paste?._id}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="text-3xl font-bold text-cyan-50 font-orbitron tracking-wide line-clamp-1">
                  {paste.title}
                </div>
              </div>

              {/* Content Preview */}
              <div className="text-gray-300 text-lg leading-relaxed line-clamp-2 font-light">
                {paste.content}
              </div>

              <div className="w-full h-[1px] bg-white/10 my-2"></div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-cyan-300/80 font-medium flex gap-2 items-center font-orbitron">
                  DATE: {formatDate(paste.createdAt)}
                </div>

                <div className="flex flex-row gap-3">
                  <Link to={`/?pasteId=${paste?._id}`}>
                    <button className="px-4 py-2 text-sm font-bold text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 hover:text-white transition-all font-orbitron">
                      EDIT
                    </button>
                  </Link>
                  <Link to={`/pastes/${paste?._id}`}>
                    <button className="px-4 py-2 text-sm font-bold text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/20 hover:text-white transition-all font-orbitron">
                      VIEW
                    </button>
                  </Link>
                  <button
                    className="px-4 py-2 text-sm font-bold text-red-300 border border-red-500/30 rounded-lg hover:bg-red-500/20 hover:text-white transition-all font-orbitron"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    DELETE
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-bold text-orange-300 border border-orange-500/30 rounded-lg hover:bg-orange-500/20 hover:text-white transition-all font-orbitron"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to Clipboard");
                    }}
                  >
                    COPY
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-bold text-pink-300 border border-pink-500/30 rounded-lg hover:bg-pink-500/20 hover:text-white transition-all font-orbitron"
                    onClick={() => {
                      const shareUrl = `${window.location.origin}/pastes/${paste?._id}`;
                      if (navigator.share) {
                        navigator
                          .share({
                            title: paste?.title,
                            text: paste?.content,
                            url: shareUrl,
                          })
                          .catch((error) =>
                            console.log("Error sharing", error)
                          );
                      } else {
                        navigator.clipboard.writeText(shareUrl);
                        toast.success("Link copied to clipboard!");
                      }
                    }}
                  >
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-10 text-cyan-500 text-2xl font-orbitron">
            NO DATA FOUND...
          </div>
        )}
      </div>
    </div>
  );
};

export default Paste;
