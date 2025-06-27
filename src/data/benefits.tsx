import {
  FiBookmark,
  FiCamera,
  FiHeart,
  FiLock,
  FiMapPin,
  FiSearch,
  FiShield,
  FiUser,
  FiUsers,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Khám phá theo sở thích cá nhân",
    description:
      "GTop hiểu gu của bạn, đề xuất địa điểm ăn uống, vui chơi, check-in phù hợp chỉ trong vài thao tác.",
    bullets: [
      {
        title: "Đề xuất thông minh",
        description:
          "Dựa trên lịch sử, hành vi và sở thích, GTop cá nhân hóa từng gợi ý địa điểm.",
        icon: <FiMapPin size={26} />,
      },
      {
        title: "Lưu lại địa điểm yêu thích",
        description: "Dễ dàng lưu lại quán xá và nơi chốn để ghé lại sau này.",
        icon: <FiBookmark size={26} />,
      },
      {
        title: "Khám phá theo mood & vibe",
        description:
          "Tìm nơi phù hợp với tâm trạng: chill, náo nhiệt, lãng mạn, sống ảo,…",
        icon: <FiHeart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Review thật từ cộng đồng",
    description:
      "Tất cả đánh giá đều từ người dùng thực. Hình ảnh và trải nghiệm thật – không chỉnh sửa, không quảng cáo.",
    bullets: [
      {
        title: "Ảnh chụp thực tế",
        description: "Hình ảnh do người dùng đăng, không qua photoshop.",
        icon: <FiCamera size={26} />,
      },
      {
        title: "Đánh giá có xác thực",
        description:
          "Review chỉ đến từ người đã check-in hoặc sử dụng dịch vụ.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "Tìm kiếm theo từ khóa",
        description:
          "Tìm món ăn, không gian, địa điểm theo nội dung người dùng chia sẻ.",
        icon: <FiSearch size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Bảo mật và quyền riêng tư",
    description:
      "Chúng tôi tôn trọng thông tin cá nhân và hành vi người dùng. GTop được xây dựng với tiêu chuẩn bảo mật cao nhất.",
    bullets: [
      {
        title: "Bảo mật thông tin cá nhân",
        description:
          "Dữ liệu của bạn được mã hóa và không chia sẻ cho bên thứ ba.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Đăng nhập an toàn",
        description:
          "Hỗ trợ xác thực qua OTP, sinh trắc học hoặc social login đáng tin cậy.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Giám sát bảo mật liên tục",
        description:
          "Phát hiện hoạt động bất thường và cảnh báo kịp thời để bảo vệ tài khoản.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
