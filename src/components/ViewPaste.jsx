// src/components/ViewPaste.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  async function summarizeContent() {
    if (!paste.content) return;
    setIsLoading(true);
    const toastId = toast.loading("Processing Data Stream...");

    try {
      // Ensure model name is correct for your region/API level
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Summarize this text concisely in bullet points: \n\n ${paste.content}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setSummary(text);
      toast.success("Analysis Complete", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Data Processing Failed", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  }

  if (!paste) {
    return (
      <div className="text-3xl font-bold font-orbitron text-center mt-20 text-red-500">
        ERROR: DATA NODE NOT FOUND
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 py-10 px-10 max-w-7xl mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col gap-2 border-l-4 border-cyan-500 pl-4">
          <h1 className="font-orbitron text-4xl font-bold text-white tracking-wider uppercase">
             {paste.title}
          </h1>
          <p className="text-cyan-400 font-mono text-sm">ACCESSING RESTRICTED DATA...</p>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        
        {/* Left: Content */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          <label className="font-orbitron text-cyan-300 text-lg tracking-wide">
            ORIGINAL CONTENT
          </label>
          <div
            className="rounded-2xl w-full p-6 border border-white/20 bg-black/50 backdrop-blur-md text-gray-200 h-[600px] overflow-auto shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] leading-relaxed font-light"
          >
             {paste.content}
          </div>
        </div>

        {/* Right: AI */}
        <div className="w-full lg:w-[40%] flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label className="font-orbitron text-purple-300 text-lg tracking-wide">
              AI SUMMARY
            </label>
            <button
              onClick={summarizeContent}
              disabled={isLoading}
              className={`px-4 py-2 rounded-lg font-bold font-orbitron text-sm transition-all shadow-lg
                        ${
                          isLoading
                            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 hover:shadow-purple-500/50"
                        }
                    `}
            >
              {isLoading ? "ANALYZING..." : "SUMMARIZE ✨"}
            </button>
          </div>

          <div className="rounded-2xl w-full p-6 border border-purple-500/30 bg-black/50 backdrop-blur-md h-[600px] overflow-auto shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            {summary ? (
              <div className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                {summary}
              </div>
            ) : (
              <div className="text-gray-500 italic flex flex-col items-center justify-center h-full gap-2">
                <span className="text-3xl">🤖</span>
                <span>Waiting for AI command...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;