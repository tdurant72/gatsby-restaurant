import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
{
  getImages:allFile(filter:{relativeDirectory:{eq:"homeGallery"}}){
    edges{
      node{
        childImageSharp{
          fluid(maxWidth:500){
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
const Gallery = () => {
    return (
        <StaticQuery
            query={GET_IMAGES}
            render={data => {
                const images = data.getImages.edges
                return (
                    <Section>
                        <GalleryWrapper>
                            {images.map(({ node }, index) => (
                                <div key={index} className={`item item-${index + 1}`}>
                                    <Img fluid={node.childImageSharp.fluid} />
                                    <p className="info">Delicious meals</p>
                                </div>
                            )
                            )}
                        </GalleryWrapper>
                    </Section>
                )
            }}
        />
    )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media(min-width:576px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap:1rem;
  }
  @media(min-width:577px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width:992px){
    .gatsby-image-wrapper{
      height: 100%;
    }
    grid-template-areas:
    'one one two'
    'one one three';
    .item-1{
    grid-area:one;
    }
    .item-2{
      grid-area:two;
    }
    .item-3{
      grid-area:three;
    }
  }
  

`

export default Gallery
