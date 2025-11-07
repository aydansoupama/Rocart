export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    name: "General Questions",
    icon: "/icon/general-faq.png",
    questions: [
      {
        id: "general-1",
        question: "Is BloxBeam a trusted place to buy from?",
        answer:
          "Yes! BloxBeam is a trusted platform with thousands of satisfied customers. We prioritize security, transparency, and fast delivery in every transaction.",
      },
      {
        id: "general-2",
        question: "Why do you ask for my address during checkout?",
        answer:
          "We collect your address for billing verification purposes only. This helps us prevent fraud and ensures the security of your transaction. Your information is kept private and secure.",
      },
      {
        id: "general-3",
        question: "What makes BloxBeam the best store for in-game items?",
        answer:
          "We offer automated instant delivery, competitive prices, 24/7 customer support, secure transactions, and a wide selection of items across multiple popular games.",
      },
      {
        id: "general-4",
        question: "What games do you offer items for?",
        answer:
          "We offer items for Murder Mystery 2, Blox Fruits, Pet Simulator X, Adopt Me, and many other popular Roblox games. Check our catalog for the full list.",
      },
      {
        id: "general-5",
        question: "How can I win free items?",
        answer:
          "Follow our social media channels for giveaways, participate in community events, and subscribe to our newsletter for exclusive promotions and free item opportunities.",
      },
    ],
  },
  {
    id: "payment",
    name: "Payment & Privacy",
    icon: "/icon/payment-faq.png",
    questions: [
      {
        id: "payment-1",
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, debit cards, PayPal, cryptocurrency, and various other secure payment methods to make your purchase convenient.",
      },
      {
        id: "payment-2",
        question: "Is my payment information secure?",
        answer:
          "Absolutely! We use industry-standard encryption and secure payment gateways to protect your financial information. We never store your complete payment details.",
      },
      {
        id: "payment-3",
        question: "Do you store my personal information?",
        answer:
          "We only store essential information needed for your orders and account. All data is encrypted and protected according to privacy regulations. You can request data deletion at any time.",
      },
    ],
  },
  {
    id: "returns",
    name: "Return & Orders",
    icon: "/icon/return-faq.png",
    questions: [
      {
        id: "returns-1",
        question: "What is your refund policy?",
        answer:
          "We offer refunds within 24 hours of purchase if items were not delivered or if there was an error with your order. Contact our support team to initiate a refund request.",
      },
      {
        id: "returns-2",
        question: "How do I receive my purchased items?",
        answer:
          "After completing your purchase, items are automatically delivered to your in-game account within 1-5 minutes through our secure automated system.",
      },
      {
        id: "returns-3",
        question: "What if I don't receive my items after purchasing?",
        answer:
          "If you don't receive your items within 10 minutes, please check your order status and contact our 24/7 support team. We'll investigate and resolve the issue immediately.",
      },
      {
        id: "returns-4",
        question: "Can I cancel my order?",
        answer:
          "Orders can be cancelled before delivery is initiated. Once the automated delivery starts, cancellation is not possible. Contact support immediately if you need to cancel.",
      },
    ],
  },
];
