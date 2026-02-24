import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB - 1</h2>

      <div className="card">
        <h3>Kişisel Bilgiler</h3>
        <p><strong>Ad Soyad:</strong> Yunus Emre Köseoğlu</p>
        <p><strong>Öğrenci No:</strong> 230542023</p>
        <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği</p>
      </div>

      <div className="card">
        <h3>Hakkımda</h3>
        <p className="intro">
          Merhaba! Ben Yunus Emre, yazılım geliştirmeye tutkuyla bağlı bir bilgisayar mühendisliği öğrencisiyim.
        </p>
      </div>

      <div className="card">
        <h3>Hobiler</h3>
        <ul className="hobbies-list">
          <li>Yazılım Geliştirme</li>
          <li>Açık Kaynak Projelere Katkı</li>
          <li>Kitap Okuma</li>
          <li>Satranç</li>
        </ul>
      </div>
    </div>
  )
}

export default App
