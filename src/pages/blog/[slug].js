import Image from "next/image"
// import matter from "gray-matter"
// import ReactMarkdown from 'react-markdown'
import Layout from "../../components/layout"
import * as style from "../../styles/singleBlog.module.scss"
import Animation from "../../components/animation"
import { client } from "../../libs/client"
import Date from "../../libs/date"

const SingleBlog = ({ blog }) => {
  console.log(blog)
  return (
    <Layout>
      <div className={`defaultContainer ${style.singleBlogPage}`}>
        <div className={style.singleBlogContainer}>
          <div className={style.singleBlog}>
            <img src={blog.image.url} alt="ブログ画像" height="520px" width="100%" style={{ objectFit: "cover" }} className={style.singleBlogThumb} />
            <span className={style.singleBlogDate}><Date dateString={blog.time} /></span> 
            <h1 className={style.singleBlogHead}>{blog.title}</h1>
            <p className={style.singleBlogContent}>{blog.body}</p>
          </div> 
        </div>
      </div>
      <Animation />
    </Layout>
  )
}

export default SingleBlog

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};