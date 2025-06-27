import { IStats } from "@/types";
import { BsBookmarkCheckFill, BsFillStarFill } from "react-icons/bs";
import { PiUsersThreeFill } from "react-icons/pi";

export const stats: IStats[] = [
  {
    title: "100K+",
    icon: <PiUsersThreeFill size={34} className="text-indigo-500" />,
    description:
      "Người dùng đang khám phá, chia sẻ địa điểm ăn chơi mỗi ngày trên GTop.",
  },
  {
    title: "4.9 ★",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "Xếp hạng trung bình từ người dùng trên App Store và Google Play.",
  },
  {
    title: "10K+",
    icon: <BsBookmarkCheckFill size={34} className="text-green-600" />,
    description:
      "Địa điểm đã được lưu và đánh dấu yêu thích bởi cộng đồng GTop.",
  },
];
