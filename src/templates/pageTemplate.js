import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const image = frontmatter.image ? getImage(frontmatter.image.childImageSharp?.gatsbyImageData) : null

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Helmet>
        <meta name="keywords" content={frontmatter.keywords.join(", ")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": frontmatter.title,
            "image": image ? image.images.fallback.src : "",
            "datePublished": frontmatter.date,
            "dateModified": frontmatter.date,
            "author": {
              "@type": "Person",
              "name": "rinOliver"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mancing138",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mancing138.org/aset/mancing138%20mendang%20mudah.png"
              }
            },
            "description": frontmatter.description
          })}
        </script>
      </Helmet>
      <div>
        <h1>{frontmatter.title}</h1>
        {image && <GatsbyImage image={image} alt={frontmatter.title} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        keywords
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default PageTemplate
