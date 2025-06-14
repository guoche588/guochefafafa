import React, { useState } from 'react';
import { Play, Star, Users, Trophy, ChevronDown, GamepadIcon, Zap, Target } from 'lucide-react';

function App() {
  const [showGame, setShowGame] = useState(false);

  const scrollToGame = () => {
    const gameSection = document.getElementById('game-section');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
    setShowGame(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Guochefafafa
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#game" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Play Game
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Guochefafafa
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the thrilling adventure of survival gaming where strategy meets action in an epic online battleground
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={scrollToGame}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Play Now</span>
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Active Players</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-gray-600">Rating</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Achievements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Game Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes Guochefafafa the ultimate survival gaming experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast-Paced Action</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience heart-pounding combat and quick decision-making in intense survival scenarios that will keep you on the edge of your seat.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Gameplay</h3>
              <p className="text-gray-600 leading-relaxed">
                Master the art of survival through tactical planning, resource management, and smart positioning in dynamic environments.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiplayer Battles</h3>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of players worldwide in epic multiplayer battles where only the strongest and smartest survive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Play the Game
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to test your survival skills? Jump into the action right now!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              {showGame ? (
                <div className="relative">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
                      title="Guochefafafa Game"
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    🎮 Live Game Session
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Play?</h3>
                    <p className="text-gray-600 mb-6">Click the button above to start your adventure</p>
                    <button
                      onClick={() => setShowGame(true)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Launch Game
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the Adventure
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Don't miss out on the most thrilling survival gaming experience available online. 
            Challenge yourself, compete with friends, and become the ultimate survivor in Guochefafafa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToGame}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Playing Now
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
              Share with Friends
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GamepadIcon className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Guochefafafa</span>
            </div>
            <div className="text-gray-400">
              © 2025 Guochefafafa. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;