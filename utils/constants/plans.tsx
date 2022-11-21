export const FREE_PLAN_OPTIONS = {
  name: "Free",
  description: "Some description",
  params: {
    price: 0,
    options: [{ key: "free_plan_first_option", label: "Sme first option" }],
  },
};

export const PLANS = [
  { key: "free_plan", options: FREE_PLAN_OPTIONS },
  { key: "free_plan1", options: FREE_PLAN_OPTIONS },
  { key: "free_plan2", options: FREE_PLAN_OPTIONS },
];
