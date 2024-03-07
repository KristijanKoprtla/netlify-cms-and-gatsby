import * as React from "react"
import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

function Index() {
  const data = useStaticQuery(graphql`
    {
      allInstagramContent(sort: { timestamp: DESC }) {
        edges {
          node {
            id

            timestamp
            caption

            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  transformOptions: { fit: COVER, cropFocus: CENTER }
                )
                id
              }
              nlink
              publicURL
              url
            }
          }
        }
      }
    }
  `)

  const results = data.allInstagramContent.edges
  console.log(results)
  return (
    <Layout>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {results.map(result => (
            <Col key={result.node.id}>
              <a
                href={`https://www.instagram.com/p/${result.node.id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  image={getImage(result.node.localFile)}
                  alt={result.node.localFile.childImageSharp.id}
                  className="rounded"
                />
                <p>Likes: {result.node.likes}</p>
                <p>
                  Comments:{" "}
                  {result.node.comments > 0 ? result.node.comments : 0}
                </p>
                <p>{result.node.mediaType}</p>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default Index
