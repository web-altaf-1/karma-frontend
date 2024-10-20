import Image from "next/image";
import thumb from '@/app/assets/images/home/find-job-thumb.png';
import FindJobIcon1 from "@/app/assets/icons/home/FindJobIcon1";

const FindJob = () => {
  return (
    <div className="find-job__section">
        <div className="find-job__container">
            {/* <h2 className="find-job__title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h2> */}
            <div className="find-job__left">
                <Image src={thumb} width={417} height={543} alt="thumb" className="find-job__thumb" />
            </div>
            <div className="find-job__right">
                <div className="border"></div>
                <div className="find-job__item">
                    <div className="item-icon">
                        <div className="item-icon-wrap">
                            <FindJobIcon1 />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod.</p>
                    </div>
                </div>
                <div className="find-job__item">
                    <div className="item-icon">
                        <div className="item-icon-wrap">
                            <FindJobIcon1 />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod.</p>
                    </div>
                </div>
                <div className="find-job__item">
                    <div className="item-icon">
                        <div className="item-icon-wrap">
                            <FindJobIcon1 />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="content-title">Lorem ipsum dolor sit amet.</h3>
                        <p className="content-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default FindJob
