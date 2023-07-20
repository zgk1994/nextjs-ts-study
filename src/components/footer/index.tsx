import type { NextPage } from 'next'
import Image from 'next/image'
import icon_fcbox from '@/assets/icon_fcbox.png'
const Footer: NextPage = () => {
  return (
    <>
      <div className="app-door-foot">
        <div className="app-link">
          <div className="link-col-item">
            <h3>友情链接</h3>
            <div className="link-title">
              <Image src={icon_fcbox} alt="" />
              <a target="blank" href="https://www.fcbox.com/">
                丰巢科技
              </a>
            </div>
          </div>
          <div className="link-col-item">
            <h3>开发支持</h3>
            <div className="link-title">
              <a
                href={`/main/doc/platform?menuType=intro&selectdMenuKey=platform`}>
                新手教程
              </a>
              <span className="dividing-line">|</span>
              <a
                href={`/main/doc/docApiListAll?menuType=doc&selectdMenuKey=docApiListAll`}>
                文档中心
              </a>
              <span className="dividing-line">|</span>
              <a
                href={`/main/doc/faq?menuType=faq&selectdMenuKey=faq_null&typeName=所有FAQ&typeId=null`}>
                技术支持
              </a>
            </div>
          </div>
          <div className="link-col-item">
            <h3>联系我们</h3>
            <div className="link-title">客服电话：40006 33333 (8:00-22:00)</div>
          </div>
        </div>
        <div className="app-copyright">
          粤ICP备 15045927号 深圳市丰巢科技有限公司版权所有
        </div>
      </div>
    </>
  )
}
export default Footer
