import React from "react";

import { Button, Img, Line,  Text } from "components";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-bonanova items-center justify-end mx-auto pt-[31px] sm:pt-[25px] w-full">
        <div className="flex flex-col items-center justify-start w-full gap-5">
          <Text
            className=" hidden sm:block text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtBonaNovaBold24"
          >
            CarteTheBlanche
          </Text>

          {/* MAIN CONTENT BEGINS HERE */}
          <div className="flex flex-col w-[100%] sm:w-[95%] px-10 xl:w-[1200px] 2xl:w-[1278px]  ">
            <Line className="bg-gray-200 h-0.5 w-full hidden sm:block " />
            <Text
              className=" sm:mt-10 text-[22px] sm:text-[38px] md:text-[44px] text-black-900"
              size="txtBonaNovaRegular48"
            >
              Take the next step to become financial free
            </Text>

            {/* RESULTS BEGIN HERE */}
            <Text
              className=" mt-2.5 md:text-3xl sm:text-[20px] text-[16px] text-black-900"
              size="txtBonaNovaRegular32"
            >
              Simple. Effective. Results.
            </Text>

            <div className="flex  relative flex-col lg:flex-row font-einasemibold gap-y-[27px] gap-x-4 xl:gap-11 items-center justify-start  mt-[20px] sm:mt-[80px]  w-full">

              <Text
                className="mb-[undefinedpx] hidden sm:block text-[17px] text-black-900 z-[1] absolute -top-[30px] left-0"
                size="txtBonaNovaRegular17"
              >
                <>Don&#39;t miss this opportunity</>
              </Text>


              <div className="bg-white-A700   relative  flex flex-col  lg:min-h-[594px] w-full sm:w-[66%] lg:w-[300px] xl:w-[400px] items-center justify-end  mx-auto p-[9px]  pl-[22px] pr-[12px] rounded-[5px] ">
                <Button
                  className="cursor-pointer rounded-[5px] hidden sm:flex w-[152px] h-[39px] bg-[#333333]  items-center justify-center mb-[-12px] min-w-[152px] mr-[17px] absolute right-[10px] -top-[18px] z-[1]"
                >
                  <img src="images/loading.png" alt="" />
                  <div className="font-einasemibold leading-[normal] ml-[8px] text-[13px] text-left z-[1]">
                    Limited-time offer
                  </div>
                </Button>

                <div className="flex flex-col items-center justify-start mb-1 mt-5  w-[98%] md:w-full">
                  <div className="flex relative flex-row font-bonanova items-center justify-between w-[99%]  md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[25px] text-black-900"
                      size="txtBonaNovaRegular40"
                    >
                      Build{" "}
                    </Text>

                    <Img
                      className="absolute  inset-[0] justify-center left-[28%] top-0 block sm:hidden object-cover "
                      src="images/rocket.png"
                      alt="skjermbilde202"
                    />

                    <div className="flex flex-col justify-start font-einaregular1 ">
                      <div className="h-[39px] md:ml-[0] ml-[42px] relative w-[73%]">
                        <Text
                          className="absolute h-full inset-y-[0] my-auto right-[6%] text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                          size="txtEina01Regular30"
                        >
                          $2950
                        </Text>
                        <Line className="absolute bg-light_blue-400 h-0.5 inset-[0] justify-center m-auto rotate-[-180deg] " />
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start mr-[12px] w-[85%] md:w-full">
                        <Text
                          className="outline outline-[0.5px] w-[37px]  sm:h-[auto] h-[18px] sm:w-[auto] outline-black-900 p-1 rounded-[5px] text-black-900  text-[10px] sm:text-sm"
                          size="txtEina01Regular14"
                        >
                          -67.8%
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                          size="txtEina01Regular30"
                        >
                          $950
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px mt-[25px] w-[98%]" />
                  <Text
                    className="mt-2.5 text-black-900 text-sm w-full"
                    size="txtEina01Regular14"
                  >
                    <>
                      The Build package is designed for entrepreneurs and
                      businesses looking to establish a strong foundation
                      for their ventures. Whether you&#39;re a startup or
                      entering a new market, this package provides essential
                      resources and guidance to kickstart your business
                      journey.
                    </>
                  </Text>
                  <Line className="bg-gray-100 h-px mt-[15px] w-[98%]" />
                  <div className="hidden sm:block">
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-[17px] w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        Specific ideas for business to start with proven
                        potential.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-1.5 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        Selecting a business name, and making crucial early
                        decisions.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[15px] items-center justify-start mt-1 w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Insights into market research and identifying your
                        target audience.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-center justify-start mt-[9px] w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Creating a brand identity and establishing an online
                        presence.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-start justify-start mt-2 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Resources to help you refine and develop your chosen
                        business idea.
                      </Text>
                    </div>
                    <Line className="bg-gray-100 h-px mt-4 w-[98%]" />
                  </div>
                  <div className="bg-light_blue-400 flex flex-col font-einasemibold items-center justify-start mt-[15px] p-1 rounded-[5px] w-[95%] md:w-full">
                    <div className="flex flex-row items-end justify-center mb-[3px] w-[36%] md:w-full">
                      <div className="flex flex-col items-center justify-center ">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtEina01SemiBold25"
                        >
                          Choose
                        </Text>
                        <div className="flex-row hidden sm:flex ">
                          <img src="images/loading.png" alt="" className="w-[11px] mr-[7px] h-[15px]" />
                          <Text
                            className="ml-1.5 md:ml-[0] text-white-A700 text-xs"
                            size="txtEina01SemiBold12"
                          >
                            Limited-time offer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white-A700 relative flex flex-col  lg:min-h-[594px] w-full sm:w-[66%] lg:w-[300px] xl:w-[400px] items-center justify-end  mx-auto p-[9px] pl-[22px] pr-[12px] rounded-[5px] ">
                <Button
                  className="cursor-pointer rounded-[5px] hidden sm:flex w-[152px] h-[39px] bg-[#333333]  items-center justify-center mb-[-12px] min-w-[152px] mr-[17px] absolute right-[10px] -top-[18px] z-[1]"
                >
                  <img src="images/loading.png" alt="" />
                  <div className="font-einasemibold leading-[normal] ml-[8px] text-[13px] text-left z-[1]">
                    Limited-time offer
                  </div>
                </Button>
                <div className="flex flex-col items-center justify-start mb-1 mt-5 w-[98%] md:w-full">
                  <div className="flex relative flex-row font-bonanova items-center justify-between w-[99%] md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[25px] text-black-900"
                      size="txtBonaNovaRegular40"
                    >
                      Grow{" "}
                    </Text>

                    <Img
                      className="absolute  inset-[0] justify-center left-[28%] top-0 block sm:hidden object-cover "
                      src="images/rocket_launch.png"
                      alt="skjermbilde202"
                    />

                    <div className="flex flex-col justify-start font-einaregular1">
                      <div className="h-[39px] md:ml-[0] ml-[42px] relative w-[73%]">
                        <Text
                          className="absolute h-full inset-y-[0] my-auto right-[6%] text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                          size="txtEina01Regular30"
                        >
                          $5950
                        </Text>
                        <Line className="absolute bg-light_blue-400 h-0.5 inset-[0] justify-center m-auto rotate-[-180deg] " />
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start  w-[85%] md:w-full">
                        <Text
                          className="outline outline-[0.5px] w-[37px]  sm:h-[auto] h-[18px] sm:w-[auto] outline-black-900 p-1 rounded-[5px] text-black-900  text-[10px] sm:text-sm"
                          size="txtEina01Regular14"
                        >
                          49.5%
                        </Text>
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                          size="txtEina01Regular30"
                        >
                          $2950
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px mt-[25px] w-[98%]" />
                  <Text
                    className="mt-2.5 text-black-900 text-sm w-full"
                    size="txtEina01Regular14"
                  >
                    <>
                      The Grow package is tailored for businesses seeking to expand and scale their operations on a global scale. Whether you're entering new markets or aiming for increased market share, this package provides strategies and insights to foster sustainable growth.
                    </>
                  </Text>
                  <Line className="bg-gray-100 h-px mt-[15px] w-[98%]" />
                  <div className="hidden sm:block">
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-[17px] w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        In-depth analysis of international market trends and consumer behavior.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-1.5 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        Marketing strategies adaptable to different cultures and regions.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[15px] items-center justify-start mt-1 w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Scalable business practices and operational optimization tips.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-center justify-start mt-[9px] w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Scientifically Proven Behaviors that Lead to <br /> Success
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-start justify-start mt-2 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Sustained Growth Blueprint (100-Day Guide)
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px mt-4 w-[98%]" />
                  <div className="bg-light_blue-400 flex flex-col font-einasemibold items-center justify-start mt-[15px] p-1 rounded-[5px] w-[95%] md:w-full">
                    <div className="flex flex-row items-end justify-center mb-[3px] w-[36%] md:w-full">
                      <div className="flex flex-col items-center justify-center ">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtEina01SemiBold25"
                        >
                          Choose
                        </Text>
                        <div className="flex-row hidden sm:flex ">
                          <img src="images/loading.png" alt="" className="w-[11px] mr-[7px] h-[15px]" />
                          <Text
                            className="ml-1.5 md:ml-[0] text-white-A700 text-xs"
                            size="txtEina01SemiBold12"
                          >
                            Limited-time offer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white-A700 flex flex-col lg:min-h-[594px] w-full sm:w-[66%] lg:w-[300px] xl:w-[400px] items-center justify-end  mx-auto p-[9px] pl-[22px] pr-[12px] rounded-[5px] ">

                <div className="flex flex-col items-center justify-start mb-1 mt-5 w-[98%] md:w-full">
                  <div className="flex flex-row relative font-bonanova items-start justify-between w-[99%] md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[25px] text-black-900"
                      size="txtBonaNovaRegular40"
                    >
                      Exit{" "}
                    </Text>

                    <Img
                      className="absolute sm:h-[130px] inset-[0] justify-center m-auto object-cover w-2/5"
                      src="images/img_skjermbilde202.png"
                      alt="skjermbilde202"
                    />



                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                      size="txtEina01Regular30"
                    >
                      $8950
                    </Text>


                  </div>
                  <Line className="bg-gray-100 h-px mt-[25px] w-[98%]" />
                  <Text
                    className="mt-2.5 text-black-900 text-sm w-full"
                    size="txtEina01Regular14"
                  >
                    <>
                      Businesses thinking about different exit options, like selling, merging, or acquiring, can use the Exit package. This package offers advice on the complex process of business exit, whether your goal is to realize your success or pursue new ventures.                    </>
                  </Text>
                  <Line className="bg-gray-100 h-px mt-[15px] w-[98%]" />
                  <div className="hidden sm:block">
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-[17px] w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        Access to professional business valuation <br />   services.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[13px] items-start justify-start mt-1.5 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-[5px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                      <Text
                        className="w-full text-sm text-black-900"
                        size="txtEina01Regular14"
                      >
                        Comprehensive guide on developing an effective exit strategy.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-[15px] items-center justify-start mt-1 w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Legal and financial consultations with professionals experienced in business exit transactions.
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-center justify-start mt-[9px] w-[98%] md:w-full">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Guidance on navigating mergers and acquisitions, educational materials on the M&A process
                      </Text>
                    </div>
                    <div className="flex flex-row font-einaregular1 gap-3.5 items-start justify-start mt-2 w-[98%] md:w-full">
                      <Img
                        className="h-3 mt-1.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="text-black-900 text-sm w-[92%] sm:w-full"
                        size="txtEina01Regular14"
                      >
                        Tax experts to offer services focused on tax planning during the exit process.
                      </Text>
                    </div>
                    <Line className="bg-gray-100 h-px mt-4 w-[98%]" />
                  </div>
                  <Button
                    className="cursor-pointer font-einasemibold leading-[normal] p-[6px] sm:p-[13px] w-[95%] xl:min-w-[350px] mt-[15px] sm:text-[21px]  md:text-[23px] text-[25px] text-center"
                    shape="round"
                    color="gray_800_b2"
                    size="sm"
                  >
                    Coming soon
                  </Button>
                </div>
              </div>

            </div>

            {/* TESTIMONIALS SECTION BEGINS HERE */}
            <Text
              className=" mt-[78px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtBonaNovaRegular40"
            >
              Testimonials
            </Text>
            <Line className="bg-white-A700 h-0.5  mt-5  w-full" />

            {/* REVIEW1 */}
            <div className="flex flex-col sm:flex-row justify-between pt-[25px] pb-[10px]">

              <div className="flex flex-row gap-x-2 ">
                <img src="images/img_image1.png" alt="" className="w-[111px] h-[111px]" />
                <div className="flex md:flex-1 flex-col items-start justify-start ml-2.5 md:ml-[0] ">
                  <div className="flex flex-row font-einaregular1 gap-1.5 items-end justify-start w-full">
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi"
                    />
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build, Grow
                    </Text>
                  </div>
                  <div>
                    <Text
                      className="mt-1.5 md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina03Regular32"
                    >
                      Marius Voss
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina01SemiBold32"
                    >
                      bikon-as.no
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-[100%] sm:w-[67%] mt-[15px]  xl:w-[852px]">
                <Text
                  className=" h-max inset-[0] justify-center  text-[14px] sm:text-[15px] text-black-900 w-full"
                  size="txtEina01Regular15"
                >
                  <span className="relative bottom-[0px] -left-[12px]">
                    <img src="images/colons.png" alt="" />
                  </span>
                  <p className="relative">
                    Having spent my entire career in the conventional 9 to 5 routine, I stumbled upon a video on social media that showcased real results and genuine testimonials. Intrigued, I decided to invest in the 'Build' plan. The step-by-step instructions provided a clear roadmap, alleviating the apprehension that often comes with starting a new venture.
                    <br />
                    <br />
                    As I successfully got my business off the ground, I found myself at a crossroads, unsure of the next steps. That's when I opted for the 'Grow' plan. It wasn't about flashy promises; instead, it felt like a practical guide to navigate the challenges of business expansion. Today, I believe my company is heading in the right direction. The journey ahead requires dedication and resilience, but I'm grateful for the guidance that helped me gain confidence in charting my own course.
                    <span className="absolute">
                      <img src="images/colons.png" alt="" className="w-[11px] h-[7px] relative bottom-[0px] left-[7px]" />
                    </span>
                  </p>

                </Text>
              </div>

            </div>
            <Line className="bg-white-A700 h-0.5  mt-2.5 mx-auto w-full" />

            {/* REVIEW2 */}
            <div className="flex flex-col sm:flex-row justify-between pt-[25px] pb-[10px]">

              <div className="flex flex-row gap-x-2">
                <img src="images/img_image2.png" alt="" className="w-[111px] h-[111px]" />
                <div className="flex md:flex-1 flex-col items-start justify-start ml-2.5 md:ml-[0] ">
                  <div className="flex flex-row font-einaregular1 gap-1.5 items-end justify-start w-full">
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi"
                    />
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build, Grow
                    </Text>
                  </div>
                  <div>
                    <Text
                      className="mt-1.5 md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina03Regular32"
                    >
                      Philip Hörnqvist
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina01SemiBold32"
                    >
                      warbls.com
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-[100%] sm:w-[67%] mt-[15px]  xl:w-[852px]">
                <Text
                  className=" h-max inset-[0] justify-center  text-[14px] sm:text-[15px] text-black-900 w-full"
                  size="txtEina01Regular15"
                >
                  <span className="relative bottom-[0px] -left-[12px]">
                    <img src="images/colons.png" alt="" />
                  </span>
                  <p className="relative">
                    The Build and Grow packages were a game-changer for my vocal services business. The 30-day step-by-step plan provided clarity and confidence, while the advanced strategies and 100-day guide in the Grow package fueled sustained growth. Thanks to CarteTheBlanche, my business has transformed from concept to thriving venture.
                    <span className="absolute">
                      <img src="images/colons.png" alt="" className="w-[11px] h-[7px] relative bottom-[0px] left-[7px]" />
                    </span>
                  </p>

                </Text>
              </div>

            </div>
            <Line className="bg-white-A700 h-0.5  mt-2.5 mx-auto w-full" />

            {/* REVIEW3 */}
            <div className="flex flex-col sm:flex-row justify-between pt-[25px] pb-[10px]">

              <div className="flex flex-row gap-x-2">
                <img src="images/img_image3.png" alt="" className="w-[111px] h-[111px]" />
                <div className="flex md:flex-1 flex-col items-start justify-start ml-2.5 md:ml-[0] ">
                  <div className="flex flex-row font-einaregular1 gap-1.5 items-end justify-start w-full">
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi"
                    />
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build
                    </Text>
                  </div>
                  <div>
                    <Text
                      className="mt-1.5 md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina03Regular32"
                    >
                      Sarah Loftus
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina01SemiBold32"
                    >
                      sistaknit.com
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-[100%] sm:w-[67%] mt-[15px]  xl:w-[852px]">
                <Text
                  className=" h-max inset-[0] justify-center  text-[14px] sm:text-[15px] text-black-900 w-full"
                  size="txtEina01Regular15"
                >
                  <span className="relative bottom-[0px] -left-[12px]">
                    <img src="images/colons.png" alt="" />
                  </span>
                  <p className="relative">
                    CarteTheBlanche guided me seamlessly into the knitting pattern market. From finding the perfect business idea to setting up effective marketing, the knowledge from the package ensured I made my first sale within a week.                     <span className="absolute">
                      <img src="images/colons.png" alt="" className="w-[11px] h-[7px] relative bottom-[0px] left-[7px]" />
                    </span>
                  </p>

                </Text>
              </div>

            </div>
            <Line className="bg-white-A700 h-0.5  mt-2.5 mx-auto w-full" />

            {/* REVIEW4 */}
            <div className="flex flex-col sm:flex-row justify-between pt-[25px] pb-[10px]">

              <div className="flex flex-row gap-x-2">
                <img src="images/img_image4.png" alt="" className="w-[111px] h-[111px]" />
                <div className="flex md:flex-1 flex-col items-start justify-start ml-2.5 md:ml-[0] ">
                  <div className="flex flex-row font-einaregular1 gap-1.5 items-end justify-start w-full">
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi"
                    />
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build, Grow
                    </Text>
                  </div>
                  <div>
                    <Text
                      className="mt-1.5 md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina03Regular32"
                    >
                      Kim Vu Nguyen
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[20px] text-[16px] text-black-900"
                      size="txtEina01SemiBold32"
                    >
                      neat.no
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-[100%] sm:w-[67%] mt-[15px]  xl:w-[852px] mt-[10px]">
                <Text
                  className=" h-max inset-[0] justify-center  text-[14px] sm:text-[15px] text-black-900 w-full"
                  size="txtEina01Regular15"
                >
                  <span className="relative bottom-[0px] -left-[12px]">
                    <img src="images/colons.png" alt="" />
                  </span>
                  <p className="relative ">
                    Not much to say - but... this changed my life.
                    <span className="absolute">
                      <img src="images/colons.png" alt="" className="w-[11px] h-[7px] relative bottom-[0px] left-[7px]" />
                    </span>
                  </p>

                </Text>
              </div>

            </div>
            <Line className="bg-white-A700 h-0.5  mt-2.5 mx-auto w-full" />







            <Text
              className="md:ml-[0] sm:text-center  mt-[63px] sm:text-2xl md:text-[26px] text-[20px] text-black-900"
              size="txtBonaNovaBold28"
            >
              Elevate Your Business Journey with Our Newsletter!
            </Text>
            <div className="font-einaregular1  min-h-[191px]  mt-9 mx-auto md:px-5 relative w-full">
              <Text
                className="absolute inset-x-[0]  mx-auto text-[14px] leading-[19px]  md:text-[22px] text-black-900 sm:text-xl top-[0] w-full"
                size="txtEina01Regular24"
              >
                <>
                  Subscribe to our exclusive newsletter for a powerhouse of
                  business insights, insider tips, and venture opportunities
                  delivered directly to your inbox. From expert advice and
                  strategic guidance to emerging ventures and special offers,
                  we&#39;ve got your entrepreneurial needs covered.
                </>
              </Text>

            </div>

            <div className=" bg-white-A700 bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto rounded-[5px] sm:w-[53%]">
              <Text
                className="sm:ml-[26px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                size="txtEina01Regular23"
              >
                Email..
              </Text>
              <Button
                className="cursor-pointer font-einasemibold min-w-[213px] rounded-br-[5px] rounded-tr-[5px] sm:text-[23px] md:text-[25px] text-[27px] text-center"
                color="light_blue_400"
              >
                Subscribe
              </Button>
            </div>


            <Text
              className="md:ml-[0] text-center mt-[63px] sm:text-2xl md:text-[26px] text-[20px] text-black-900"
              size="txtBonaNovaBold28"
            >
              CarteTheBlanche
            </Text>
            <Text
              className="leading-[19px] mt-[31px] text-[14px] md:text-[22px] text-black-900 sm:text-xl "
              size="txtEina01Regular24"
            >
              <>
                In French, &quot;carte&quot; translates to &quot;document,&quot;
                and &quot;blanche&quot; means blank. Together, &quot;carte
                blanche&quot; refers to a blank canvas, symbolizing the
                beginning of a new journey. Just like starting a new adventure,
                you commence with a blank page, providing you with the
                opportunity to craft your unique path forward.
              </>
            </Text>
        
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full p-5 bg-gray-900 mt-7 font-einaregular1 md:gap-5">
              <Text
                className="md:ml-[0] flex md:mt-0 mt-[3px] md:text-3xl sm:text-[20px] text-[14px] text-white-A700"
                size="txtEina01Regular32"
              >
                <span className="font-normal text-left text-white-A700 font-einaregular1">
                  © 2024{" "}
                </span>
                <span className="font-normal text-left text-white-A700 font-bonanova ml-[4px]">
                  CarteTheBlanche
                </span>
              </Text>

              <div className="flex flex-row gap-x-3">
                <Img
                  className="h-[13px] w-[20px] sm:h-auto   md:mt-0 mt-[11px] sm:w-[31px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="h-[13px] w-[20px] sm:h-auto md:mt-0 mt-[11px] sm:w-[31px]"
                  src="images/img_info.svg"
                  alt="info"
                />
                <Img
                  className="h-[13px] w-[20px] sm:h-auto   md:mt-0 mt-[9px] object-contain sm:w-[31px]"
                  src="images/img_image56.png"
                  alt="imageFiftySix"
                />
              </div>
            </div>
      </div>
    </>
  );
};
export default Home;
