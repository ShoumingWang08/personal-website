import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Matt Wang
          </h1>
          <div className="flex justify-center mb-6">
            <Image
              src="/matt-profile.jpg"
              alt="Matt Wang Profile Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-300 shadow-2xl object-cover"
            />
          </div>
          <p className="text-3xl text-blue-300 font-semibold mb-4">
            Student • Scholar • Athlete
          </p>
          <p className="text-xl text-gray-300">
            High School Senior | Age 17
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Academic Achievements */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-blue-400 mr-3">🎓</span>
              Academic Excellence
            </h2>
            <div className="space-y-6 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <p className="text-sm text-blue-200">GPA</p>
                  <p className="text-2xl font-bold">4.12</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <p className="text-sm text-blue-200">Weighted GPA</p>
                  <p className="text-2xl font-bold">5.61</p>
                </div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-4">
                <p className="text-sm text-green-200">SAT Score</p>
                <p className="text-2xl font-bold">1520</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">AP Scores</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-yellow-500/20 rounded p-3">
                    <p className="text-sm text-yellow-200">AP World History</p>
                    <p className="text-lg font-bold">5</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded p-3">
                    <p className="text-sm text-yellow-200">AP Language</p>
                    <p className="text-lg font-bold">5</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded p-3">
                    <p className="text-sm text-yellow-200">AP Calculus</p>
                    <p className="text-lg font-bold">5</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded p-3">
                    <p className="text-sm text-yellow-200">AP Computer Science A</p>
                    <p className="text-lg font-bold">5</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded p-3">
                    <p className="text-sm text-yellow-200">AP US History</p>
                    <p className="text-lg font-bold">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Activities */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-blue-400 mr-3">🌟</span>
              Interests & Activities
            </h2>
            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Academic Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🧮</div>
                    <p className="font-semibold">Mathematics</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <p className="font-semibold">Computer Science</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🤔</div>
                    <p className="font-semibold">Philosophy</p>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🗣️</div>
                    <p className="font-semibold">Debating</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Sports & Hobbies</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🏀</div>
                    <p className="font-semibold">Basketball</p>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🏓</div>
                    <p className="font-semibold">Ping Pong</p>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎹</div>
                    <p className="font-semibold">Piano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="text-blue-400 mr-3">📝</span>
              About Me
            </h2>
            <div className="text-white text-lg leading-relaxed">
              <p className="mb-4">
                I'm a 17-year-old high school senior with a passion for learning and excellence. 
                My academic journey has been marked by consistent achievement, maintaining a 4.12 GPA 
                and earning top scores on standardized tests including a 1520 SAT.
              </p>
              <p className="mb-4">
                Beyond academics, I'm deeply engaged in diverse interests that shape my worldview. 
                I find joy in the strategic thinking of basketball and ping pong, the creative expression 
                of piano, and the intellectual rigor of mathematics, computer science, and philosophy.
              </p>
              <p>
                My love for debating reflects my commitment to understanding multiple perspectives 
                and communicating ideas effectively. I believe in the power of education to transform 
                lives and am excited about the opportunities ahead in my academic and personal journey.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg">
            Matt Wang • High School Senior • Class of 2024
          </p>
          <p className="text-blue-300 mt-2">
            Pursuing Excellence in Academics and Life
          </p>
        </div>
      </footer>
    </div>
  );
}