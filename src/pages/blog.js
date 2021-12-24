import Link from "next/link"
import Image from "next/image"
import matter from "gray-matter"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"
import Animation from "../components/animation"
import { client } from "../libs/client"
import Date from "../libs/date"

const Blog = ({ blogs }) => {
  return (
    <Layout>
      <div className={style.blogPage}>
        <div className={style.blogContainer}>
          <h1 className={style.blogHead}>ブログ一覧ページ</h1>
          <div className={style.blogLists}>
            {blogs.map((blog, index) => {
              return (
                <div key={blog.id} className={style.blog}>
                  <img src={blog.image.url} alt="ブログ画像" width="100%" height="200px" className={style.blogThumb} style={{objectFit: "cover"}} />
                  <div className={style.blogContents}>
                    <span><Date dateString={blog.time} /></span>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <Link href={`/blog/${blog.id}`}><a>Read More</a></Link>
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
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blogs: data.contents,
    },
  };
}