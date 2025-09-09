import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Users, Zap, Star, Search, TrendingUp, Globe, Sparkles, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlang, setCurrentSlang] = useState(0);

  // trending
  const trendingSlangs = [
    { word: "Slay", meaning: "To do something exceptionally well", emoji: "👑" },
    { word: "Ghosting", meaning: "Suddenly cutting off all communication", emoji: "👻" },
    { word: "Simp", meaning: "Someone who does too much for someone they like", emoji: "💖" },
    { word: "Periodt", meaning: "Used to emphasize a point, like 'period' but stronger", emoji: "💅" },
    { word: "Vibe Check", meaning: "Assessing someone's mood or energy", emoji: "✨" }
  ];

//  loop through diff slangs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlang((prev) => (prev + 1) % trendingSlangs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const FloatingEmoji = ({ emoji, className }) => (
    <div className={`absolute text-4xl opacity-20 animate-bounce ${className}`}>
      {emoji}
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
    <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );

  const StatCard = ({ number, label, icon: Icon }) => (
    <div className="text-center group">
      <div className="relative">
        <Icon className="w-8 h-8 text-purple-300 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          {number}
        </div>
      </div>
      <p className="text-gray-300 mt-2">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingEmoji emoji="🔥" className="top-20 left-10 animate-pulse" />
      <FloatingEmoji emoji="💯" className="top-32 right-16 animation-delay-1000" />
      <FloatingEmoji emoji="✨" className="top-96 left-32 animation-delay-2000" />
      <FloatingEmoji emoji="🚀" className="top-64 right-32 animation-delay-3000" />
      <FloatingEmoji emoji="💫" className="bottom-32 left-16 animation-delay-4000" />

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-32 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>

      {/* nav */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-17 h-17 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <img src="/logo.png" alt="" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent py-2">
              Slangopedia
            </span>
          </div>

          {/* links*/}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <Link to={'/login'}>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#community" className="block text-gray-300 hover:text-white transition-colors">Community</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">The Ultimate Slang Dictionary</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
  Stay Current
</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Discover, learn, and contribute to the ever-evolving world of modern slang. 
              From Gen Z to internet culture, we've got you covered.
            </p>

            {/* Trending Slang */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-12 max-w-md mx-auto">
              <div className="text-sm text-purple-300 mb-2 flex items-center justify-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Trending Now</span>
              </div>
              <div className="text-3xl mb-2">{trendingSlangs[currentSlang].emoji}</div>
              <div className="text-2xl font-bold text-white mb-2">{trendingSlangs[currentSlang].word}</div>
              <div className="text-gray-300 text-sm">{trendingSlangs[currentSlang].meaning}</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Explore Slangs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Dictionary</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="10K+" label="Slang Terms" icon={BookOpen} />
            <StatCard number="50K+" label="Active Users" icon={Users} />
            <StatCard number="1M+" label="Searches Daily" icon={Search} />
            <StatCard number="99%" label="Accuracy Rate" icon={Star} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6 py-3">
              Why Slangopedia?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another dictionary. We're your guide to understanding and using modern language authentically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Real-Time Updates"
              description="Our community-driven platform ensures you always have access to the latest slang terms as they emerge."
              gradient="from-yellow-500 to-orange-500"
            />
            <FeatureCard
              icon={Users}
              title="Community Verified"
              description="Every entry is validated by our diverse community of native speakers and language enthusiasts."
              gradient="from-green-500 to-teal-500"
            />
            <FeatureCard
              icon={Globe}
              title="Global Coverage"
              description="From American Gen Z to British roadman slang, we cover dialects from around the world."
              gradient="from-blue-500 to-purple-500"
            />
            <FeatureCard
              icon={Search}
              title="Smart Search"
              description="Find any slang term instantly with our intelligent search that understands context and variations."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={Star}
              title="Usage Examples"
              description="Learn not just what words mean, but how to use them naturally with real-world examples."
              gradient="from-pink-500 to-red-500"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Trending Insights"
              description="Stay ahead of the curve with our trending section showing what's hot in slang culture."
              gradient="from-indigo-500 to-blue-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to level up your slang game?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already discovering, learning, and contributing to the world's most comprehensive slang dictionary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <Link to={'/login'}>
                <span>Join Slangopedia</span></Link>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-13 h-13 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Slangopedia
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Slangopedia. Made with 💜 for the culture.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;