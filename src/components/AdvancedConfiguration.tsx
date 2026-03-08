import React, { useState } from 'react';
import { ChevronLeft, Search, Cpu, Globe, Settings, ChevronRight, LayoutList, Terminal, FileText } from 'lucide-react';

export const AdvancedConfiguration: React.FC = () => {
  const [cacheSize, setCacheSize] = useState(512);
  const [activeCategory, setActiveCategory] = useState<'Hardware' | 'Network' | 'Stealth' | 'Engine' | 'ADB & Flags' | 'Docs'>('Hardware');
  const [commandLineArgs, setCommandLineArgs] = useState('--disable-gpu --disable-web-rtc --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"');
  const [settings, setSettings] = useState({
    deviceUserAgent: 'Chrome/Windows 10',
    gpuFingerprinting: true,
    batteryStatusSpoofing: false,
    resolutionDPI: 'Native (1440p)',
    proxyServer: 'SOCKS5 (127.0.0.1:9050)',
    dnsOverHttps: true,
    webRtcLeakProtection: true,
    ipAddressSpoofing: false,
    canvasFingerprinting: true,
    webGlFingerprinting: true,
    audioContextSpoofing: true,
    fontEnumerationProtection: true,
    garbageCollection: 'Aggressive',
    jitCompilation: true,
    threadedParsing: true,
    memoryOptimization: 'Balanced',
    enableCommandLine: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const loadRecommendedFlags = () => {
    const recommended = [
      '--disable-gpu',
      '--disable-web-rtc',
      '--disable-web-security',
      '--disable-notifications',
      '--disable-background-networking',
      '--disable-sync',
      '--no-sandbox',
      '--disable-infobars',
      '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"',
      '--proxy-server="socks5://127.0.0.1:9050"'
    ].join(' ');
    setCommandLineArgs(recommended);
  };

  const categories = [
    { name: 'Hardware', icon: Cpu },
    { name: 'Network', icon: Globe },
    { name: 'Stealth', icon: LayoutList },
    { name: 'Engine', icon: Settings },
    { name: 'ADB & Flags', icon: Terminal },
    { name: 'Docs', icon: FileText },
  ] as const;

  const renderContent = () => {
    switch (activeCategory) {
      case 'Hardware':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">HARDWARE SPOOFING</h2>
            <SettingItem label="Device User Agent" type="dropdown" value={settings.deviceUserAgent} />
            <SettingItem label="GPU Fingerprinting" type="toggle" value={settings.gpuFingerprinting} onToggle={() => toggleSetting('gpuFingerprinting')} />
            <SettingItem label="Battery Status Spoofing" type="toggle" value={settings.batteryStatusSpoofing} onToggle={() => toggleSetting('batteryStatusSpoofing')} />
            <SettingItem label="Resolution/DPI" type="dropdown" value={settings.resolutionDPI} />
            
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mt-8 mb-4">MEMORY MANAGEMENT</h2>
            <div className="py-4">
              <label className="block mb-2">Heap Size Limit</label>
              <input type="range" min="2" max="8" step="2" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#81c995]" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2GB</span><span>2GB</span><span>4GB</span><span>6GB</span><span>7GB</span><span>8GB</span>
              </div>
            </div>
            <SettingItem label="Process Memory Limit" type="dropdown" value="Site-Per-Process" />
          </div>
        );
      case 'Network':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">NETWORK SPOOFING</h2>
            <SettingItem label="Proxy Server" type="dropdown" value={settings.proxyServer} />
            <SettingItem label="DNS over HTTPS" type="toggle" value={settings.dnsOverHttps} onToggle={() => toggleSetting('dnsOverHttps')} />
            <SettingItem label="WebRTC Leak Protection" type="toggle" value={settings.webRtcLeakProtection} onToggle={() => toggleSetting('webRtcLeakProtection')} />
            <SettingItem label="IP Address Spoofing" type="toggle" value={settings.ipAddressSpoofing} onToggle={() => toggleSetting('ipAddressSpoofing')} />
          </div>
        );
      case 'Stealth':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">STEALTH FINGERPRINTING</h2>
            <SettingItem label="Canvas Fingerprinting" type="toggle" value={settings.canvasFingerprinting} onToggle={() => toggleSetting('canvasFingerprinting')} />
            <SettingItem label="WebGL Fingerprinting" type="toggle" value={settings.webGlFingerprinting} onToggle={() => toggleSetting('webGlFingerprinting')} />
            <SettingItem label="Audio Context Spoofing" type="toggle" value={settings.audioContextSpoofing} onToggle={() => toggleSetting('audioContextSpoofing')} />
            <SettingItem label="Font Enumeration Protection" type="toggle" value={settings.fontEnumerationProtection} onToggle={() => toggleSetting('fontEnumerationProtection')} />
          </div>
        );
      case 'Engine':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">V8 ENGINE SETTINGS</h2>
            <SettingItem label="Garbage Collection" type="dropdown" value={settings.garbageCollection} />
            <SettingItem label="JIT Compilation" type="toggle" value={settings.jitCompilation} onToggle={() => toggleSetting('jitCompilation')} />
            <SettingItem label="Threaded Parsing" type="toggle" value={settings.threadedParsing} onToggle={() => toggleSetting('threadedParsing')} />
            <SettingItem label="Memory Optimization" type="dropdown" value={settings.memoryOptimization} />
          </div>
        );
      case 'ADB & Flags':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">ADB SPOOFING & FLAG INJECTION</h2>
            <SettingItem label="Enable command line on non-rooted devices" type="toggle" value={settings.enableCommandLine} onToggle={() => toggleSetting('enableCommandLine')} />
            <div className="mt-4">
              <label className="block text-sm text-gray-400 mb-2">Command Line Arguments</label>
              <textarea 
                className="w-full bg-[#202124] text-white p-3 rounded-lg text-sm font-mono"
                rows={6}
                value={commandLineArgs}
                onChange={(e) => setCommandLineArgs(e.target.value)}
              />
              <button 
                onClick={loadRecommendedFlags}
                className="mt-2 text-xs bg-[#1e2e2a] text-[#81c995] px-3 py-1 rounded-md hover:bg-[#2a3e39]"
              >
                Load Recommended Flags
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Common flags: --disable-gpu, --disable-web-rtc, --disable-web-security, --user-agent="...", --proxy-server="..."
              </p>
            </div>
          </div>
        );
      case 'Docs':
        return (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-[#81c995] mb-4">DOCUMENTATION</h2>
            <p className="text-sm text-gray-400 mb-4">View project documentation directly from GitHub:</p>
            <a 
              href="https://github.com/RE3CON/Gemini-AI/tree/main/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-[#81c995] font-medium">Open Docs Folder</h3>
              <p className="text-xs text-gray-400">Browse all markdown files on GitHub</p>
            </a>
            <a 
              href="https://github.com/RE3CON/Gemini-AI/wiki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-[#81c995] font-medium">Open Project Wiki</h3>
              <p className="text-xs text-gray-400">Read detailed guides and troubleshooting</p>
            </a>
          </div>
        );
      default:
        return <div className="text-gray-500">Settings for {activeCategory}...</div>;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-4 mb-2">
        <ChevronLeft className="mr-4" />
        <h1 className="text-xl flex-grow">Advanced Configuration</h1>
        <Search />
      </div>

      <div className="flex h-screen">
        {/* Sidebar (Split Pane) */}
        <div className="w-1/3 border-r border-gray-800 p-4 space-y-2">
          <h1 className="text-xl mb-6 hidden lg:block">Advanced Configuration</h1>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full flex items-center p-3 rounded-lg ${activeCategory === cat.name ? 'bg-[#1e2e2a] text-[#81c995]' : 'hover:bg-gray-800'}`}
            >
              <cat.icon className="mr-3" size={20} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-2/3 p-8">
          <h2 className="text-2xl mb-8">{activeCategory} Settings</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const SettingItem: React.FC<{ 
  label: string, 
  type: 'toggle' | 'dropdown', 
  value: any,
  onToggle?: () => void
}> = ({ label, type, value, onToggle }) => (
  <div className="flex justify-between items-center py-2">
    <span>{label}</span>
    {type === 'toggle' ? (
      <button 
        onClick={onToggle}
        className={`w-10 h-6 rounded-full p-1 transition-colors ${value ? 'bg-[#81c995]' : 'bg-gray-600'}`}
      >
        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${value ? 'translate-x-4' : 'translate-x-0'}`} />
      </button>
    ) : (
      <span className="bg-[#202124] px-3 py-1 rounded-md text-sm">{value}</span>
    )}
  </div>
);
