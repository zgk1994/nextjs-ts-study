import Image from 'next/image'
import serviceImg01 from '@/assets/icon_home_存取服务.png'
import serviceImg02 from '@/assets/icon_home_寄件服务.png'
import serviceImg03 from '@/assets/icon_home_派件服务.png'
import serviceImg04 from '@/assets/icon_home_其他服务.png'

import cooperate01 from '@/assets/img_高覆盖率.png'
import cooperate02 from '@/assets/img_合作共赢.png'
import cooperate03 from '@/assets/img_资源置换.png'

import steps01 from '@/assets/icon_steps_1.png'
import steps02 from '@/assets/icon_steps_2.png'
import steps03 from '@/assets/icon_steps_3.png'
import steps04 from '@/assets/icon_steps_4.png'

import banner from '@/assets/banner.png'
import { useState } from 'react'

export default function Index() {
  const [appState] = useState<{ loged: Boolean }>({ loged: false })
  // let { appState } = useContext(AppContext)
  function handleGoToAdmin() {
    if (!appState.loged) {
      // history.push('/login')
    } else {
      // history.push('/service-list')
    }
  }
  return (
    <>
      <div className="door-home">
        <div className="door-banner-wrap">
          <Image
            alt="banner"
            src={banner}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="door-banner-title">
            <h1>丰巢开放平台上线啦！</h1>
            <h3>丰巢将开放存取、寄件、派件等服务能力给第三方商家对接使用</h3>
            <div onClick={handleGoToAdmin} className="create-btn">
              创建服务
            </div>
          </div>
        </div>
        <div className="door-service-wrap">
          {/* <img src={test} alt="" /> */}
          <h1>便捷的智能寄送服务平台</h1>
          <h3>
            丰巢致力于为客户提供智能可靠的存取派寄件服务，享受高效配送，轻松省时又省力
          </h3>
          <div className="door-service-row">
            <div className="service-item">
              <Image src={serviceImg01} alt="" />
              <h1>存取服务</h1>
              <p>存取服务，智能可靠，有丰巢即安心</p>
            </div>
            <div className="service-item">
              <Image src={serviceImg02} alt="" />
              <h1>寄件服务</h1>
              <p>高效寄件，无需等待，一键解决客户难题</p>
            </div>
            <div className="service-item">
              <Image src={serviceImg03} alt="" />
              <h1>派件服务</h1>
              <p>派件轻松，批量处理，快速便捷不出错</p>
            </div>
            <div className="service-item">
              <Image src={serviceImg04} alt="" />
              <h1>其他服务</h1>
              <p>丰巢致力于为客户开拓更多的智能解决方案，共创美好未来</p>
            </div>
          </div>
        </div>
        <div className="door-cooperate-advantage-wrap">
          {/* <img src={test2} alt="" /> */}
          <h1>多样化合作优势，提供更多业务资源及服务支持</h1>
          <div className="cooperate-wrap">
            <Image src={cooperate01} alt="" />
            <Image src={cooperate02} alt="" />
            <Image src={cooperate03} alt="" />
          </div>
        </div>
        <div className="door-join-flow">
          {/* <img src={test3} alt="" /> */}
          <h1>商家服务接入流程</h1>
          <div className="steps-wrap">
            <div>
              <Image src={steps01} alt="" />
              <h3>注册入住</h3>
            </div>
            <span></span>
            <div>
              <Image src={steps02} alt="" />
              <h3>分配服务</h3>
            </div>
            <span></span>
            <div>
              <Image src={steps03} alt="" />
              <h3>接口对接</h3>
            </div>
            <span></span>
            <div>
              <Image src={steps04} alt="" />
              <h3>联调/上线</h3>
            </div>
          </div>
          <div onClick={handleGoToAdmin} className="create-btn">
            创建服务
          </div>
        </div>
      </div>
    </>
  )
}
