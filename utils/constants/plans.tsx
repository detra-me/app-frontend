export const FREE_PLAN_OPTIONS = {
  name: "Free",
  description: "Free forever",
  params: {
    price: 0,
    options: [
      { key: "free_plan_1_option", label: "Easily store your data and make it available on IPFS or NFT" },
      { key: "free_plan_2_option", label: "Easily sharing your data protected by end2end encryption" },
      { key: "free_plan_3_option", label: "Share to earn - sell your's data via crypto" },
      { key: "free_plan_4_option", label: "Awesome dashboard" },
      { key: "free_plan_5_option", label: "Share to earn 10% tax" },
      { key: "free_plan_6_option", label: "Unlimited blockchain storage" }
    ],
  },
};

export const LITE_PLAN_OPTIONS = {
  name: "Lite",
  description: "7 days trial period",
  params: {
    price: 5,
    options: [
      { key: "lite_plan_1_option", label: "Everything from Free tier" },
      { key: "lite_plan_2_option", label: "Use crypto wallet encryption key to secure your's data" },
      { key: "lite_plan_3_option", label: "Customizeble share to earn page" },
      { key: "lite_plan_4_option", label: "Include advanced reports and metrics into dashboard" },
      { key: "lite_plan_5_option", label: "Share to earn 5% tax" },
      { key: "lite_plan_6_option", label: "Unlimited blockchain storage" },
    ],
  },
};

export const PRO_PLAN_OPTIONS = {
  name: "Pro",
  description: "7 days trial period",
  params: {
    price: 15,
    options: [
      { key: "pro_plan_1_option", label: "Everything from Free and Lite tiers" },
      { key: "pro_plan_2_option", label: "Able to save your's data in nft" },
      { key: "pro_plan_3_option", label: "Advanced settings in share to earn page" },
      { key: "pro_plan_4_option", label: "Early access to additional products" },
      { key: "pro_plan_5_option", label: "Share to earn 1% tax" },
      { key: "pro_plan_6_option", label: "Unlimited blockchain storage" },
    ],
  },
};


export const PLANS = [
  { key: "plan1", options: FREE_PLAN_OPTIONS },
  { key: "plan2", options: LITE_PLAN_OPTIONS },
  { key: "plan3", options: PRO_PLAN_OPTIONS },
];
