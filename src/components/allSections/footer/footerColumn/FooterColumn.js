import React from "react";
import { Button, Card, Tooltip } from "flowbite-react";
import Link from "next/link";

const FooterColumn = () => {
  return (
    <div fluid className="container w-full">
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:gap-3 md:gap-2 sm:gap-2">
        <div className="w-full mt-5 flex flex-col">
          <div className="mt-4 px-5 pb-5">
            <p className="font-bold border-b-4 border-[#008f8f] pb-2 text-[#008f8f]">
              ABOUT
            </p>
            <p className="mt-4 text-[#008f8f]">
              Jeckostyle is a qualityful business website for multi-products. It
              is 100% trust worthy website for yours desire products.
            </p>
            <div className="mt-3 flex flex-row">
              <Tooltip content="Follow on Facebook">
                <Link
                  href="https://www.facebook.com/share/15UGieJ3dW/"
                  target="_blank"
                >
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="-5 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#008f8f"
                    stroke="#008f8f"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>facebook [#008f8f]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-385.000000, -7399.000000)"
                          fill="#008f8f"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                              id="facebook-[#ffffff]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </Link>
              </Tooltip>
              {/* <Tooltip content="Follow on Instagram">
                <Button color="white" className="rounded me-2">
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    fill="#008f8f"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>instagram [#008f8f]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-340.000000, -7439.000000)"
                          fill="#008f8f"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                              id="instagram-[#008f8f]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </Button>
              </Tooltip>
              <Tooltip content="Send us on Email">
                <Button color="white" className="rounded me-2">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    width="17px"
                    height="17px"
                    viewBox="0 0 47 32"
                    enableBackground="new 0 0 47 32"
                    fill="#008f8f"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          fill="#008f8f"
                          d="M45.5,0h-44C0.673,0,0,0.673,0,1.5v29C0,31.327,0.673,32,1.5,32h44c0.827,0,1.5-0.673,1.5-1.5v-29 C47,0.673,46.327,0,45.5,0z M1.5,1h44C45.775,1,46,1.225,46,1.5v2.119L26.947,22.162c-1.654,1.566-4.243,1.568-5.897-0.005L1,3.611 V1.5C1,1.225,1.225,1,1.5,1z M45.5,31h-44C1.225,31,1,30.775,1,30.5V4.974l19.366,17.913c1.019,0.967,2.325,1.45,3.633,1.45 c1.309,0,2.619-0.484,3.641-1.454L46,5.014V30.5C46,30.775,45.775,31,45.5,31z"
                        ></path>{" "}
                        <path
                          fill="#008f8f"
                          d="M12.394,18.058l-5.628,5.636c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l5.628-5.636c0.195-0.195,0.195-0.512,0-0.707S12.589,17.862,12.394,18.058z"
                        ></path>{" "}
                        <path
                          fill="#008f8f"
                          d="M35.93,17.2c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l6.274,6.276 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L35.93,17.2z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </Button>
              </Tooltip> */}
            </div>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col rounded-lg">
          <div className="mt-4 px-5 pb-5">
            <p className="font-bold border-b-4 border-[#008f8f] pb-2 text-[#008f8f]">
              INFORMATION
            </p>
            <div>
              <ul className="mt-3 font-bold">
                <li className="mt-3 border-b-[1px] text-[#008f8f] border-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  Privacy Policy
                </li>
                <li className="mt-3 border-b-[1px] text-[#008f8f] border-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  Refund and Return
                </li>
                <li className="mt-3 text-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full relative mt-5 flex flex-col">
          <div className="mt-4 px-5 pb-5">
            <p className="font-bold border-b-4 border-[#008f8f] pb-2 text-[#008f8f]">
              ABOUT
            </p>
            <div>
              <ul className="mt-3 font-bold">
                <li className="border-b-[1px] border-[#008f8f] text-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  CEO Message
                </li>
                <li className="mt-3 border-b-[1px] text-[#008f8f] border-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  COO Message
                </li>
                <li className="mt-3 text-[#008f8f] pb-2 cursor-pointer hover:text-[#ffffff]">
                  CMO Message
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterColumn;
