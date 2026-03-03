# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640 px ve 1024 px seçtim?**
  640 px, çoğu telefonun yatay genişliğini aştığı ve tablet boyutuna geçtiği yaygın bir eşik noktasıdır; 1024 px ise tabletlerin bitip masaüstü ekranların başladığı sınırdır. Bu iki değer, Tailwind CSS gibi popüler sistemlerin `sm` ve `lg` kırılma noktalarıyla örtüşür ve içerik akışını doğal bir şekilde üçe böler.

- **İçeriğim bu noktalarda nasıl değişiyor?**
  639 px ve altında header dikey yığılır, navigasyon linkleri tam genişlikte ortalanır. 640 px'den itibaren "Hakkımda" bölümü yan yana (row) düzene geçer, section padding'leri büyür ve submit butonu tam genişlikten çıkar. 1024 px'de ise proje kartları `repeat(3, 1fr)` ile üç sütuna yerleşir ve section iç boşlukları en geniş haline ulaşır.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?**
  Header tek satırda iki öğe (başlık + nav) barındıran basit bir düzendir. Flexbox'ın `justify-content: space-between` özelliği bu iki öğeyi iki uca yaslamak için idealdir; ayrıca `flex-wrap: wrap` sayesinde dar ekranlarda otomatik alt satıra kayar.

- **Proje kartları için neden Grid seçtim?**
  Grid, iki boyutlu bir düzen sistemi olduğu için kart galerisi gibi eşit boyutlu öğeleri satır ve sütuna dağıtmada Flexbox'a göre çok daha az kod gerektirir. `grid-template-columns` ile tek satırda tüm sütun yapısını tanımlayabildim.

- **`auto-fit` mı `auto-fill` mı kullandım, neden?**
  `auto-fit` kullandım. `auto-fit` boş sütun izlerini daraltıp (collapse) mevcut kartları mümkün olduğunca genişletir; böylece ekran geniş olsa bile kartlar arasında gereksiz boş sütun kalmaz. `auto-fill` ise boş izleri koruyacağı için az sayıda kart olduğunda sağda istenmeyen boşluklar oluşabilirdi.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?**
  Koyu tema (`--color-bg: #0f172a`) üzerine mor vurgular (`--color-primary: #8b5cf6`) ve yeşil aksan (`--color-accent: #10b981`) tercih ettim. Koyu arka plan göz yorgunluğunu azaltır; mor–yeşil kontrast çifti WCAG AA oranlarını karşılar ve modern bir portfolyo hissi verir.

- **Spacing skalasını nasıl belirledim?**
  `0.25 rem → 4 rem` arasında 4 px tabanlı (4-8-16-24-32-48-64) bir geometrik skala oluşturdum. Bu, elemanlar arası tutarlı ritim sağlar; her adım bir öncekinin yaklaşık 1.5–2 katı büyüdüğü için tasarımda görsel hiyerarşi korunur.

- **Fluid typography için `clamp()` değerlerini nasıl ayarladım?**
  Her metin boyutu için minimum (`rem`), tercih edilen (`rem + vw`) ve maksimum (`rem`) olmak üzere üç değer belirledim. Örneğin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` ile mobilde 16 px'den başlayıp geniş ekranda 18 px'e kadar akıcı şekilde büyür; böylece herhangi bir media query olmadan tüm ekran boyutlarında okunabilir kalır.

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?**
  Temel stiller (header flex-wrap, tek sütun grid vb.) herhangi bir media query olmadan mobil görünüme göre yazıldı. Daha sonra `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile yalnızca büyüyen ekranlar için ek kurallar eklendi; böylece mobil cihazlar gereksiz CSS yükü taşımaz.

- **Hangi elemanlar breakpoint'lerde değişiyor?**
  Mobilde header dikey yığılır ve nav linkleri tam genişlik olur. 640 px'de "Hakkımda" bölümü yan yana düzene geçer, section padding'leri büyür ve submit butonu küçülür. 1024 px'de proje grid'i `repeat(3, 1fr)` olur ve section iç boşlukları `--space-3xl`'e çıkar.

- **Görsel boyutlarını nasıl yönettim?**
  Tüm `<img>` etiketlerine global olarak `max-width: 100%; height: auto;` uyguladım; bu sayede görseller kapsayıcıdan taşmaz ve en-boy oranını korur. Proje kartlarındaki görsellere `height: 200px; object-fit: cover` verdim, böylece farklı oranlardaki fotoğraflar kart içinde tutarlı yükseklikte ve kırpılmış şekilde görünür. Profil fotoğrafına ise `border-radius: 9999px; aspect-ratio: 1` ile daire maskesi uyguladım.
