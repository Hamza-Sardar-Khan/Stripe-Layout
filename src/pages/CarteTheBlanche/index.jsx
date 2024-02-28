import React from "react";

import { Button, Img, Line, List, Text } from "components";

const CarteTheBlanchePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-einaregular items-center justify-end mx-auto pl-[7px] pt-[7px] w-full">
        <div className="flex flex-col md:gap-10 gap-[107px] items-center justify-start max-w-[1505px] mt-[98px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
            <Text
              className="md:ml-[0] ml-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtEina01SemiBold48"
            >
              Take the next step to become financial free
            </Text>
            <Text
              className="md:ml-[0] ml-[9px] mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtEina01SemiBold32"
            >
              Simple. Effective. Results.
            </Text>
            <Text
              className="md:ml-[0] ml-[9px] mt-[62px] text-base text-black-900"
              size="txtEina01Light16"
            >
              Last updated 7. february 2024
            </Text>
            <div className="flex md:flex-col flex-row font-einasemibold md:gap-11 items-center justify-between md:ml-[0] ml-[9px] mt-2 w-[99%] md:w-full">
              <div className="md:h-[1196px] sm:h-[581px] h-[587px] relative w-[66%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <List
                    className="sm:flex-col flex-row gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] p-[9px] rounded-[5px] w-full">
                      <div className="h-[100px] md:h-[108px] mt-2 relative w-[95%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-[37px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                              size="txtEina01SemiBold25"
                            >
                              Build{" "}
                            </Text>
                            <div className="flex flex-col items-end justify-start">
                              <Text
                                className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                                size="txtEina01SemiBold30"
                              >
                                $2950
                              </Text>
                              <Text
                                className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                                size="txtEina01SemiBold30"
                              >
                                $950
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-y-[0] my-auto right-[22%] w-[42%]">
                          <Img
                            className="h-[100px] my-auto w-[100px]"
                            src="images/img_rocketfill0wg.svg"
                            alt="rocketfill0wg"
                          />
                          <Text
                            className="mb-7 ml-[-1px] mt-auto outline outline-[0.5px] outline-black-900 p-0.5 rounded-[5px] text-black-900 text-sm z-[1]"
                            size="txtEina01SemiBold14"
                          >
                            -67.8%
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[9px] w-[98%] md:w-full">
                        <Line className="bg-gray-100 h-px w-[98%]" />
                        <Text
                          className="mt-2.5 text-black-900 text-sm w-full"
                          size="txtEina01Regular14"
                        >
                          <>
                            The Build package is designed for entrepreneurs and
                            businesses looking to establish a strong foundation
                            for their ventures. Whether you&#39;re a startup or
                            entering a new market, this package provides
                            essential resources and guidance to kickstart your
                            business journey.
                          </>
                        </Text>
                        <Line className="bg-gray-100 h-px mt-[15px] w-[98%]" />
                        <div className="flex flex-row font-einaregular gap-[13px] items-start justify-start mt-[17px] w-[98%] md:w-full">
                          <Img
                            className="h-3 mt-1.5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Specific ideas for business to start with proven
                            potential.
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-[13px] items-start justify-start mt-1.5 w-[98%] md:w-full">
                          <Img
                            className="h-3 mt-[5px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Selecting a business name, and making crucial early
                            decisions.
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-[15px] items-center justify-start mt-1 w-[98%] md:w-full">
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
                        <div className="flex flex-row font-einaregular gap-3.5 items-center justify-start mt-[9px] w-[98%] md:w-full">
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
                        <div className="flex flex-row font-einaregular gap-3.5 items-start justify-start mt-2 w-[98%] md:w-full">
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
                        <Button
                          className="cursor-pointer font-einasemibold leading-[normal] min-w-[350px] mt-[13px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                          shape="round"
                        >
                          Choose{" "}
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[15px] rounded-[5px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[3px] mt-[7px] w-full">
                        <div className="flex flex-row font-einasemibold items-start justify-start w-full">
                          <Text
                            className="mt-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtEina01SemiBold25"
                          >
                            Grow
                          </Text>
                          <div className="flex ml-[68px] mt-[5px] relative w-[38%]">
                            <Img
                              className="h-[100px] my-auto w-[100px]"
                              src="images/img_rocketlaunchf.svg"
                              alt="rocketlaunchf"
                            />
                            <Text
                              className="ml-[-12px] my-auto outline outline-[0.5px] outline-black-900 p-0.5 rounded-[5px] text-black-900 text-sm z-[1]"
                              size="txtEina01SemiBold14"
                            >
                              -49.5%
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-[5px]">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                              size="txtEina01SemiBold30"
                            >
                              $5950
                            </Text>
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                              size="txtEina01SemiBold30"
                            >
                              $2950
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray-100 h-px mt-[5px] w-[99%]" />
                        <Text
                          className="mt-3 text-black-900 text-sm w-full"
                          size="txtEina01Regular14"
                        >
                          <>
                            The Grow package is tailored for businesses seeking
                            to expand and scale their operations on a global
                            scale. Whether you&#39;re entering new markets or
                            aiming for increased market share, this package
                            provides strategies and insights to foster
                            sustainable growth.
                          </>
                        </Text>
                        <Line className="bg-gray-100 h-px mt-[13px] w-[99%]" />
                        <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-3.5 w-[98%] md:w-full">
                          <Img
                            className="h-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            In-depth analysis of international market trends and
                            consumer behavior.
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-[9px] w-[98%] md:w-full">
                          <Img
                            className="h-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Marketing strategies adaptable to different cultures
                            and regions.
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-[9px] w-[98%] md:w-full">
                          <Img
                            className="h-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Two"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Scalable business practices and operational
                            optimization tips.
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-3.5 items-center justify-start mt-[9px] w-[99%] md:w-full">
                          <Img
                            className="h-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Three"
                          />
                          <Text
                            className="text-black-900 text-sm w-[92%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Scientifically Proven Behaviors that Lead to Success
                          </Text>
                        </div>
                        <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-[5px] w-[98%] md:w-full">
                          <Img
                            className="h-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Four"
                          />
                          <Text
                            className="text-black-900 text-sm w-[93%] sm:w-full"
                            size="txtEina01Regular14"
                          >
                            Resources to help you refine and develop your chosen
                            business idea.
                          </Text>
                        </div>
                        <Line className="bg-gray-100 h-px mt-3.5 w-[99%]" />
                        <Button
                          className="cursor-pointer font-einasemibold leading-[normal] min-w-[350px] mt-[13px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                          shape="round"
                        >
                          Choose{" "}
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="absolute bg-light_blue-400 h-[5px] right-[1%] top-[6%] w-[64%]" />
              </div>
              <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-start p-[7px] rounded-[5px] w-[32%] md:w-full">
                <div className="flex h-[130px] justify-end relative w-[95%]">
                  <Text
                    className="absolute bottom-[35%] left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtEina01SemiBold25"
                  >
                    Exit
                  </Text>
                  <Text
                    className="mb-10 ml-auto mt-auto text-3xl sm:text-[26px] md:text-[28px] text-light_blue-400"
                    size="txtEina01SemiBold30"
                  >
                    $8950
                  </Text>
                  <div className="absolute h-[130px] inset-[0] justify-center m-auto w-full">
                    <Line className="absolute bg-gray-100 bottom-[2%] h-px inset-x-[0] mx-auto w-full" />
                    <Img
                      className="absolute h-[130px] inset-[0] justify-center m-auto object-cover w-2/5"
                      src="images/img_skjermbilde202.png"
                      alt="skjermbilde202"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[11px] w-[97%] md:w-full">
                  <Text
                    className="text-black-900 text-sm w-full"
                    size="txtEina01Regular14"
                  >
                    Businesses thinking about different exit options, like
                    selling, merging, or acquiring, can use the Exit package.
                    This package offers advice on the complex process of
                    business exit, whether your goal is to realize your success
                    or pursue new ventures.
                  </Text>
                  <Line className="bg-gray-100 h-px mt-[23px] w-[98%]" />
                  <div className="flex flex-row font-einaregular gap-[13px] items-start justify-start mt-[9px] w-[98%] md:w-full">
                    <Img
                      className="h-3 mt-[5px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="text-black-900 text-sm w-[93%] sm:w-full"
                      size="txtEina01Regular14"
                    >
                      Access to professional business valuation services.
                    </Text>
                  </div>
                  <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-1.5 w-[98%] md:w-full">
                    <Img
                      className="h-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
                    />
                    <Text
                      className="text-black-900 text-sm w-[93%] sm:w-full"
                      size="txtEina01Regular14"
                    >
                      Comprehensive guide on developing an effective exit
                      strategy.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-einaregular gap-[13px] items-center justify-start mt-[9px] w-full">
                    <Img
                      className="h-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Two"
                    />
                    <Text
                      className="sm:flex-1 text-black-900 text-sm w-[93%] sm:w-full"
                      size="txtEina01Regular14"
                    >
                      Legal and financial consultations with professionals
                      experienced in business exit transactions.
                    </Text>
                  </div>
                  <div className="flex flex-row font-einaregular gap-[13px] items-center justify-start mt-[7px] w-[98%] md:w-full">
                    <Img
                      className="h-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Three"
                    />
                    <Text
                      className="text-black-900 text-sm w-[93%] sm:w-full"
                      size="txtEina01Regular14"
                    >
                      Guidance on navigating mergers and acquisitions,
                      educational materials on the M&A process
                    </Text>
                  </div>
                  <div className="flex flex-row font-einaregular gap-[13px] items-start justify-start mt-[7px] w-[98%] md:w-full">
                    <Img
                      className="h-3 mt-[7px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Four"
                    />
                    <Text
                      className="text-black-900 text-sm w-[93%] sm:w-full"
                      size="txtEina01Regular14"
                    >
                      Tax experts to offer services focused on tax planning
                      during the exit process.
                    </Text>
                  </div>
                  <Line className="bg-gray-100 h-px mt-3 w-[98%]" />
                  <Button
                    className="cursor-pointer font-einasemibold leading-[normal] min-w-[350px] mt-[13px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                    color="gray_800_b2"
                  >
                    Coming soon
                  </Button>
                </div>
              </div>
            </div>
            <div className="font-einasemibold h-[422px] sm:h-[505px] md:h-[948px] md:ml-[0] ml-[7px] mt-[83px] relative w-full">
              <div className="h-[422px] m-auto w-full">
                <div className="flex flex-col h-full items-start justify-start m-auto w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtEina01SemiBold40"
                  >
                    Testemonials
                  </Text>
                  <div className="font-einaregular h-[138px] md:h-[204px] md:ml-[0] ml-[405px] mt-[66px] relative w-[67%] md:w-full">
                    <Text
                      className="absolute h-full inset-y-[0] left-[0] my-auto text-[15px] text-black-900 w-[95%] sm:w-full"
                      size="txtEina01Regular15"
                    >
                      <>
                        Having spent my entire career in the conventional 9 to 5
                        routine, I stumbled upon a video on social media that
                        showcased real results and genuine testimonials.
                        Intrigued, I decided to invest in the &#39;Build&#39;
                        plan. The step-by-step instructions provided a clear
                        roadmap, alleviating the apprehension that often comes
                        with starting a new venture.
                      </>
                    </Text>
                    <Text
                      className="absolute bottom-[10%] inset-x-[0] mx-auto text-[15px] text-black-900 w-full"
                      size="txtEina01Regular15"
                    >
                      <>
                        As I successfully got my business off the ground, I
                        found myself at a crossroads, unsure of the next steps.
                        That&#39;s when I opted for the &#39;Grow&#39; plan. It
                        wasn&#39;t about flashy promises; instead, it felt like
                        a practical guide to navigate the challenges of business
                        expansion. Today, I believe my company is heading in the
                        right direction. The journey ahead requires dedication
                        and resilience, but I&#39;m grateful for the guidance
                        that helped me gain confidence in charting my own
                        course.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col font-einaregular gap-[35px] justify-start mt-[26px] w-full">
                    <Line className="bg-white-A700 h-0.5 w-full" />
                    <div className="h-[100px] md:ml-[0] ml-[405px] relative w-[67%] md:w-full">
                      <Text
                        className="m-auto text-[15px] text-black-900 w-full"
                        size="txtEina01Regular15"
                      >
                        The Build and Grow packages were a game-changer for my
                        vocal services business. The 30-day step-by-step plan
                        provided clarity and confidence, while the advanced
                        strategies and 100-day guide in the Grow package fueled
                        sustained growth. Thanks to CarteTheBlanch, my business
                        has transformed from concept to thriving venture.
                      </Text>
                      <Text
                        className="absolute h-max inset-y-[0] my-auto right-[6%] md:text-5xl text-[64px] text-black-900"
                        size="txtEina01Regular64"
                      >
                        “
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-white-A700 h-0.5 inset-x-[0] mx-auto top-[17%] w-full" />
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row font-einaregular gap-2.5 inset-x-[0] items-start justify-between mx-auto w-full">
                <div className="bg-blue_gray-100 flex flex-col h-[111px] items-center justify-start mb-[195px] md:mt-0 mt-16 rounded-[5px] w-[111px]">
                  <Img
                    className="h-[111px] md:h-auto object-cover rounded-[5px] w-[111px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-row items-end justify-start w-[26%] md:w-full">
                    <Img
                      className="h-[29px] mt-16 w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi"
                    />
                    <Text
                      className="ml-1.5 mt-[71px] text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build, Grow
                    </Text>
                    <Text
                      className="mb-[21px] ml-[141px] md:text-5xl text-[64px] text-black-900"
                      size="txtEina01Regular64"
                    >
                      “
                    </Text>
                  </div>
                  <Text
                    className="mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtEina01Regular32"
                  >
                    Marius Voss
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[16%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtEina01SemiBold32"
                      >
                        bikon-as.no
                      </Text>
                      <div className="flex flex-row font-einaregular gap-1.5 items-end justify-start mt-[74px] w-[68%] md:w-full">
                        <Img
                          className="h-[29px] w-[29px]"
                          src="images/img_shoppingbagfi.svg"
                          alt="shoppingbagfi_One"
                        />
                        <Text
                          className="mt-1.5 text-base text-black-900"
                          size="txtEina01Regular16"
                        >
                          Build, Grow
                        </Text>
                      </div>
                      <Text
                        className="mt-2 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtEina01Regular32"
                      >
                        Philip Smith
                      </Text>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtEina01SemiBold32"
                      >
                        warbls.com
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[83px] md:mt-0 mt-[73px] md:text-5xl text-[64px] text-black-900"
                      size="txtEina01Regular64"
                    >
                      “
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[835px] md:mt-0 mt-[54px] md:text-5xl text-[64px] text-black-900"
                      size="txtEina01Regular64"
                    >
                      “
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-einaregular md:h-[147px] h-[157px] ml-1 md:ml-[0] mt-0.5 relative w-[99%] md:w-full">
              <div className="absolute bottom-[0] md:h-[145px] h-[146px] inset-x-[0] mx-auto w-full">
                <div className="flex flex-col font-einaregular h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-[58px] justify-start w-full">
                    <Line className="bg-white-A700 h-0.5 w-full" />
                    <Text
                      className="md:ml-[0] ml-[410px] text-[15px] text-black-900 w-[67%] sm:w-full"
                      size="txtEina01Regular15"
                    >
                      CarteTheBlanch guided me seamlessly into the knitting
                      pattern market. From finding the perfect business idea to
                      setting up effective marketing, the knowledge from the
                      package ensured I made my first sale within a week.{" "}
                    </Text>
                  </div>
                </div>
                <a
                  href="https://sistaknit.com/"
                  className="absolute bottom-[9%] font-einasemibold left-[10%] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>sistaknit.com</Text>
                </a>
              </div>
              <div className="absolute bottom-[10%] flex flex-row gap-2.5 items-start justify-between left-[0] w-1/4">
                <Img
                  className="h-[111px] md:h-auto mt-[3px] object-cover rounded-[10px] w-[111px]"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row gap-1.5 items-end justify-start w-[38%] md:w-full">
                    <Img
                      className="h-[29px] w-[29px]"
                      src="images/img_shoppingbagfi.svg"
                      alt="shoppingbagfi_Two"
                    />
                    <Text
                      className="mt-1.5 text-base text-black-900"
                      size="txtEina01Regular16"
                    >
                      Build
                    </Text>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sarah-mihelich-68840257/overlay/about-this-profile/"
                    className="ml-1 md:ml-[0] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Sarah Loftus</Text>
                  </a>
                </div>
              </div>
              <Text
                className="absolute left-[31%] md:text-5xl text-[64px] text-black-900 top-[0]"
                size="txtEina01Regular64"
              >
                “
              </Text>
              <Text
                className="absolute bottom-[17%] right-[10%] md:text-5xl text-[64px] text-black-900"
                size="txtEina01Regular64"
              >
                “
              </Text>
            </div>
            <Line className="bg-white-A700 h-0.5 ml-1 md:ml-[0] mt-[5px] w-[99%]" />
            <div className="flex md:flex-col flex-row font-einaregular md:gap-5 items-start justify-start md:ml-[0] ml-[9px] w-[58%] md:w-full">
              <Img
                className="h-[111px] md:h-auto md:mt-0 mt-4 object-cover rounded-[5px] w-[111px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] md:mt-0 mt-4 w-[32%] md:w-full">
                <div className="flex flex-row font-einaregular gap-1.5 items-end justify-start w-[53%] md:w-full">
                  <Img
                    className="h-[29px] w-[29px]"
                    src="images/img_shoppingbagfi.svg"
                    alt="shoppingbagfi_Three"
                  />
                  <Text
                    className="mt-1.5 text-base text-black-900"
                    size="txtEina01Regular16"
                  >
                    Build, Grow
                  </Text>
                </div>
                <Text
                  className="mt-2 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtEina01Regular32"
                >
                  Kim Vu Nguyen
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtEina01SemiBold32"
                >
                  neat.no
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[27px] md:text-5xl text-[64px] text-black-900"
                size="txtEina01Regular64"
              >
                “
              </Text>
              <Text
                className="md:mt-0 mt-[59px] text-[15px] text-black-900"
                size="txtEina01Regular15"
              >
                Not much to say - but... this changed my life.
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] md:mt-0 mt-10 md:text-5xl text-[64px] text-black-900"
                size="txtEina01Regular64"
              >
                “
              </Text>
            </div>
            <Line className="bg-white-A700 h-0.5 md:ml-[0] ml-[13px] mt-4 w-[99%]" />
            <Text
              className="md:ml-[0] ml-[198px] mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtEina01SemiBold36"
            >
              Elevate Your Business Journey with Our Newsletter!
            </Text>
            <Text
              className="mt-3.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtEina01Regular32"
            >
              <>
                Subscribe to our exclusive newsletter for a powerhouse of
                business insights, insider tips, and venture opportunities
                delivered directly to your inbox. From expert advice and
                strategic guidance to emerging ventures and special offers,
                we&#39;ve got your entrepreneurial needs covered.
              </>
            </Text>
            <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[243px] mt-[47px] sm:pl-5 pl-[26px] rounded-[5px] w-[62%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-600"
                size="txtEina01Regular32Gray600"
              >
                Email..
              </Text>
              <Button
                className="cursor-pointer font-einasemibold min-w-[269px] rounded-br-[5px] rounded-tr-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[494px] mt-[67px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtEina01SemiBold36"
            >
              CarteTheBlanche
            </Text>
            <Text
              className="mt-9 md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtEina01Regular32"
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
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[37px] sm:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[79px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtEina01Regular32WhiteA700"
            >
              <span className="text-white-A700 font-einaregular text-left font-normal">
                © 2024{" "}
              </span>
              <span className="text-white-A700 font-einaregular text-left font-normal">
                CarteTheBlanch
              </span>
              <span className="text-white-A700 font-einaregular text-left font-normal">
                e
              </span>
            </Text>
            <Img
              className="h-[31px] md:ml-[0] ml-[688px] md:mt-0 mt-[11px]"
              src="images/img_vector.svg"
              alt="vector"
            />
            <Img
              className="h-[31px] ml-8 md:ml-[0] md:mt-0 mt-[11px] w-[31px]"
              src="images/img_info.svg"
              alt="info"
            />
            <Img
              className="h-[31px] md:h-auto ml-8 md:ml-[0] md:mt-0 mt-[11px] object-cover w-[31px]"
              src="images/img_image56.png"
              alt="imageFiftySix"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarteTheBlanchePage;
