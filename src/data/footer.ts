import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Khám phá những địa điểm ăn chơi, sống ảo và trải nghiệm thật được chia sẻ bởi cộng đồng GTop.",
  quickLinks: [
    {
      text: "Tính năng",
      url: "#features",
    },
    {
      text: "Địa điểm nổi bật",
      url: "#places",
    },
    {
      text: "Cảm nhận người dùng",
      url: "#testimonials",
    },
    {
      text: "Câu hỏi thường gặp",
      url: "#faq",
    },
  ],
  email: "gtop.06368@gmail.com",
  telephone: "",
  socials: {
    facebook: "https://www.facebook.com/gtop.professional",
    // instagram: "https://www.instagram.com/gtop",
    // linkedin: "https://www.linkedin.com/company/gtop",
    // twitter: "https://twitter.com/gtop",
  },
};
