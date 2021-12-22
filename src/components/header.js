import Link from "next/link"
import Image from "next/image"
import * as style from "../styles/common.module.scss"

const header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerInner}>
        <Link href="/"> 
          <a>
            <Image src="/images/logo.png" alt="ロゴ" width={70} height={70}/>
          </a>
        </Link>
        <ul className={style.headerInner__navLists}>
          <li><Link href="/blog"><a>ブログ一覧</a></Link></li>
          <li><Link href="/contact"><a>お問い合わせ</a></Link></li>
        </ul>
      </div>
    </header>
  )
}

export default header