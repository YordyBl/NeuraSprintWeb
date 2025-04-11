import Image from "next/image";

import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const Location = () => {
  return (
    <footer className={"bg-black text-[#bcbcbc] text-sm py-10 text-center "}>
      <div className="grid grid-cols-2 container">

        <div className="flex flex-col text-white justify-center text-center align-middle gap-2">
          <div className="flex gap-2   justify-center pb-8 ">
            Logo
            <p>NeuroSprint</p>
          </div>
          <p className="text-sm">gaba@gmail.com</p>
          <div className="flex justify-center gap-4 pb-4">

          <img src={SocialX} alt="Twitter" width={24} height={24} />
 
<img src={SocialInsta} alt="Twitter" width={24} height={24} />

<img src={SocialLinkedIn} alt="Twitter" width={24} height={24} />

          </div>
          <div>
            <p >Neura Sprint</p>
            <p>Calle Parque Osores 175 Dep. 504</p>
            <p>Pueblo Libre</p>
          </div>
        </div>
        <div>Imagen</div>
      </div>
    </footer>
  );
};
export default Location;