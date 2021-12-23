import Link from 'next/link';
import Image from 'next/image';
import * as style from '../styles/index.module.scss'
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = () => {
  return (
    <Layout>
      <SEO title="トップページ" description="これはトップページです" />
      <div className={`defaultContainer ${style.indexContainer}`}>
        <h1>これはトップページです。</h1>
      </div>
    </Layout>
  )
}

export default Index;