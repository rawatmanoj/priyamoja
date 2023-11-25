"use client";
import Image, { StaticImageData } from "next/image";
import Card from "@/components/Card";
import { usePathname } from "next/navigation";
import ground from "../../../assets/images/2017/ground.jpg";
import IIT_DP from "../../../assets/images/2017/IIT_DP.jpg";
import canteen from "../../../assets/images/2017/canteen.jpg";
import college_ground from "../../../assets/images/2017/college_ground.jpg";
import cute_hair from "../../../assets/images/2017/cute_hair.jpg";
import whatsapp_dp from "../../../assets/images/2017/whatsapp_dp.jpg";
import skirt_pic from "../../../assets/images/2017/skirt_pic.jpg";
import priya_bijnor_trip from "../../../assets/images/2017/priya_bijnor_trip.jpg";
import primoja_wsm from "../../../assets/images/2017/primoja_wsm.jpg";
import pizzahut_wsm from "../../../assets/images/2017/pizzahut_wsm.jpg";
import first_date from "../../../assets/images/2017/first_date.jpg";
import fullmoon from "../../../assets/images/2017/fullmoon.jpg";
import no5cafe from "../../../assets/images/2018/5nocafe.jpg";
import college_ground2018 from "../../../assets/images/2018/college_ground.jpg";
import dslr_pic from "../../../assets/images/2018/dslr_pic.jpg";
import manoj_stare from "../../../assets/images/2018/manoj_stare.jpg";
import primijo_cp from "../../../assets/images/2018/primijo_cp.jpg";
import primojo_byd from "../../../assets/images/2018/primojo_byd.jpg";
import primojo_cafe from "../../../assets/images/2018/primojo_cafe.jpg";
import primojo_clg_back from "../../../assets/images/2018/primojo_clg_back.jpg";
import primojo_college_ground from "../../../assets/images/2018/primojo_college_ground.jpg";
import primojo_cp from "../../../assets/images/2018/primojo_cp.jpg";
import primojo_cutepic from "../../../assets/images/2018/primojo_cutepic.jpg";
import priya_wsm from "../../../assets/images/2018/priya_venice.jpg";
import priya_phone_theft from "../../../assets/images/2018/priya_phone_theft.jpg";
import priya_nehruplace from "../../../assets/images/2018/priya_nehruplace.jpg";
import priya_hkv from "../../../assets/images/2018/priya_hkv.jpg";
import priya_firstbirthday from "../../../assets/images/2018/priya_firstbirthday.jpg";
import priya_cp from "../../../assets/images/2018/priya_cp.jpg";
import priya_cp2 from "../../../assets/images/2018/priya_cp (2).jpg";
import priya_agresenkibaoli from "../../../assets/images/2018/priya_agresenkibaoli.jpg";
import primojo_venice from "../../../assets/images/2018/primojo_venice.jpg";
import primojo_v3s from "../../../assets/images/2018/primojo_v3s.jpg";
import primojo_train_museum from "../../../assets/images/2018/primojo_train_museum.jpg";
import primojo_selfie from "../../../assets/images/2018/primojo_selfie.jpg";
import primojo_potrait from "../../../assets/images/2018/primojo_potrait.jpg";
import primojo_lodigarden from "../../../assets/images/2018/primojo_lodigarden.jpg";
import primojo_kiss3 from "../../../assets/images/2018/primojo_kiss3.jpg";
import primojo_kiss from "../../../assets/images/2018/primojo_kiss.jpg";
import primojo_kiss2 from "../../../assets/images/2018/primojo_kiss (2).jpg";
import primojo_hkv3 from "../../../assets/images/2018/primojo_hkv3.jpg";
import primojo_hkv2 from "../../../assets/images/2018/primojo_hkv2.jpg";
import primojo_hkv from "../../../assets/images/2018/primojo_hkv.jpg";
import primojo_gip from "../../../assets/images/2018/primojo_gip.jpg";
import primojo_fish from "../../../assets/images/2018/primojo_fish.jpg";
import primojo_edm2 from "../../../assets/images/2018/primojo_edm2.jpg";
import stare_2019 from "../../../assets/images/2019/2019_stare.jpg";
import ali_bday from "../../../assets/images/2019/ali_bday.jpg";
import ali_bday2 from "../../../assets/images/2019/ali_bday2.jpg";
import ali_bday3 from "../../../assets/images/2019/ali_bday3.jpg";
import before_chennai from "../../../assets/images/2019/before_chennai.jpg";
import cafe from "../../../assets/images/2019/cafe.jpg";
import cafe_saket from "../../../assets/images/2019/cafe_saket.jpg";
import canteen_sleep from "../../../assets/images/2019/canteen_sleep.jpg";
import farewell from "../../../assets/images/2019/farewell2.jpg";
import funny_2 from "../../../assets/images/2019/funny_2.jpg";
import funny_selfie from "../../../assets/images/2019/funny_selfie.jpg";
import garden5senses from "../../../assets/images/2019/garden5senses.jpg";
import hand_kiss from "../../../assets/images/2019/hand_kiss.jpg";
import icecream_cute from "../../../assets/images/2019/icecream_cute.jpg";
import interview_selfie from "../../../assets/images/2019/interview_selfie.jpg";
import lastdayscollege from "../../../assets/images/2019/lastdayscollege.jpg";
import majo_bday from "../../../assets/images/2019/majo_bday.jpg";
import nazeer from "../../../assets/images/2019/nazeer.jpg";
import pizzahut_selfie from "../../../assets/images/2019/pizzahut_selfie.jpg";
import primoja_bday_2019 from "../../../assets/images/2019/primoja_bday_2019.jpg";
import priya_bimar from "../../../assets/images/2019/priya_bimar.jpg";
import priya_ghumi from "../../../assets/images/2019/priya_ghumi.jpg";
import priya_ghumi2 from "../../../assets/images/2019/priya_ghumi2.jpg";
import priya_gussa from "../../../assets/images/2019/priya_gussa.jpg";
import priya_nonu from "../../../assets/images/2019/priya_nonu.jpg";
import selectcity from "../../../assets/images/2019/selectcity.jpg";
import selfie_mall_2019 from "../../../assets/images/2019/selfie_mall_2019.jpg";
import selfie2019 from "../../../assets/images/2019/selfie2019.jpg";
import selfieonemore from "../../../assets/images/2019/selfieonemore.jpg";
import zoo from "../../../assets/images/2019/zoo.jpg";
import after_chennai from "../../../assets/images/2020/after_chennai.jpg";
import after_chennai2 from "../../../assets/images/2020/after_chennai2.jpg";
import afterchennaiwithali from "../../../assets/images/2020/afterchennaiwithali.jpg";
import cafe_gtb from "../../../assets/images/2020/cafe_gtb.jpg";
import cafe_gtb2 from "../../../assets/images/2020/cafe_gtb2.jpg";
import cp_cute from "../../../assets/images/2020/cp_cute.jpg";
import diggin from "../../../assets/images/2020/diggin.jpg";
import mcd_toy from "../../../assets/images/2020/mcd_toy.jpg";
import meetup from "../../../assets/images/2020/meetup.jpg";
import random from "../../../assets/images/2020/random.jpg";
import v3s from "../../../assets/images/2020/v3s.jpg";
import moja_bday_2020 from "../../../assets/images/2020/moja_bday_2020.jpg";
import chennai_video_call from "../../../assets/images/2020/chennai_video_call.jpg";
import IMG_20210221_170539 from "../../../assets/images/2021/IMG_20210221_170539.jpg";
import IMG_20210520_221142 from "../../../assets/images/2021/IMG_20210520_221142.jpg";
import IMG_20210704_160234 from "../../../assets/images/2021/IMG_20210704_160234.jpg";
import IMG_20210709_144003 from "../../../assets/images/2021/IMG_20210709_144003.jpg";
import IMG_20210807_152507 from "../../../assets/images/2021/IMG_20210807_152507.jpg";
import IMG_20210807_174039 from "../../../assets/images/2021/IMG_20210807_174039.jpg";
import IMG_20210807_174730 from "../../../assets/images/2021/IMG_20210807_174730.jpg";
import IMG_20210904_171809 from "../../../assets/images/2021/IMG_20210904_171809.jpg";
import IMG_20211003_155101 from "../../../assets/images/2021/IMG_20211003_155101.jpg";
import IMG_20211016_170500 from "../../../assets/images/2021/IMG_20211016_170500.jpg";
import IMG_20211205_171338 from "../../../assets/images/2021/IMG_20211205_171338.jpg";
import PriyaMoja2 from "../../../assets/images/2021/Priya Moja 2.png";
import moja_bday_2021 from "../../../assets/images/2021/moja_bday_2021.jpg";
import cute_priya_exc from "../../../assets/images/2021/cute_priya_exc.jpg";
import moja_priya_art from "../../../assets/images/2021/moja_priya_art.jpg";
import Snapchat1005017377 from "../../../assets/images/2022/Snapchat-1005017377.jpg";
import Snapchat1106726981 from "../../../assets/images/2022/Snapchat-1106726981.jpg";
import Snapchat1460263485 from "../../../assets/images/2022/Snapchat-1460263485.jpg";
import Snapchat146150667 from "../../../assets/images/2022/Snapchat-146150667.jpg";
import Snapchat1845891502 from "../../../assets/images/2022/Snapchat-1845891502.jpg";
import Snapchat2011702693 from "../../../assets/images/2022/Snapchat-2011702693.jpg";
import Snapchat392601326 from "../../../assets/images/2022/Snapchat-392601326.jpg";
import Snapchat430770529 from "../../../assets/images/2022/Snapchat-430770529.jpg";
import Snapchat496057686 from "../../../assets/images/2022/Snapchat-496057686.jpg";
import Snapchat720529857 from "../../../assets/images/2022/Snapchat-720529857.jpg";
import Snapchat894847928 from "../../../assets/images/2022/Snapchat-894847928.jpg";
import Snapchat975702885 from "../../../assets/images/2022/Snapchat-975702885.jpg";
import Snapchat990301403 from "../../../assets/images/2022/Snapchat-990301403.jpg";
import japenese_restaurent from "../../../assets/images/2022/20221129_153833.jpg";
import moja_bday_2022 from "../../../assets/images/2022/moja_bday_2022.jpg";
import holi_2022 from "../../../assets/images/2022/holi_2022.jpg";
import lemeredian from "../../../assets/images/2023/20230319_154851.jpg";
import lemeredian2 from "../../../assets/images/2023/20230319_234651.jpg";
import lemeredian3 from "../../../assets/images/2023/20230320_125316.jpg";
import funnypriya from "../../../assets/images/2023/20230514_171525.jpg";
import random_click from "../../../assets/images/2023/20230520_153243.jpg";
import mojabirthday_2023 from "../../../assets/images/2023/20230709_161304.jpg";
import mojabirthday_2023_2 from "../../../assets/images/2023/20230709_161817.jpg";
import priyabirthday_2023 from "../../../assets/images/2023/20230807_154550.jpg";
import priyabirthday_2023_2 from "../../../assets/images/2023/20230807_160203.jpg";
import moja_priya_galleria from "../../../assets/images/2023/20230826_161458.jpg";
import moja_priya_boa from "../../../assets/images/2023/20231013_182455.jpg";
import moja_priya_boa2 from "../../../assets/images/2023/20231013_191156.jpg";
import moustache_manoj from "../../../assets/images/2023/20231029_173945.jpg";
import selfie_2023 from "../../../assets/images/2023/Snapchat-1279040392.jpg";
import newyear_2023 from "../../../assets/images/2023/Snapchat-1324639959.jpg";
import lemeredian4 from "../../../assets/images/2023/Snapchat-1499128736.jpg";
import lacoste from "../../../assets/images/2023/Snapchat-653788284.jpg";
import moja_bday_2023 from "../../../assets/images/2023/moja_bday_2023.jpg";
import priya_police from "../../../assets/images/2023/priya_gun.jpg";
import moja_handsup from "../../../assets/images/2023/moja_handsup.jpg";

