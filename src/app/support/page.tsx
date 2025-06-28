import React from "react";
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Hỗ trợ người dùng - GTop",
  description: "Trung tâm hỗ trợ GTop - Chúng tôi luôn sẵn sàng hỗ trợ bạn",
};

const SupportPage: React.FC = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Trung tâm hỗ trợ GTop
          </h1>

          <p className="text-foreground mb-8">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn!
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              📩 Liên hệ với chúng tôi
            </h2>
            <p className="text-foreground mb-4">
              Nếu bạn gặp sự cố hoặc có thắc mắc về cách sử dụng ứng dụng GTop,
              vui lòng liên hệ qua email:
            </p>
            <p className="text-foreground">
              <strong>Email hỗ trợ:</strong>
              <a
                href="mailto:GTop.06368@gmail.com"
                className="text-foreground hover:text-primary ml-2"
              >
                GTop.06368@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              🔍 Câu hỏi thường gặp
            </h2>
            <p className="text-foreground">
              Chúng tôi đang hoàn thiện mục Hỏi Đáp (FAQ) để bạn có thể dễ dàng
              tìm thấy câu trả lời cho các vấn đề thường gặp. Tạm thời, hãy liên
              hệ trực tiếp với chúng tôi qua email nếu cần.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              👮‍♂️ Báo cáo nội dung vi phạm
            </h2>
            <p className="text-foreground">
              Nếu bạn thấy nội dung không phù hợp hoặc có hành vi gây rối từ
              người dùng khác, vui lòng sử dụng tính năng
              <strong className="ml-1">"Báo cáo"</strong> trong ứng dụng hoặc
              gửi email trực tiếp đến
              <a
                href="mailto:GTop.06368@gmail.com"
                className="text-foreground hover:text-primary ml-1"
              >
                GTop.06368@gmail.com
              </a>
              để chúng tôi xử lý trong vòng 24 giờ.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default SupportPage;
