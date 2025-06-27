import {
  FiBookmark,
  FiCamera,
  FiHeart,
  FiLock,
  FiMapPin,
  FiSearch,
  FiUser,
  FiFlag,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Trang chủ – Khám phá địa điểm hot",
    description:
      "Ngay khi vào app, GTop hiển thị danh sách các địa điểm nổi bật, phù hợp với sở thích và vị trí của bạn, giúp việc tìm quán xá hoặc chỗ vui chơi trở nên dễ dàng và nhanh chóng.",
    bullets: [
      {
        title: "Danh sách địa điểm nổi bật",
        description:
          "Hiển thị những địa điểm hot nhất, gợi ý dựa trên xu hướng và gu cá nhân của bạn.",
        icon: <FiMapPin size={26} />,
      },
      {
        title: "Lưu nhanh địa điểm yêu thích",
        description:
          "Dễ dàng lưu lại những quán ăn, điểm check-in để khám phá sau này.",
        icon: <FiBookmark size={26} />,
      },
      {
        title: "Khám phá theo mood & vibe",
        description:
          "Tìm những nơi phù hợp với tâm trạng: chill, nhộn nhịp, sống ảo hay lãng mạn.",
        icon: <FiHeart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Tìm kiếm thông minh",
    description:
      "Tìm kiếm địa điểm dễ dàng theo danh mục, món ăn, vibe hoặc theo vị trí. GTop hỗ trợ lấy định vị để gợi ý nơi gần bạn nhất.",
    bullets: [
      {
        title: "Tìm kiếm theo danh mục hoặc từ khóa",
        description:
          "Tìm nhanh món ăn, quán xá, loại hình vui chơi theo keyword hoặc danh mục cụ thể.",
        icon: <FiSearch size={26} />,
      },
      {
        title: "Tìm gần vị trí của bạn",
        description:
          "Sử dụng định vị GPS để tìm những địa điểm xung quanh bạn, tiện lợi và nhanh chóng.",
        icon: <FiMapPin size={26} />,
      },
      {
        title: "Xem ảnh thực tế",
        description:
          "Danh sách kết quả hiển thị ảnh thật do người dùng chia sẻ, giúp bạn dễ hình dung không gian.",
        icon: <FiCamera size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Chi tiết địa điểm đầy đủ",
    description:
      "Xem mọi thông tin chi tiết của địa điểm: ảnh thật, review từ cộng đồng, địa chỉ, bản đồ, cùng tính năng báo cáo sai sót để bảo vệ cộng đồng.",
    bullets: [
      {
        title: "Review chân thực từ người dùng",
        description:
          "Hiển thị tất cả đánh giá, hình ảnh thực tế, giúp bạn yên tâm lựa chọn địa điểm.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Báo cáo địa điểm",
        description:
          "Cho phép người dùng report địa điểm nếu thông tin không đúng, hình ảnh giả hoặc trải nghiệm không tốt.",
        icon: <FiFlag size={26} />,
      },
      {
        title: "Thông tin chi tiết & bảo mật",
        description:
          "Hiển thị địa chỉ, giờ mở cửa, bản đồ, thông tin liên hệ; đồng thời đảm bảo quyền riêng tư cho người dùng.",
        icon: <FiLock size={26} />,
      },
    ],
    imageSrc: "/images/mockup-3.webp",
  },
];
