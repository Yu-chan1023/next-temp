import * as style from '../styles/404.module.scss'
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={`defaultContainer ${style.notFoundContainer}`}>
        <h1>404:Not Found</h1>
        <p>ページが見つかりません。</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage;