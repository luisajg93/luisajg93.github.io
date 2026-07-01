export const caseStudies = [
  {
    title: "Telecom Churn Prediction",
    label: "Customer Retention",
    problem:
      "Identify customers most likely to cancel their service and prioritize proactive retention strategies.",
    approach:
      "Merged customer, contract, internet, and phone data; engineered tenure-related features; handled imbalance; and compared multiple classifiers.",
    result:
      "Final LightGBM model achieved ROC-AUC 0.89 and accuracy 0.84.",
    impact:
      "Supports customer ranking by churn probability and helps focus retention efforts on high-risk customers.",
  },
  {
    title: "Customer Profiling & Insurance Risk",
    label: "Insurance Analytics",
    problem:
      "Support customer similarity search, insurance benefit prediction, claim estimation, and privacy-aware data transformation.",
    approach:
      "Used KNN for similarity-based profiling, classification for benefit probability, regression for expected claims, and matrix-based data obfuscation.",
    result:
      "Built multiple ML workflows addressing marketing, risk prediction, and privacy-preserving modeling.",
    impact:
      "Connects ML methods with practical insurance use cases: targeting, risk estimation, and responsible data handling.",
  },
  {
    title: "Taxi Demand Prediction",
    label: "Forecasting",
    problem:
      "Anticipate taxi demand in advance to improve driver allocation during high-demand periods.",
    approach:
      "Analyzed time series behavior, created lag and rolling features, and trained regression-based forecasting models.",
    result:
      "Achieved RMSE 29, below the required threshold for operational use.",
    impact:
      "Translates historical demand patterns into forward-looking resource allocation decisions.",
  },
];