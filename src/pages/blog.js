import Link from "next/link"
import Image from "next/image"
import matter from "gray-matter"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"
import Animation from "../components/animation"

const Blog = (props) => {
  return (
    <Layout>
      <div className={style.blogPage}>
        <div className={style.blogContainer}>
          <h1 className={style.blogHead}>ブログ一覧ページ</h1>
          <div className={style.blogLists}>
            {props.blogs.map((blog, index) => {
              return (
                <div key={index} className={style.blog}>
                  <Image src="/images/blog01.jpeg" alt="ブログ画像" width={300} height={200} className={style.blogThumb}/>
                  <div className={style.blogContents}>
                    <span>{blog.frontmatter.date}</span>
                    <h3>{blog.frontmatter.title}</h3>
                    <p>{blog.frontmatter.excerpt}</p>
                    <Link href={`/blog/${blog.slug}`}><a>Read More</a></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Animation />
    </Layout>
  )
}

export default Blog


export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys()     
    const values = keys.map(context)
    const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
        const value = values[index]
        const document = matter(value.default)
        return {
            frontmatter: document.data,
            slug: slug
        }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(orderedBlogs))
    },
  }

}