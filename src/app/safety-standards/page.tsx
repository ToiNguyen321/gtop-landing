import React from "react";
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Tiêu chuẩn An toàn Trẻ em - GTop",
  description: "Cam kết của GTop về an toàn trẻ em và bảo vệ người dùng",
};

const SafetyStandardsPage: React.FC = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Tiêu chuẩn An toàn Trẻ em
          </h1>

          <p className="text-gray-600 mb-10 leading-relaxed text-base">
            Chúng tôi cam kết tạo ra một môi trường an toàn và tôn trọng cho tất
            cả người dùng, đặc biệt là trẻ vị thành niên. Nền tảng của chúng tôi
            có chính sách không khoan nhượng đối với lạm dụng tình dục trẻ em và
            bóc lột (CSAE). Chúng tôi thực hiện các bước chủ động để ngăn chặn,
            phát hiện và hành động đối với bất kỳ hành vi hoặc nội dung đáng ngờ
            nào có thể gây hại cho trẻ em.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Cam kết của chúng tôi về An toàn Trẻ em
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi ưu tiên sự an toàn của trẻ em trên nền tảng thông qua
              việc ngăn chặn, phát hiện và thực thi nghiêm ngặt các chính sách
              an toàn.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Chính sách & Biện pháp được áp dụng
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "✅ Xác minh độ tuổi",
                  items: [
                    "Chỉ những người từ 18 tuổi trở lên mới được phép sử dụng ứng dụng của chúng tôi.",
                    "Chúng tôi thực hiện xác minh độ tuổi trong quá trình đăng ký.",
                    "Người dùng khai sai tuổi sẽ bị cấm vĩnh viễn.",
                  ],
                },
                {
                  title: "✅ Kiểm duyệt nội dung",
                  items: [
                    "Tất cả nội dung do người dùng tạo đều được kiểm duyệt tự động và thủ công.",
                    "Công cụ AI đánh dấu nội dung có thể vi phạm tiêu chuẩn an toàn trẻ em.",
                    "Nội dung bị đánh dấu sẽ được xem xét và gỡ bỏ nhanh chóng.",
                  ],
                },
                {
                  title: "✅ Công cụ Báo cáo và Chặn",
                  items: [
                    "Người dùng có thể dễ dàng báo cáo tin nhắn, hồ sơ hoặc phương tiện.",
                    "Các báo cáo được ưu tiên và điều tra kịp thời.",
                    "Tính năng chặn ngăn chặn liên lạc không mong muốn.",
                  ],
                },
                {
                  title: "✅ Hợp tác với Cơ quan Thực thi Pháp luật",
                  items: [
                    "Chúng tôi hợp tác với các cơ quan chức năng trong các cuộc điều tra CSAE.",
                    "Dữ liệu được bảo quản và chia sẻ khi được yêu cầu hợp pháp.",
                  ],
                },
                {
                  title: "✅ Giáo dục và Nâng cao nhận thức",
                  items: [
                    "Chúng tôi giáo dục người dùng về cách nhận biết và tránh dụ dỗ trực tuyến.",
                    "Hướng dẫn an toàn được cập nhật thường xuyên trong ứng dụng.",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Chính sách Không khoan nhượng
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bất kỳ người dùng nào được phát hiện thúc đẩy, tham gia hoặc tạo
              điều kiện cho CSAE sẽ bị cấm vĩnh viễn, báo cáo cho cơ quan chức
              năng và có thể phải đối mặt với hậu quả pháp lý.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Báo cáo Lo ngại hoặc Vi phạm
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nếu bạn nghi ngờ có hành vi CSAE trên ứng dụng của chúng tôi, hãy
              liên hệ ngay lập tức:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-4">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:gtop.06368@gmail.com"
                  className="text-foreground hover:text-primary ml-1"
                >
                  gtop.06368@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Tất cả báo cáo đều được bảo mật và được xử lý bởi đội ngũ chuyên
              dụng 24/7.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Tiêu chuẩn Tham khảo
            </h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>WeProtect Global Alliance</li>
              <li>Technology Coalition's Project Protect</li>
              <li>Google Play Child Safety Policies</li>
              <li>Apple App Store Review Guidelines</li>
            </ul>
          </section>

          <p className="text-gray-600 leading-relaxed">
            Trang này được công khai truy cập và thường xuyên cập nhật để phản
            ánh những nỗ lực mới nhất của chúng tôi trong việc giữ an toàn cho
            trẻ em trực tuyến.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SafetyStandardsPage;
