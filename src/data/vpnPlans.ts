export interface VPNPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  billing: 'Monthly' | 'One Time';
  traffic: string;
  devices: string;
  speed: string;
  servers: string[];
  features: string[];
  isRefundable: boolean;
  isPopular?: boolean;
  badge?: string;
}

export const vpnPlans: VPNPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 10.00,
    currency: '¥',
    billing: 'Monthly',
    traffic: '80 GB Traffic/Month',
    devices: '3 Device Limit',
    speed: 'Up to 1000 Mbps Speed',
    servers: ['USA 🇺🇸', 'Bangladesh 🇧🇩 (Optional)'],
    features: [
      'Budget-Friendly Low Cost',
      'Reliable Internet Access 10 Gbps',
      'বিকাশ, নগদ এর জন্য WeChat: developerrana',
      'Perfect for Daily Browse & Social Media',
      'Unlock Various Websites & Apps',
      'Online Customer Service Support',
      'Refundable 1 Month Plan Only💰'
    ],
    isRefundable: true
  },
  {
    id: 'general',
    name: 'General',
    price: 15.00,
    currency: '¥',
    billing: 'Monthly',
    traffic: '200 GB Traffic/Month',
    devices: '5 Device Support',
    speed: 'Up to 150 Mbps Speed',
    servers: ['USA 🇺🇸', 'Bangladesh 🇧🇩', 'Others...'],
    features: [
      'Best Value for Power Users',
      'Faster network 10Gbps',
      'বিকাশ, নগদ এর জন্য WeChat: developerrana',
      'Ideal for HD Streaming & Gaming',
      'Unlocks All Major Streaming Services',
      'Priority Customer Support',
      'Contact WeChat: developerrana'
    ],
    isRefundable: false,
    isPopular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 20.00,
    currency: '¥',
    billing: 'Monthly',
    traffic: '350 GB Traffic/Month',
    devices: '10 Device Support',
    speed: 'Uncapped Maximum Speed 10 Gbps',
    servers: ['UK 🇬🇧', 'USA 🇺🇸', 'India 🇮🇳', 'Bangladesh🇧🇩'],
    features: [
      'The Ultimate Performance Plan',
      'ব্রিলিয়ান্ট, আলাপ সাপোর্টেড (বিকাশ, নগদ এর জন্য WeChat: developerrana)',
      'For 4K Streaming & Hardcore Gaming',
      'Uncompromising Access to All Content',
      'Zero Throttling, Ever',
      'Top-Priority 24/7 Support',
      'Contact WeChat: developerrana'
    ],
    isRefundable: false,
    badge: '即将售罄'
  },
  {
    id: 'heavy',
    name: 'Heavy',
    price: 25.00,
    currency: '¥',
    billing: 'Monthly',
    traffic: '500 GB Traffic/Month',
    devices: '15 Device Support',
    speed: 'Uncapped Maximum Speed 10 Gbps',
    servers: ['UK 🇬🇧', 'USA 🇺🇸', 'India 🇮🇳', 'Bangladesh🇧🇩'],
    features: [
      'The Ultimate Performance Plan',
      'ব্রিলিয়ান্ট, আলাপ সাপোর্টেড (বিকাশ, নগদ এর জন্য WeChat: developerrana)',
      'For 4K Streaming & Hardcore Gaming',
      'Uncompromising Access to All Content',
      'Zero Throttling, Ever',
      'Top-Priority 24/7 Support',
      'Contact WeChat: developerrana'
    ],
    isRefundable: false
  },
  {
    id: 'family',
    name: 'Family',
    price: 30.00,
    currency: '¥',
    billing: 'Monthly',
    traffic: '1000 GB Traffic/Month',
    devices: '20+ Device Support',
    speed: 'Uncapped Maximum Speed 10 Gbps',
    servers: ['USA 🇺🇸', 'Bangladesh🇧🇩', 'and more'],
    features: [
      'The Ultimate Performance Plan',
      'ব্রিলিয়ান্ট, আলাপ সাপোর্টেড (বিকাশ, নগদ এর জন্য WeChat: developerrana)',
      'For 4K Streaming & Hardcore Gaming',
      'Uncompromising Access to All Content',
      'Zero Throttling, Ever',
      'Top-Priority 24/7 Support',
      'Contact WeChat: developerrana'
    ],
    isRefundable: false
  },
  {
    id: 'unlimited-300',
    name: '300 GB Unlimited',
    price: 50.00,
    currency: '¥',
    billing: 'One Time',
    traffic: '300 GB One-Time Traffic',
    devices: 'Unlimited Device Support',
    speed: 'High-Speed Network Access up to 200 Mbps',
    servers: ['Global Servers'],
    features: [
      'Best Value One-Time Pack',
      'Data Never Expires',
      'For Regular, Flexible Use',
      'Online Customer Service'
    ],
    isRefundable: false
  },
  {
    id: 'unlimited-500',
    name: '500 GB Unlimited',
    price: 90.00,
    currency: '¥',
    billing: 'One Time',
    traffic: '500 GB One-Time Traffic',
    devices: 'Unlimited Device Support',
    speed: 'High-Speed Network Access',
    servers: ['Global Servers'],
    features: [
      'Best Value One-Time Pack',
      'Data Never Expires',
      'For Heavy Usage',
      'Online Customer Service'
    ],
    isRefundable: false
  }
];