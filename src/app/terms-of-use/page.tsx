import React from "react";
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Điều khoản Sử dụng - GTop",
  description:
    "Điều khoản sử dụng của GTop - Ứng dụng khám phá địa điểm ăn uống và vui chơi",
};

const TermsOfUsePage: React.FC = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Điều khoản Sử dụng
          </h1>

          <p className="text-foreground-accent mb-8">
            Vui lòng đọc kỹ trước khi sử dụng ứng dụng GTop
          </p>

          <p className="text-foreground-accent mb-8">
            Chào mừng bạn đến với GTop! Bằng cách sử dụng ứng dụng, bạn đồng ý
            với các điều khoản dưới đây.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Chấp nhận Điều khoản
            </h2>
            <p className="text-foreground-accent">
              Khi sử dụng GTop, bạn đồng ý tuân thủ Điều khoản Sử dụng và Chính
              sách Bảo mật của chúng tôi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Nội dung do người dùng tạo
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>
                Người dùng có thể đăng bài viết, hình ảnh, video, đánh giá và
                bình luận.
              </li>
              <li>
                Bạn đồng ý không đăng tải nội dung phản cảm, thù địch, phân
                biệt, quấy rối, khiêu dâm hoặc vi phạm pháp luật.
              </li>
              <li>
                Chúng tôi có quyền xoá hoặc ẩn bất kỳ nội dung nào bị đánh giá
                là không phù hợp.
              </li>
              <li>
                Bạn có thể báo cáo nội dung hoặc người dùng thông qua nút "Báo
                cáo" trong ứng dụng.
              </li>
              <li>
                Chúng tôi cam kết xử lý các báo cáo vi phạm trong vòng 24 giờ.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Quyền và nghĩa vụ người dùng
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>Bạn chịu trách nhiệm cho mọi nội dung bạn đăng tải.</li>
              <li>
                Chúng tôi có quyền chấm dứt tài khoản nếu bạn vi phạm điều khoản
                sử dụng.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Thay đổi điều khoản
            </h2>
            <p className="text-foreground-accent">
              GTop có thể cập nhật Điều khoản Sử dụng bất kỳ lúc nào. Chúng tôi
              sẽ thông báo rõ ràng khi có thay đổi quan trọng.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Liên hệ
            </h2>
            <p className="text-foreground-accent">
              Mọi thắc mắc hoặc yêu cầu hỗ trợ, vui lòng liên hệ qua email:
              <a
                href="mailto:GTop.06368@gmail.com"
                className="text-foreground hover:text-primary ml-1"
              >
                GTop.06368@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfUsePage;
