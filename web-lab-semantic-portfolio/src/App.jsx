import { useState } from 'react'
import './App.css'

function App() {
  /* ---- Form state: hata mesajlari + basari bildirimi ---- */
  const [formErrors, setFormErrors] = useState({
    name: '', email: '', subject: '', message: '',
  })
  const [formSuccess, setFormSuccess] = useState(false)

  function validate(fields) {
    const errors = { name: '', email: '', subject: '', message: '' }
    let valid = true

    if (!fields.name || fields.name.trim().length < 2) {
      errors.name = 'Ad soyad en az 2 karakter olmalidir.'
      valid = false
    }
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errors.email = 'Gecerli bir e-posta adresi giriniz.'
      valid = false
    }
    if (!fields.subject) {
      errors.subject = 'Lutfen bir konu seciniz.'
      valid = false
    }
    if (!fields.message || fields.message.trim().length < 10) {
      errors.message = 'Mesaj en az 10 karakter olmalidir.'
      valid = false
    }
    return { errors, valid }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const fields = Object.fromEntries(fd.entries())
    const { errors, valid } = validate(fields)
    setFormErrors(errors)

    if (valid) {
      setFormSuccess(true)
      e.target.reset()
      // Basari mesaji 5 saniye sonra kaybolur
      setTimeout(() => setFormSuccess(false), 5000)
    }
  }

  return (
    <>
      {/* Uygulama-3: Ana icerigi atla (skip navigation) */}
      <a href="#main-content" className="skip-link">
        Ana icerege atla
      </a>

      {/* Uygulama-1/2/3/5: Header + H1 + Nav */}
      <header>
        <h1>Yunus Emre Köseoğlu</h1>

        {/* Uygulama-3: aria-label eklendi */}
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama-3: id="main-content" skip-link hedefi */}
      <main id="main-content">

        {/* Uygulama-1/2/5: Hakkimda bolumu */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          {/* Uygulama-2: Profil fotografi - figure + figcaption */}
          <figure className="profile-figure">
            <img
              src="profil.jpg"
              alt="Yunus Emre Köseoğlu'in vesikalik fotografi"
              className="profile-img"
            />
            <figcaption>Yunus Emre Köseoğlu</figcaption>
          </figure>

          <p>
            Ben Yunus Emre Köseoğlu. Web Proglama dersi için hazırladığım portfolyo sitesi.
          </p>

          {/* Uygulama-5: Teknoloji listesi */}
          <ul className="tech-list">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>Python</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git &amp; GitHub</li>
          </ul>
        </section>

        {/* Uygulama-1/2/5: Projeler bolumu */}
        <section id="projeler">
          <h2>Projelerim</h2>

          {/* Uygulama-5: Her proje bir <article> icinde */}
          <div className="projects-grid">
            <article className="project-card">
              <h3>Proje 1</h3>
              <p>
                1. proje hakkında bilgiler.
              </p>
              <p><strong>Teknolojiler:</strong> HTML5, CSS3, React, Vite</p>
              {/* Uygulama-2: Anlamli alt metinli ekran goruntusu */}
              <figure>
                <img
                  src="proje1.png"
                  alt="1. projenin ana sayfasinin goruntusu, baslik ve navigasyon menusu gorunuyor"
                />
                <figcaption>1. proje &mdash; Ana Sayfa</figcaption>
              </figure>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub&apos;da Goruntule
              </a>
            </article>

            <article className="project-card">
              <h3>Proje 2</h3>
              <p>
                2. proje hakkında bilgiler.
              </p>
              <p><strong>Teknolojiler:</strong> React, Local Storage, CSS Modules</p>
              <figure>
                <img
                  src="proje2.png"
                  alt="2. projenin ana sayfasinin goruntusu, gorevlerin listelendiği ekran goruntusu"
                />
                <figcaption>2. proje &mdash; Liste Gorunumu</figcaption>
              </figure>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub&apos;da Goruntule
              </a>
            </article>
          </div>
        </section>

        {/* Uygulama-1/4/5: Iletisim bolumu + dogrulamali form */}
        <section id="iletisim">
          <h2>Iletisim</h2>

          {/* Uygulama-4: Dogrulamali iletisim formu — accessible */}
          <form action="#" method="POST" noValidate onSubmit={handleSubmit}>
            <fieldset>
              <legend>Iletisim Formu</legend>

              {/* Basari bildirimi — ekran okuyucular icin live region */}
              {formSuccess && (
                <div className="success-msg" role="status" aria-live="polite">
                  ✓ Formunuz basariyla gonderildi!
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={formErrors.name ? 'true' : 'false'}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert">
                  {formErrors.name}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={formErrors.email ? 'true' : 'false'}
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert">
                  {formErrors.email}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-required="true"
                  aria-invalid={formErrors.subject ? 'true' : 'false'}
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert">
                  {formErrors.subject}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-required="true"
                  aria-invalid={formErrors.message ? 'true' : 'false'}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert">
                  {formErrors.message}
                </small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Uygulama-1/5: Footer */}
      <footer>
        <p>&copy; 2025 Yunus Emre Köseoğlu. Tum haklari saklidir.</p>

        {/* Uygulama-5: Sosyal medya baglantilari */}
        <nav aria-label="Sosyal medya baglantilari">
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/YunusEmreksglu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yunus-emre-k%C3%B6seoglu-6594761a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App
