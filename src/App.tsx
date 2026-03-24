import { useState, useEffect } from 'react';
import UIKit from './pages/UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (showUIKit) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowUIKit(false)} 
          className="fixed top-4 left-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          &larr; Portföye Dön
        </button>
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema değiştir"
        >
           <span className="dark:hidden">&#9790;</span>
           <span className="hidden dark:inline">&#9728;</span>
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
         <span className="dark:hidden">&#9790;</span>
         <span className="hidden dark:inline">&#9728;</span>
      </button>

      <button 
        onClick={() => setShowUIKit(true)} 
        className="fixed bottom-4 right-4 z-50 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors cursor-pointer"
      >
        UI Kit Gör
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-primary dark:text-secondary">
            Yunus Emre Köseoğlu
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="https://via.placeholder.com/150" alt="Yunus Emre Köseoğlu vesikalık fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Yazılım mühendisliği 3. sınıf öğrencisiyim. Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Git'].map(skill => (
                  <li key={skill} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="Japonca Dil uygulaması" image="https://via.placeholder.com/400x200" imageAlt="Japonca dil uygulaması">
                <p className="mb-4">Japonca öğrenme uygulaması, kullanıcıların dil becerilerini geliştirmesine yardımcı olur.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
                </div>
              </Card>
              <Card variant="elevated" title="Kart Oyunu" image="https://via.placeholder.com/400x200" imageAlt="Kart oyunu">
                <p className="mb-4">Kartlarla oynanan, stratejik ve eğlenceli bir oyun.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Next.js</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" required placeholder="Örn: Yunus Emre Köseoğlu" />
              <Input id="email" label="E-posta" type="email" required placeholder="Örn: mail@example.com" />
              
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-100 transition-colors"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:text-gray-100 transition-colors"
                ></textarea>
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Yunus Emre Köseoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;