import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage,StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import "./index.css"

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "YYYY-MM-DD")
            keywords
            image {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 300, height: 150)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta name="keywords" content="Mancing138, agen slot, slot online, menang mudah, anti rungkad, cuan maksimal" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "mainEntity": posts.map(({ node }) => ({
              "@type": "Article",
              "headline": node.frontmatter.title,
              "image": node.frontmatter.image ? node.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src : "",
              "datePublished": node.frontmatter.date,
              "author": {
                "@type": "Person",
                "name": "bimaOliver"
              },
              "publisher": {
                "@type": "Organization",
                "name": "mancing138",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mancing138.org/aset/mancing138%20maxwin.png"
                }
              },
              "description": node.frontmatter.description
            }))
          })}
        </script>
      </Helmet>
      <div><StaticImage 
         src="../images/mancing138-banner-12.webp" 
         width={10000}
         alt="banner promo"/>
        </div>
        <div className="redir">
            <Link className="btn1"to="https://mancing138b.lol/login">MASUK</Link>
            <Link className="btn"to="https://mancing138b.lol/register">DAFTAR</Link>
            </div>
      <div>
      <h1>Mancing138: Agen Slot Terbaik dan Terpercaya Dijamin Menang Mudah, Anti Rungkad, dan Cuan Maksimal</h1>
      <section>
        <p>Bayangkan dunia di mana keberuntungan selalu berada di pihak Anda. Di mana setiap kali Anda memutar gulungan slot, kemenangan besar menanti Anda. Inilah dunia yang kami tawarkan di Mancing138, agen slot terbaik dan terpercaya yang menjamin pengalaman bermain tak terlupakan. Dengan komitmen kami terhadap keadilan, kenyamanan, dan keuntungan maksimal, Anda akan merasakan sensasi kemenangan yang nyata dan konsisten.</p>

        <h2>Mengapa Memilih Mancing138? Kisah Keberuntungan yang Nyata</h2>
        <p>Bukan rahasia lagi bahwa menemukan agen slot yang benar-benar bisa diandalkan adalah tantangan tersendiri. Namun, bagi mereka yang telah menemukan Mancing138, mereka menemukan lebih dari sekadar platform permainan. Mereka menemukan mitra sejati dalam pencarian mereka akan keberuntungan.</p>

        <h3>Cerita Sukses Para Pemenang</h3>
        <p>Di Mancing138, setiap kemenangan adalah cerita yang layak untuk diceritakan. Seperti cerita Budi, seorang pemain setia yang awalnya skeptis. Namun, setelah mencoba bermain di Mancing138, pandangannya berubah. “Aku tidak pernah merasa lebih yakin. Setiap putaran memberi harapan baru, dan aku menang lebih sering dari yang pernah kubayangkan,” katanya.</p>

        <h2>Kemenangan Mudah dan Adil</h2>
        <p>Kami memahami bahwa keadilan adalah kunci dari pengalaman bermain yang menyenangkan. Itulah mengapa Mancing138 menggunakan algoritma permainan yang transparan dan diaudit secara rutin. Setiap kali Anda bermain, Anda dapat yakin bahwa peluang menang Anda adalah nyata dan adil. Tidak ada lagi rasa khawatir tentang kecurangan atau manipulasi.</p>

        <h3>Pengalaman Anti Rungkad</h3>
        <p>Teknologi canggih kami memastikan platform kami bebas dari gangguan teknis. Bayangkan bermain tanpa harus khawatir tentang koneksi terputus atau lag yang mengganggu. Di Mancing138, kami menjamin pengalaman bermain yang mulus dan menyenangkan. Anda bisa fokus sepenuhnya pada permainan dan strategi Anda, tanpa gangguan.</p>

        <h2>Cuan Maksimal: Lebih Dari Sekadar Bonus</h2>
        <p>Tidak hanya kemenangan yang kami tawarkan. Di Mancing138, kami memastikan Anda mendapatkan cuan maksimal dengan berbagai bonus dan promo menarik. Bayangkan Anda sedang bermain dan tiba-tiba mendapatkan bonus besar yang meningkatkan saldo Anda. Rasanya seperti menemukan harta karun di tengah lautan!</p>

        <h3>Promo dan Bonus Melimpah</h3>
        <p>Setiap pemain di Mancing138 berhak mendapatkan berbagai promo menarik. Dari bonus deposit, cashback, hingga free spins, setiap hari adalah kesempatan baru untuk menang besar. “Promo di Mancing138 benar-benar bikin ketagihan. Setiap kali deposit, selalu ada bonus tambahan yang bikin main lebih seru,” ujar Lisa, salah satu pemain setia kami.</p>

        <h2>Keamanan dan Kenyamanan: Prioritas Utama</h2>
        <p>Kami tahu betapa pentingnya keamanan dalam bermain online. Mancing138 menjamin keamanan data dan privasi Anda dengan sistem keamanan terbaik. Anda bisa bermain dengan tenang, mengetahui bahwa informasi pribadi Anda aman bersama kami.</p>

        <h3>Dukungan Pelanggan 24/7</h3>
        <p>Tim dukungan pelanggan kami selalu siap membantu Anda kapan saja. Baik itu pertanyaan teknis, masalah pembayaran, atau sekadar ingin berbagi cerita kemenangan, kami di sini untuk Anda. “Pelayanan pelanggan di Mancing138 luar biasa. Mereka selalu cepat tanggap dan sangat membantu,” kata Rina, seorang pemain yang puas.</p>

        <h2>Bergabunglah dengan Komunitas Pemenang</h2>
        <p>Di Mancing138, Anda bukan hanya pemain, tapi juga bagian dari komunitas besar yang saling mendukung. Temukan teman baru, bagikan strategi, dan rayakan kemenangan bersama. Setiap putaran, setiap kemenangan, adalah langkah menuju kesuksesan yang lebih besar.</p>

        <h3>Ayo, Bergabung Sekarang!</h3>
        <p>Jangan tunggu lebih lama lagi. Bergabunglah dengan Mancing138 dan rasakan sendiri sensasi bermain slot dengan kemenangan yang dijamin, anti rungkad, dan cuan maksimal. Jadilah bagian dari kisah sukses kami dan nikmati setiap momen kemenangan.</p>

        <p>Mancing138 – Di sinilah keberuntungan Anda dimulai.</p>
    </section>
    </div>
      <div className="posts-container">
        {posts.map(({ node }) => {
          const image = node.frontmatter.image ? getImage(node.frontmatter.image.childImageSharp?.gatsbyImageData) : null
          return (
            <div key={node.fields.slug} className="post-item">
              {image && (
                <GatsbyImage image={image} alt={node.frontmatter.title} className="post-image" />
              )}
              <div className="post-content">
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
