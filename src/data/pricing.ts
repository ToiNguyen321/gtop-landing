import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Khách ghé thăm",
    price: "Miễn phí",
    descriptionFeature: "Bao gồm các tính năng cơ bản:",
    features: [
      "Xem địa điểm & bài viết",
      "Tìm kiếm và lọc cơ bản",
      "Xem đánh giá từ người dùng",
    ],
  },
  {
    name: "Thành viên GTop",
    price: "Miễn phí",
    descriptionFeature: "Bao gồm tất cả tính năng cơ bản, thêm vào đó:",

    features: [
      "Lưu địa điểm yêu thích",
      "Viết & đăng đánh giá",
      "Gợi ý cá nhân hóa theo sở thích",
      "Bình luận, chia sẻ trải nghiệm",
    ],
  },
  {
    name: "Reviewer xác thực",
    price: "Miễn phí",
    descriptionFeature: "Bao gồm tất cả tính năng cơ bản, thêm vào đó:",
    features: [
      "Huy hiệu reviewer uy tín",
      "Được ưu tiên hiển thị bài viết",
      "Tham gia sự kiện cộng đồng",
      "Nhận thưởng khi bài viết nổi bật",
      "Báo cáo địa điểm sai lệch, spam",
    ],
  },
];
