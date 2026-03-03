import './App.css';
import './styles/tokens.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <h1>Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkımda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#İletişim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkımda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Vesikalik fotografim" />
            <figcaption>Yunus EmreKöseoğlu</figcaption>
          </figure>
          <p>Merhaba! Yazılım mühendisliği 3. sınıf öğrencisiyim.</p>
          <ul className="skill-tags" role="list"
            aria-label="Beceri etiketleri">
            <li>HTML5 </li>
            <li>CSS3 </li>
            <li>JavaScript </li>
            <li>React </li>
            <li>TypeScript </li>
            <li>Git </li>
          </ul>
        </section>


        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="proje1.jpg" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>Japonca Dil uygulaması </h3>
              <p>Japonca öğrenme uygulaması, kullanıcıların dil becerilerini geliştirmesine yardımcı olur.</p>
              <ul className="skill-tags">
                <li>Next.js </li>
                <li>Node.js</li>
              </ul>
            </article >

            <article className="project-card">
              <img src="proje2.jpg"
                alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Kart Oyunu</h3>
              <p>Kartlarla oynanan, stratejik ve eğlenceli bir oyun.</p>
              <ul className="skill-tags">
                <li>TypeScript </li>
                <li>Next.js</li>
              </ul>
            </article >
          </div>
        </section >


        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız: </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Yunus EmreKöseoğlu. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App