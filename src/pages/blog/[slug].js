import Image from "next/image"
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/layout"
import * as style from "../../styles/singleBlog.module.scss"

const SingleBlog = (props) => {
  return (
    <Layout>
      <div className={`defaultContainer ${style.singleBlogPage}`}>
        <div className={style.singleBlogContainer}>
          <div className={style.singleBlog}>
            <Image src={props.frontmatter.image} alt="ブログ画像" height={520} width={920} objectFit="cover" className={style.singleBlogThumb} />
            <span className={style.singleBlogDate}>{props.frontmatter.date}</span> 
            <h1 className={style.singleBlogHead}>{props.frontmatter.title}</h1>
            {/* <ReactMarkdown children={props.markdownBody} className={style.singleBlogContent} /> */}
          </div> 
        </div>
      </div>
    </Layout>
  )
}

export default SingleBlog

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../data', true, /\.md$/))

  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`) 

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const data = await import(`../../data/${slug}.md`)
  const singleDocument = matter(data.default)

  return {
    props: {
      frontmatter: singleDocument.data,         
      markdownBody: singleDocument.content, 
    }
  }
}
