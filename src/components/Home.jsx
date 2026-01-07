// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    if(!title.trim() || !value.trim()) {
       toast.error("Title and Content are required!");
       return;
    }

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    // Removed 'fixed' and 'bg-image' to allow proper flex flow under Navbar
    <div className="w-full flex flex-col items-center justify-start py-10 px-5 gap-8">
      
      {/* Input Section */}
      <div className="w-full max-w-4xl flex flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[80%] text-white border border-white/20 rounded-xl p-4 bg-black/30 backdrop-blur-md placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-orbitron tracking-wide"
        />
        
        <button
          onClick={createPaste}
          className="w-[20%] text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 p-4 rounded-xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all hover:scale-105 font-orbitron tracking-wider"
        >
          {pasteId ? "UPDATE" : "CREATE"}
        </button>
      </div>

      {/* Text Area Section */}
      <div className="w-full max-w-4xl">
        <textarea
          value={value}
          placeholder="Initialize data stream..."
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-6 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[60vh] text-lg leading-relaxed resize-none shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;