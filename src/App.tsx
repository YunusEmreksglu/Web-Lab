import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";
import UIKit from "./pages/UIKit";

export default function App() {
  // --- LAYOUT STATE ---
  const [showUIKit, setShowUIKit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- PROJECT STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ (DERIVED) VERİ ---
  const filtered = applyFilters(
    projects, search, category, sortField, sortOrder
  );

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

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

  // --- UI ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors">
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

        <section id="projeler" className="py-16 px-4 md:p-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Projelerim
            </h2>

            {/* HATA DURUMU */}
            {error && (
              <Alert variant="error" title="Hata" className="mb-6">
                {error}
              </Alert>
            )}

            {/* FİLTRELER */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  id="search"
                  placeholder="Proje ara..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>

              <div className="flex gap-2 flex-wrap items-center">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={category === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {cat === "all" ? "Tümü" : (cat.charAt(0).toUpperCase() + cat.slice(1))}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <select
                  value={sortField}
                  onChange={e => setSortField(e.target.value as SortField)}
                  className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="year">Yıl</option>
                  <option value="title">Başlık</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
                >
                  {sortOrder === "asc" ? "A-Z / Eskiden Yeniye" : "Z-A / Yeniden Eskiye"}
                </Button>
              </div>
            </div>

            {/* YÜKLENİYOR */}
            {loading && (
              <p className="text-center text-gray-500">
                Projeler yükleniyor...
              </p>
            )}

            {/* PROJE LİSTESİ */}
            {!loading && filtered.length === 0 && !error && (
              <p className="text-center text-gray-500">
                Eşleşen proje bulunamadı.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <Card
                  key={project.id}
                  variant="elevated"
                  title={project.title}
                  image={project.image}
                  imageAlt={`${project.title} ekran görüntüsü`}
                >
                  <p className="text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 font-semibold">
                    {project.year} &middot; {project.category.toUpperCase()}
                  </p>
                </Card>
              ))}
            </div>

            {/* SONUÇ SAYISI */}
            {!loading && !error && (
              <p className="text-sm text-gray-500 mt-6 text-center">
                {filtered.length} / {projects.length} proje gösteriliyor
              </p>
            )}
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