import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { Navigation, Thumbs } from "swiper/modules"

function Index() {
  const [swiper, setSwiper] = useState(null)

  //drugi slider
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/about-us/" }) {
        frontmatter {
          buttonYear
          buttonYear10
          buttonYear11
          buttonYear2
          buttonYear3
          buttonYear4
          buttonYear5
          buttonYear6
          buttonYear7
          buttonYear8
          buttonYear9
          description
          description10
          description11
          description2
          description3
          description4
          description5
          description6
          description7
          description8
          description9
          title
          title10
          title11
          title2
          title3
          title4
          title5
          title6
          title7
          title8
          title9
          titleDesc
          titleDesc10
          titleDesc11
          titleDesc2
          titleDesc3
          titleDesc4
          titleDesc5
          titleDesc6
          titleDesc7
          titleDesc8
          titleDesc9
          featuredImage {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage2 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage3 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage4 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage5 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage6 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage7 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage8 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage9 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage10 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
          featuredImage11 {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, width: 343)
            }
          }
        }
      }
    }
  `)

  const frontmatter = data.markdownRemark.frontmatter

  const goToSlide = index => {
    if (swiper) {
      swiper.slideTo(index) // Pomjeri slider na određeni indeks
    }
  }

  return (
    <>
      <section>
        {/* <Swiper
          className="mySwiper "
          style={{ width: "65%" }}
          slidesPerView={7}
          initialSlide={6}
        >
          <SwiperSlide>
            <span className="cube" data-content="1900"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1910"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1920"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1930"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1940"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1950"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1960"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1970"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1980"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="1990"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="2000"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="2010"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="2020"></span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="cube" data-content="2024"></span>
          </SwiperSlide>
        </Swiper> */}
        <Swiper
          slidesPerView={2.2}
          spaceBetween={10}
          initialSlide={6}
          modules={[Navigation, Thumbs]}
          className="mySwiper2"
          navigation={{
            nextEl: ".navRight",
            prevEl: ".navLeft",
          }}
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
            clickable: true,
          }}
          onSwiper={swiper => setSwiper(swiper)}
          allowSlideNext={true} // Onemogući pomicanje na sljedeću sliku
          allowSlidePrev={true} // Onemogući pomicanje na prethodnu sliku
          allowTouchMove={false} // Onemogući pomicanje slika povlačenjem prsta
          allowMouseEvents={true} // Omogući pomicanje slika mišem
        >
          <div className="swiper-custom-nav">
            <div className="navLeft">&lt;</div>
            <div className="navRight">&gt;</div>
          </div>
          <div className="pagination">
            {/* Dugmad za navigaciju */}
            <button onClick={() => goToSlide(0)}>1900</button>
            <button onClick={() => goToSlide(1)}>1910</button>
            <button onClick={() => goToSlide(2)}>1920</button>
            <button onClick={() => goToSlide(3)}>1930</button>
            <button onClick={() => goToSlide(4)}>1940</button>
            <button onClick={() => goToSlide(5)}>1950</button>
            <button onClick={() => goToSlide(6)}>1960</button>
            <button onClick={() => goToSlide(7)}>1970</button>
            <button onClick={() => goToSlide(8)}>1980</button>
            <button onClick={() => goToSlide(9)}>1990</button>
            <button onClick={() => goToSlide(10)}>2000</button>
            {/* Dodaj više dugmadi prema potrebi */}
          </div>
          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage)}
              alt={frontmatter.title}
            />
            <h4>{frontmatter.title}</h4>
          </SwiperSlide>
          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage2)}
              alt={frontmatter.title2}
            />
            <h4>{frontmatter.title2}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage3)}
              alt={frontmatter.title3}
            />
            <h4>{frontmatter.title3}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage4)}
              alt={frontmatter.title4}
            />
            <h4>{frontmatter.title4}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage5)}
              alt={frontmatter.title5}
            />
            <h4>{frontmatter.title5}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage6)}
              alt={frontmatter.title6}
            />
            <h4>{frontmatter.title6}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage7)}
              alt={frontmatter.title7}
            />
            <h4>{frontmatter.title7}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage8)}
              alt={frontmatter.title8}
            />
            <h4>{frontmatter.title8}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage9)}
              alt={frontmatter.title9}
            />
            <h4>{frontmatter.title9}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage10)}
              alt={frontmatter.title10}
            />
            <h4>{frontmatter.title10}</h4>
          </SwiperSlide>

          <SwiperSlide className="swipeCard">
            <GatsbyImage
              image={getImage(frontmatter.featuredImage11)}
              alt={frontmatter.title11}
            />
            <h4>{frontmatter.title11}</h4>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Index
