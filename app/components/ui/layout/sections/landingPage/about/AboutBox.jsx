"use client";
import Image from "next/image";
import { MdDoNotDisturb } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import header2 from "./../../../../../../../public/ashley-defi-header-2.jpg";
import header4 from "./../../../../../../../public/ashley-defi-pic-4.jpg";
import header3 from "./../../../../../../../public/ashley-defi-pic-5.jpg";
import header1 from "./../../../../../../../public/ashley-defi-pic-1.jpg";
import header6 from "./../../../../../../../public/ashley-defi-pic-3.jpg";

const About = () => {
  return (
    <div className=" text-white text-center max-w-[800px] xs:mb-3 md:mb-0">
      <h2
        className="text-4xl pt-4 mb-2 font-bold
        xs:text-2xl xs:mb-1
        xs4:text-3xl
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3
            "
      >
        <span className="text-red-500">Stop</span> Taking the Bait
      </h2>
      <div className="xs:w-[95%] md:w-[90%] h-[88vh] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2 rounded-lg white-glassmorphism shadow-xl shadow-indigo-700">
        <div className="  col-span-2 white-glassmorphism">
          <div className="relative h-full ">
            <Image
              src={header2}
              fill
              alt="Venice, Italy"
              className="relative brightness-50 rounded-2xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-4 text-xl 
                 
                
                    custom-xs-448-aboutbox-1
                    custom-xs-640-aboutbox-1
                     xs:leading-[0.95rem]
                     xs3:text-lg xs3:leading-5 xs6:text-xl
                    sm:text-2xl sm:w-[90%] sm:left-[5%] sm:mt-6
                    md:text-3xl md:mt-10
                    lg:text-xl lg:mt-3 lg:w-[60%] lg:left-[20%] lg:leading-5
                    xl:text-2xl xl:w-[70%] xl:left-[15%]
                    2xl:mt-6
                    "
            >
              A <span className="text-yellow-400">new</span> financial era
              requires <span className="text-yellow-400">new</span> financial
              experts.
            </h2>
            <h2
              className="absolute top-[40%] w-[80%] left-[10%] mt-4 
                    text-lg 
                  
                 
                    custom-xs-448-aboutbox-1
                    custom-xs-640-aboutbox-1
                     xs:leading-[0.95rem]
                     xs3:text-lg xs3:leading-5
                     xs6:text-xl
                    sm:text-xl sm:mt-6
                    md:text-3xl md:mt-8 md:w-[60%] md:left-[20%]
                    lg:text-lg lg:mt-4 lg:leading-tight lg:w-[80%] lg:left-[9%]
                    xl:text-2xl xl:mt-5
                    2xl:mt-7
                    "
            >
              The old ways of doing things <i>just doesn&apos;t work anymore</i>
              .
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header4}
              fill
              alt="Stockbrokers arguing about crypto"
              className="relative brightness-50 rounded-2xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-4 text-xl 
                    
              custom-xs-448-aboutbox-2
                    custom-xs-640-aboutbox-2
                     xs:leading-[0.85rem]
                     xs3:text-lg
                     custom-xs-660-aboutbox-2 
                     custom-xs-850-aboutbox-2
                     custom-xs-390780-aboutbox-2 xs6:text-xl
                    sm:text-2xl sm:w-[90%] sm:left-[6%] sm:mt-8
                    md:text-3xl md:mt-14
                    lg:text-lg lg:mt-2 lg:leading-2
                    xl:text-2xl xl:mt-5
                    2xl:mt-6
                    "
            >
              Stock brokers{" "}
              <span
                className="text-red-600 text-4xl 
              xs:text-3xl"
              >
                <MdDoNotDisturb
                  className="mx-auto mt-3
                  xs:mt-0
                    md:text-5xl
                    lg:text-5xl lg:-mb-1
                    "
                />{" "}
              </span>
              don't know DeFi.
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header6}
              fill
              alt="Clueless hedgefund manager"
              className="relative brightness-50 rounded-2xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
              custom-xs-448-aboutbox-3
                    custom-xs-640-aboutbox-3
                    xs3:text-lg
                    custom-xs-550-aboutbox-3 
                    custom-xs-660-aboutbox-3
                    custom-xs-850-aboutbox-3
                    custom-xs-390780-aboutbox-3 xs6:text-xl
                    sm:text-2xl sm:mt-10
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:leading-6 lg:mt-8
                    xl:text-2xl xl:mt-6 xl:leading-relaxed
                    2xl:mt-14
                    "
            >
              Hedge fund managers don&apos;t{" "}
              <u className="underline-offset-2 text-green-400">use</u> crypto.
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header3}
              fill
              alt="Regretful and depressed lady."
              className="relative brightness-50 rounded-2xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
              custom-xs-448-aboutbox-5
                    custom-xs-640-aboutbox-5
                    sm:text-2xl sm:mt-10
                    xs3:text-lg custom-xs-360-aboutbox-5 
                    custom-xs-550-aboutbox-5
                    custom-xs-660-aboutbox-5
                    custom-xs-670-aboutbox-5
                    custom-xs-850-aboutbox-5
                    custom-xs-390-650-aboutbox-5

                    custom-xs-390780-aboutbox-5 xs6:text-xl
                    custom-xs-410810-aboutbox-5 
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:mt-6 lg:leading-5
                    xl:text-2xl xl:mt-6
                    2xl:mt-8
                    "
            >
              Influencers influence poorly.
              <AiFillTwitterCircle
                className="mx-auto text-4xl fill-blue-400
                        sm:mt-2
                        md:text-6xl
                        lg:text-5xl
                        "
              />
              <hr
                className="border-red-500 border-2 w-[35%] absolute rotate-45 left-10 bottom-4 
                xs:left-8
                xs3:left-10
                    sm:w-[30%] sm:left-12
                    md:left-[35%] md:bottom-[16%]
                    lg:bottom-[20%]
                    xl:bottom-[18%] xl:left-[36%]
                    "
              />
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-xl white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header1}
              fill
              sizes="300px"
              alt="Roulette wheel"
              className="relative brightness-50 rounded-2xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
              custom-xs-448-aboutbox-6
                    custom-xs-640-aboutbox-6
                    xs3:text-lg custom-xs-360-aboutbox-6
                    custom-xs-660-aboutbox-6
                    custom-xs-850-aboutbox-6
                    custom-xs-860-aboutbox-6 
                    custom-xs-390-650-aboutbox-6 
                    custom-xs-390780-aboutbox-6 xs6:text-xl
                    custom-xs-410810-aboutbox-6 
                    sm:text-2xl sm:mt-10
                    md:text-3xl md:leading-relaxed md:mt-16
                    lg:text-xl lg:mt-7
                    xl:text-2xl xl:leading-relaxed xl:mt-5
                    2xl:mt-14
                    "
            >
              Your gut&apos;s <span className="tracking-wider">FOMO</span> only
              leads to more losses.
            </h2>
          </div>
        </div>

        <div className="border-4  col-span-2 border-black rounded-xl white-glassmorphism">
          <h2
            className="text-2xl 
            xs:text-base
            xs3:text-lg
            xs6:text-xl
                sm:w-[90%] sm:mx-auto
                md:text-4xl md:w-[97%] md:p-2
                lg:text-2xl
                xl:text-2xl
                "
          >
            So why do you keep listening to them?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
