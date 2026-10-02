import React, { useState } from 'react';
import { 
  Loader2, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Maximize2, 
  X, 
  CircleDot, 
  MoreHorizontal, 
  Sparkles 
} from 'lucide-react';

/**
 * NormalLoader Component
 * Clean, standard, plug-and-play loading screen.
 * 
 * @param {'spinner' | 'dots' | 'pulse' | 'bar'} type - Style of loading animation
 * @param {'fullscreen' | 'overlay' | 'inline'} variant - Layout display mode
 * @param {'light' | 'dark'} theme - Color scheme
 * @param {string} text - Primary loading message
 * @param {string} subtext - Optional secondary descriptor
 * @param {() => void} onClose - Optional close callback for full-screen previews
 */
export function NormalLoader({
  type = 'spinner',
  variant = 'inline',
  theme = 'light',
  text = 'Loading, please wait...',
  subtext = 'This will only take a moment',
  onClose,
}) {
  const isDark = theme === 'dark';

  // 1. Classic Spinner
  const renderSpinner = () => (
    <div className="relative flex items-center justify-center mb-4">
      {/* Background track circle */}
      <div 
        className={`w-10 h-10 rounded-full border-4 ${
          isDark ? 'border-zinc-800' : 'border-zinc-200'
        }`}
      />
      {/* Animated spinning arc */}
      <div 
        className="absolute w-10 h-10 rounded-full border-4 border-black dark:border-white border-t-transparent border-r-transparent animate-spin"
      />
    </div>
  );

  // 2. Bouncing Three Dots
  const renderDots = () => (
    <div className="flex items-center justify-center gap-2 mb-4 h-10">
      <span className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-bounce" />
    </div>
  );

  // 3. Dual-Ring Pulsing Radar
  const renderPulse = () => (
    <div className="relative flex items-center justify-center w-12 h-12 mb-4">
      <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-400 dark:bg-zinc-600 opacity-60 animate-ping" />
      <span className="relative inline-flex rounded-full h-5 w-5 bg-zinc-900 dark:bg-white" />
    </div>
  );

  // 4. Smooth Linear Progress Bar
  const renderBar = () => (
    <div className="w-48 mb-4">
      <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
        <div className="h-full bg-zinc-900 dark:bg-white rounded-full w-1/2 animate-[pulse_1.2s_ease-in-out_infinite]" />
      </div>
    </div>
  );

  const content = (
    <div className={`relative flex flex-col items-center justify-center p-8 text-center select-none ${
      variant === 'inline' 
        ? isDark 
          ? 'bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm' 
          : 'bg-white border border-zinc-200 rounded-xl shadow-sm' 
        : ''
    }`}>
      {/* Chosen Animation Icon */}
      {type === 'spinner' && renderSpinner()}
      {type === 'dots' && renderDots()}
      {type === 'pulse' && renderPulse()}
      {type === 'bar' && renderBar()}

      {/* Main text message */}
      {text && (
        <h3 className={`text-base font-semibold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
          {text}
        </h3>
      )}

      {/* Subtext message */}
      {subtext && (
        <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {subtext}
        </p>
      )}

      {/* Optional dismiss button for full-screen inspection */}
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close Loader"
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-zinc-500 hover:text-black hover:bg-zinc-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );

  if (variant === 'fullscreen') {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
      }`}>
        {content}
      </div>
    );
  }

  if (variant === 'overlay') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
        <div className={`w-full max-w-sm rounded-2xl p-6 shadow-2xl ${
          isDark ? 'bg-zinc-900 text-white border border-zinc-800' : 'bg-white text-zinc-900'
        }`}>
          {content}
        </div>
      </div>
    );
  }

  return content;
}

export default function App() {
  const [selectedType, setSelectedType] = useState('spinner');
  const [theme, setTheme] = useState('light');
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const loaderTypes = [
    { id: 'spinner', label: 'Classic Spinner', desc: 'Standard circular ring spin' },
    { id: 'dots', label: 'Bouncing Dots', desc: 'Three rhythmic bouncing points' },
    { id: 'pulse', label: 'Pulsing Radar', desc: 'Minimal dual-ring sonar pulse' },
    { id: 'bar', label: 'Progress Bar', desc: 'Horizontal indeterminate line' },
  ];

  const codeSnippet = `// 1. Regular Inline Loader inside a Card or Table
<NormalLoader 
  type="${selectedType}" 
  theme="${theme}" 
  text="Loading data..." 
  subtext="Please wait a second" 
/>

// 2. Full-Screen Page Loader
<NormalLoader 
  type="${selectedType}" 
  variant="fullscreen" 
  theme="${theme}" 
/>

// 3. Modal Backdrop Overlay
<NormalLoader 
  type="${selectedType}" 
  variant="overlay" 
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors p-4 sm:p-8 lg:p-12 ${
      theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Normal Loading Screen</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Simple, clean, and reusable with zero extra dependencies (Tailwind only).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-500" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </header>

        {/* Style Selector Tabs */}
        <section className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Choose Loader Style:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {loaderTypes.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedType(item.id)}
                className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                  selectedType === item.id
                    ? 'border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <span className="text-xs font-bold">{item.label}</span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className={`rounded-2xl border p-8 sm:p-14 flex flex-col items-center justify-center transition-colors ${
          theme === 'dark' ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          <NormalLoader
            type={selectedType}
            theme={theme}
            variant="inline"
            text="Fetching account details..."
            subtext="Connecting securely to database"
          />

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setFullscreenOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Preview Full Screen</span>
            </button>
          </div>
        </section>

        <section className={`rounded-xl border p-5 ${
          theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Ready-to-use snippet
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <pre className="text-xs font-mono p-4 rounded-lg bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 overflow-x-auto">
            {codeSnippet}
          </pre>
        </section>

      </div>

      {/* Fullscreen Overlay Mode */}
      {fullscreenOpen && (
        <NormalLoader
          type={selectedType}
          theme={theme}
          variant="fullscreen"
          text="Loading your dashboard..."
          subtext="Click the X button at the top right to close preview"
          onClose={() => setFullscreenOpen(false)}
        />
      )}
    </div>
  );
}