export default function Home() {
  const pathname = usePathname();
  const year = pathname.slice(6);
  let specialPic: StaticImageData | string = "";

  switch (year) {
    case "2017":
      specialPic = fullmoon;
      break;
    case "2018":
      specialPic = primojo_cutepic;
      break;
    case "2019":
      specialPic = zoo;
      break;
    case "2020":
      specialPic = after_chennai;
      break;
    case "2021":
      specialPic = zoo;
      break;
    case "2022":
      specialPic = zoo;
      break;
    case "2023":
      specialPic = lemeredian;
      break;
  }

  const getPicsYear = () => {
    if (year === "2023")
      return (
        <>
          <div className="years-column">
            <Card text="le meridian raat ko kacche mai" src={lemeredian2} />
            <Card text="le meridian se chori krke aate hue" src={lemeredian3} />
            <Card text="le meridian mai harqat kaat'te hue" src={lemeredian4} />
            <Card
              text="iss din inki shifting krne gye the usse phle inka samaan chdaya tha"
              src={funnypriya}
            />
            <Card text="ye bhul gya mai kaha ki hai" src={selfie_2023} />
            <Card
              text="ye mst lacoste wali tshirt bnaya😂. demon slayer wali theme bhi mst hai"
              src={moja_bday_2023}
            />
            <Card text="le meridian ka jalsa" src={lemeredian} />
          </div>
          <div className="years-column">
            <Card text="random click in CP" src={random_click} />
            <Card
              text="mera bday tha par teri pic achi aani chaiye mere lie to 😂. view mst tha or barish hori thi or mst lgra tha"
              src={mojabirthday_2023}
            />
            <Card text="mst selfie ek or" src={mojabirthday_2023_2} />
            <Card
              text="tera bday pe jgah achi ni thi itni sorry par acha lga tha phir bhi"
              src={priyabirthday_2023}
            />
            <Card text="mst photo" src={priyabirthday_2023_2} />
            <Card text="priya police" src={priya_police} />
          </div>
          <div className="years-column">
            <Card
              text="ye bhi kya mst aai hai. new shoes ke sath 😂"
              src={moja_priya_galleria}
            />
            <Card
              text="ye tera boa village. Iss saal ki zyada pics nhi hai"
              src={moja_priya_boa}
            />
            <Card src={moja_priya_boa2} />
            <Card text="mucchad manoj" src={moustache_manoj} />
            <Card text="lacoste priya" src={lacoste} />
            <Card text="new year ki " src={newyear_2023} />
            <Card text="moja handsup" src={moja_handsup} />
          </div>
        </>
      );

    if (year === "2022")
      return (
        <>
          <div className="years-column">
            <Card
              text="ye meri fav pics mai se ek hai"
              src={Snapchat1005017377}
            />
            <Card text="kya mst hai ye look" src={Snapchat1106726981} />
            <Card
              text="ab yaha se hum galleria jane lge the"
              src={Snapchat1460263485}
            />
            <Card text="ye sutra tere bday ki " src={Snapchat146150667} />
            <Card
              text="ye sabse gande top mai. phir bhi achi aai thi islie daal di😂"
              src={Snapchat990301403}
            />
            <Card
              text="ye mst got ki theme ke sath. mza aa gya tha dekh kr isko"
              src={moja_bday_2022}
            />
          </div>
          <div className="years-column">
            <Card text="yaha tu bhand ho chuki hai" src={Snapchat1845891502} />
            <Card
              text="habitat center my personal fav"
              src={Snapchat2011702693}
            />
            <Card
              text="ye kitni pyari pic hai. humne car leli or tu phli baar baithi isme. phir ro gyi thi"
              src={Snapchat392601326}
            />
            <Card
              text="ye habitat mai he hai.pyari cap"
              src={Snapchat430770529}
            />
            <Card
              text="ye japanese restaurent hai bvda khoj ke gye the chanakyapuri mai"
              src={japenese_restaurent}
            />
          </div>
          <div className="years-column">
            <Card text="ye mera fav restaurent" src={Snapchat496057686} />
            <Card
              text="ye new year pe tu mem sahab bnke aai thi"
              src={Snapchat720529857}
            />
            <Card text="again mera fav outfit" src={Snapchat894847928} />
            <Card src={Snapchat975702885} />
            <Card text="holi pe s22 ultra ka kamaal" src={holi_2022} />
          </div>
        </>
      );

    if (year === "2021")
      return (
        <>
          <div className="years-column">
            <Card
              text="ye bhi v3s ke bahar mere new specs ke sath"
              src={IMG_20210221_170539}
            />
            <Card
              text="ye tu video call pe chasme ke sath. ab pahanna bnd krdia tune. phnna chaiye"
              src={IMG_20210520_221142}
            />
            <Card
              text="ye ptani kidhar hai hum. teri enter wali tshirt"
              src={IMG_20210704_160234}
            />
            <Card text="ye mere bday ki pyari pic" src={IMG_20210709_144003} />
            <Card
              text="ye tune phirse mst comic type bnaya. iss wale mai mera controller red hai kyuki red wala he dia tha tune."
              src={moja_bday_2021}
            />
            <Card
              text="ye cute cap jaswant ki. kya pyari lgri thi isme 😍"
              src={cute_priya_exc}
            />
          </div>
          <div className="years-column">
            <Card text="ye tere bday ki." src={IMG_20210807_152507} />
            <Card text="mst lgri thi tu iss din" src={IMG_20210807_174039} />
            <Card text="kitni cute hai pic bhi" src={IMG_20210807_174730} />
            <Card text="back to select city walk" src={IMG_20210904_171809} />
            <Card
              text="ye tere new white board pe tune bnaya tha"
              src={moja_priya_art}
            />
          </div>
          <div className="years-column">
            <Card
              text="ye to bhul gya mai kaha ki hai"
              src={IMG_20211003_155101}
            />
            <Card text="ye cp wala diggin hai" src={IMG_20211016_170500} />
            <Card
              text="ye rishikesh wali pyari pic"
              src={IMG_20211205_171338}
            />
            <Card text="pyari selfie rishikesh ki" src={PriyaMoja2} />
          </div>
        </>
      );

    if (year === "2020")
      return (
        <>
          <div className="years-column">
            <Card
              text="chennai se aane ke baad bht time baad mile the. mere baal lambe ho gye idhar"
              src={after_chennai}
            />
            <Card
              text="chennai se aake doni ki shakle thodi change si ho gyi thi. bdi bdi shakal lgri thi"
              src={after_chennai2}
            />
            <Card
              text="ye channai ke baad ali se milne gye the. jgah bhul gya"
              src={afterchennaiwithali}
            />
            <Card
              text="ye gtb mai cafe the vha gye the. nam bhul gya.boss wali chair mai baithe. iss time maine shyd farzi engineer chori thi or new job bhi nhi thi"
              src={cafe_gtb}
            />
            <Card
              text="ye phli baar tune mst comic bnaya jab covid tha. Mst bnaya tha ye. mai dekh kr bht khsu hua tha."
              src={moja_bday_2020}
            />
          </div>
          <div className="years-column">
            <Card text="" src={cafe_gtb2} />
            <Card text="ye kya mst selfie hai pyari si CP mai" src={cp_cute} />
            <Card text="yaha maine risotta khaya tha" src={diggin} />
            <Card
              text="ye tere paas ab bhi rkha hai. naam bhul gya mai to. timmy yaad aara hai ptani kyu"
              src={mcd_toy}
            />
          </div>
          <div className="years-column">
            <Card text="ye ali se mili the excellence ke bahar." src={meetup} />
            <Card text="random cute priya" src={random} />
            <Card
              text="ye v3s gye the. isi din se tere ear buds char rhe hai baapre. iss din se mera mouse pad bhu chal raha hai vaise"
              src={v3s}
            />
            <Card
              text="randome chennai video call screenshot. chennai mai bht video call kia krte the"
              src={chennai_video_call}
            />
          </div>
        </>
      );

    if (year === "2019")
      return (
        <>
          <div className="years-column">
            <Card text="ali ka bday" src={ali_bday} />
            <Card
              text=" tu kuch project ka kaam krri thi or mai ghoor raha hu 😂"
              src={stare_2019}
            />
            <Card text="ye cafe bht jay krte the hum phle" src={ali_bday2} />
            <Card text="echoes" src={ali_bday3} />
            <Card
              text="ye mai chennai jane wala tha usse phle ki hai"
              src={before_chennai}
            />
            <Card
              text="ye or iske neeche wale satya niketan gye the vha ki hai"
              src={cafe}
            />
            <Card src={cafe_saket} />
            <Card text="😴😴" src={canteen_sleep} />
            <Card text="ye tu ghoomne gyi thi" src={priya_ghumi} />
            <Card
              text="sar pe lga lia stylish way mai chunni"
              src={priya_ghumi2}
            />
          </div>
          <div className="years-column">
            <Card text="apni shakal dekh😂" src={hand_kiss} />
            <Card text="zoo ki" src={icecream_cute} />
            <Card text="ye interview dene gye the" src={interview_selfie} />
            <Card text="ye vo likhne wala day" src={lastdayscollege} />
            <Card
              text="ye mera bday.iski dp abhi tak lgi hai teri"
              src={majo_bday}
            />
            <Card text="ye shyd v3s" src={nazeer} />
            <Card
              text="ye ptani konse pizzahut ki. tu btana ye to"
              src={pizzahut_selfie}
            />
            <Card text="ye tere bday pe echoes ki" src={primoja_bday_2019} />
            <Card text="bimar priya😂" src={priya_bimar} />
            <Card text="isme ptani kya kia maine" src={priya_gussa} />
          </div>
          <div className="years-column">
            <Card text="ye mst lgti hai nonu ke sath😂" src={priya_nonu} />
            <Card text="isme teri di hui tshirt phni hai" src={selectcity} />
            <Card
              text="ye phir hum select city bht jane lge the"
              src={selfie_mall_2019}
            />
            <Card
              text="ye tu mujhe purani dilli mai kachori khilane le gyi thi"
              src={selfie2019}
            />
            <Card
              text="isme dekh teri purani bottle. meri engineer wali tshirt"
              src={selfieonemore}
            />
            <Card text="ye mst pic hai zoo ki. meri fav mai se ek" src={zoo} />
            <Card
              text="ye phir college ka end aa gya. farewell ki mst"
              src={farewell}
            />
            <Card
              text="ye chennai jane se phle last time ali se mile the"
              src={funny_2}
            />
            <Card
              text="ye channai jane se phle metro ke bahar ki. ye pic chennai mai dekhha krta tha😂"
              src={funny_selfie}
            />
            <Card text="ye garden of 5 senses" src={garden5senses} />
          </div>
        </>
      );

    if (year === "2018")
      return (
        <>
          <div className="years-column">
            <Card
              text="rajnagar ext pe movie dekhne gye the uske neeche ye cafe tha"
              src={no5cafe}
            />
            <Card
              text="bas yahi krte hue time nikal gya college mai"
              src={college_ground2018}
            />
            <Card text="dslr se bina baat pic" src={dslr_pic} />
            <Card text="ghoorne wala moja" src={manoj_stare} />
            <Card
              text="movie dekhne gye the. Isi din shyd tera mst phone chori hua tha"
              src={priya_phone_theft}
            />
            <Card
              text="phli baar tujhe chicken taste kraya tha"
              src={priya_nehruplace}
            />
            <Card text=" ye hauzkhas village ali ke sath " src={priya_hkv} />
            <Card text="ye train meuseum gye the " src={primojo_train_museum} />
            <Card text="stylish selfie" src={primojo_selfie} />
            <Card
              text="iss photo ka potrait bnaya tha ali ne "
              src={primojo_potrait}
            />
            <Card
              text="ye phli achi sath mai pic. lodi garden gye the"
              src={primojo_lodigarden}
            />
            <Card text="ye mst pic farewell pe" src={primojo_kiss3} />
          </div>
          <div className="years-column">
            <Card text="cp pe timepass" src={primijo_cp} />
            <Card text="byd pe tujhse door nhi khula tha" src={primojo_byd} />
            <Card text="ye ptani ab konsa cafe hai XD" src={primojo_cafe} />
            <Card
              text="ye tu phli baar suit phnke aai thi. tere hath mai daag hore the"
              src={primojo_clg_back}
            />
            <Card
              text="ye tere 1st birthday mere sath"
              src={priya_firstbirthday}
            />
            <Card text="ye shaam ko CP gye the" src={priya_cp} />
            <Card
              text="ye sardi mai phir CP. bht cp gye hai hum XD."
              src={priya_cp2}
            />
            <Card text="cahuda hoke kiss lete hue" src={primojo_kiss} />
            <Card text="ye mst pic vegas mall mai" src={primojo_kiss2} />
            <Card text="ek or pic hkv ki" src={primojo_hkv3} />
            <Card text="ye pic tune daali thi insta pe" src={primojo_hkv2} />
          </div>
          <div className="years-column">
            <Card
              text="mst ek or selfie college ground ki.bht timepaas kia hai ground mai..khaas kar sardio mai"
              src={primojo_college_ground}
            />
            <Card
              text="CP mai ek or meri got wali jacket ke sath.kabse bolra tha got dekhne ko ab jake mani thi tu"
              src={primojo_cp}
            />
            <Card
              text="ye pyari si pic humari sath mai burger king mai.baal ache dikhre hai isme"
              src={primojo_cutepic}
            />
            <Card text="ye venica mall ki ek or pic" src={priya_wsm} />
            <Card
              text="ye hum lalli ke sath gye the agresen ki baoli"
              src={priya_agresenkibaoli}
            />
            <Card text="random pic" src={primojo_venice} />
            <Card
              text="dono ki shakal dekh. kuch hosh nhi future ki.khush ek dum"
              src={primojo_v3s}
            />
            <Card
              text="ali ko pura cameraman bnake rkha hai yaha 😂"
              src={primojo_hkv}
            />
            <Card
              text="ye humara gip. bht jaya krte the phle. mera shoppers stop yahi dekha tha 🤣"
              src={primojo_gip}
            />
            <Card
              text="yaha tere per machlio mai de die the zabardasti 😂"
              src={primojo_fish}
            />
            <Card text="ye edm ke bahar tera face 😂" src={primojo_edm2} />
          </div>
        </>
      );

    if (year === "2017")
      return (
        <>
          <div className="years-column">
            <Card text="weird faces" src={ground} />
            <Card
              text="IIT ki famous selfie jo dp mai se save kri"
              src={IIT_DP}
            />
            <Card text="timepaas in college canteen" src={canteen} />
            <Card text="first date ki selfie" src={first_date} />
          </div>
          <div className="years-column">
            <Card
              text="photo mai purani leather jacket or purane shoes hai humare"
              src={college_ground}
            />
            <Card
              text="ye phli baar baal aise krke pic bheji thi "
              src={cute_hair}
            />
            <Card text="phli baar skirt mai pic ❤️" src={skirt_pic} />
            <Card text="fullmoon: humara apna central perk" src={fullmoon} />
          </div>
          <div className="years-column">
            <Card
              text="priya on a trip jiske baad mujhse milne aai thi college"
              src={priya_bijnor_trip}
            />
            <Card
              text="wsm mai ptani kyu bina baat flash ke sath pic"
              src={primoja_wsm}
            />
            <Card
              text="wsm ka pizza hut constant hangout place"
              src={pizzahut_wsm}
            />
            <Card
              text="whatsapp dp jo maine save krli thi.Lips mst lgre the isme"
              src={whatsapp_dp}
            />
          </div>
        </>
      );
  };

  return (
    <main className="flex min-h-screen flex-col items-center m-10">
      <div className="text-2xl ">Year {year}</div>
      <div className="lg:w-1/3">
        {!["2018", "2021", "2022"].includes(year) && (
          <Image
            src={specialPic}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "100%" }}
            className="rounded-xl"
            title={`${specialPic}`}
          />
        )}
      </div>

      <section className="years m-10 lg:w-3/5">{getPicsYear()}</section>
    </main>
  );
}
