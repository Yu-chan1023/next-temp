import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss" 
import Animation from "../components/animation"

const Contact = () => {
  return (
    <Layout>
      <div className={`defaultContainer ${style.contactPage}`}>
        <div className={style.contactContainer}>
          <h1>お問い合わせページ</h1>
          <p>お気軽にご連絡ください</p>
          <form action="https://formspree.io/f/xvoloeno" method="POST">
            <label htmlFor="name">お名前</label>  
            <input type="text" name="name" id="name" required/>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="textarea">ご用件</label>
            <textarea name="message" rows="10" id="textarea" required></textarea>
            <button type="submit">送信</button>
          </form> 
        </div>
      </div>
      <Animation />
    </Layout>
  )
}

export default Contact