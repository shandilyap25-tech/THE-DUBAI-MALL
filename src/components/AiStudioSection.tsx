import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Video, Loader2, Play } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export const AiStudioSection = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  const [prompt, setPrompt] = useState('');
  
  // Image Options
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  // Video Options
  const [videoAspect, setVideoAspect] = useState<'16:9' | '9:16'>('16:9');
  const [generatedVideoBase64, setGeneratedVideoBase64] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<string | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: '1:1',
            imageSize: imageSize
          }
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64 = part.inlineData.data;
          setGeneratedImage(`data:${part.inlineData.mimeType || 'image/png'};base64,${base64}`);
          break;
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to generate image. Please check API Key or try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);
    setGeneratedVideoBase64(null);
    setVideoStatus('Initializing Veo 3 Video Generation...');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      // Important to use the specific model requested
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-lite-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: videoAspect
        }
      });

      let checkCount = 0;
      while (!operation.done) {
        checkCount++;
        setVideoStatus(`Rendering your vision... (Step ${checkCount})`);
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) throw new Error("No video URI returned.");

      setVideoStatus('Fetching final video file...');
      
      const response = await fetch(downloadLink, {
        method: 'GET',
        headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY || '' },
      });
      
      if (!response.ok) throw new Error('Video fetch failed: ' + response.statusText);
      const blob = await response.blob();
      
      // Convert to base64 so we don't have to keep a blob URL that requires the key.
      const reader = new FileReader();
      reader.onloadend = () => {
        setGeneratedVideoBase64(reader.result as string);
        setVideoStatus(null);
        setIsGenerating(false);
      };
      reader.onerror = () => {
        setError('Failed to read video blob.');
        setVideoStatus(null);
        setIsGenerating(false);
      };
      reader.readAsDataURL(blob);

    } catch (err: any) {
      console.error('Video error:', err);
      setError(err?.message || 'Failed to generate video. Please check API Key or try again.');
      setIsGenerating(false);
      setVideoStatus(null);
    }
  };

  return (
    <section id="ai-studio" className="py-24 bg-luxury-black relative border-t border-luxury-gold/10">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.45em] text-luxury-gold mb-4 font-bold uppercase">◈ Interactive Experience</p>
          <h2 className="text-4xl md:text-5xl font-display mb-6 font-light leading-tight">
            Design Your <em className="italic text-luxury-gold bg-transparent">Vision</em>
          </h2>
          <div className="w-[60px] h-[1px] bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-base text-luxury-muted font-light leading-[1.9] max-w-2xl mx-auto">
            Experience our next-generation AI creative studio. Describe your perfect moment at The Dubai Mall, and watch it come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          <div className="lg:col-span-12 glass-morphism p-8 relative z-10">
            {/* Tabs */}
            <div className="flex border-b border-luxury-gold/10 mb-8 pb-4">
              <button 
                onClick={() => setActiveTab('image')}
                className={`flex-1 flex justify-center items-center gap-3 pb-3 transition-colors ${activeTab === 'image' ? 'text-luxury-gold border-b-2 border-luxury-gold' : 'text-luxury-muted hover:text-white'}`}
              >
                <ImageIcon size={18} />
                <span className="font-sans text-xs uppercase tracking-[0.1em] font-bold">Image Generator</span>
              </button>
              <button 
                onClick={() => setActiveTab('video')}
                className={`flex-1 flex justify-center items-center gap-3 pb-3 transition-colors ${activeTab === 'video' ? 'text-luxury-gold border-b-2 border-luxury-gold' : 'text-luxury-muted hover:text-white'}`}
              >
                <Video size={18} />
                <span className="font-sans text-xs uppercase tracking-[0.1em] font-bold">Video Generator</span>
              </button>
            </div>

            {/* Content Input Area */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-luxury-gold mb-3 font-semibold">Your Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={activeTab === 'image' ? "A hyper-realistic view of fashion avenue glowing neon at night..." : "A cinematic drone shot sweeping over the Dubai Fountain..."}
                  className="w-full h-32 bg-luxury-dark2 border border-luxury-gold/20 rounded-none p-4 text-white focus:outline-none focus:border-luxury-gold resize-none font-light"
                />
              </div>

              {/* Settings Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {activeTab === 'image' ? (
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-luxury-muted">Resolution:</span>
                    <div className="flex gap-2">
                      {['1K', '2K', '4K'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setImageSize(size as any)}
                          className={`px-4 py-2 border text-xs font-mono transition-colors ${imageSize === size ? 'border-luxury-gold text-luxury-gold' : 'border-luxury-gold/20 text-luxury-muted hover:border-luxury-gold/50'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-luxury-muted">Aspect Ratio:</span>
                    <div className="flex gap-2">
                      {[ 
                        { val: '16:9', label: 'Landscape' }, 
                        { val: '9:16', label: 'Portrait' }
                      ].map((ratio) => (
                        <button
                          key={ratio.val}
                          onClick={() => setVideoAspect(ratio.val as any)}
                          className={`px-4 py-2 border text-xs font-mono tracking-wider transition-colors ${videoAspect === ratio.val ? 'border-luxury-gold text-luxury-gold' : 'border-luxury-gold/20 text-luxury-muted hover:border-luxury-gold/50'}`}
                        >
                          {ratio.label} ({ratio.val})
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  onClick={activeTab === 'image' ? handleGenerateImage : handleGenerateVideo}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full sm:w-auto bg-luxury-gold text-luxury-black font-bold uppercase text-xs tracking-[0.2em] px-8 py-3 hover:bg-luxury-gold-light disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
                  {isGenerating ? 'Generating...' : `Create ${activeTab === 'image' ? 'Image' : 'Video'}`}
                </button>
              </div>

              {error && <div className="text-red-400 text-sm font-light mt-4 p-3 border border-red-500/20 bg-red-500/10">{error}</div>}
              {videoStatus && <div className="text-luxury-gold text-sm animate-pulse tracking-wide font-light">{videoStatus}</div>}
              
            </div>
          </div>
          
          {/* Output Display Area */}
          {(generatedImage || generatedVideoBase64) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-12 mt-8"
            >
              <div className="glass-morphism p-2 relative">
                {activeTab === 'image' && generatedImage && (
                  <img src={generatedImage} alt="Generated UI" className="w-full h-auto max-h-[70vh] object-contain rounded-sm" />
                )}
                {activeTab === 'video' && generatedVideoBase64 && (
                  <video src={generatedVideoBase64} controls autoPlay loop className="w-full h-auto max-h-[70vh] object-contain bg-black rounded-sm" />
                )}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
