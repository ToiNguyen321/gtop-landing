import React from "react";
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Chính Sách Quyền Riêng Tư - GTop",
  description:
    "Chính sách quyền riêng tư của GTop - Ứng dụng khám phá địa điểm ăn uống và vui chơi",
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Chính Sách Quyền Riêng Tư
          </h1>

          <p className="text-foreground-accent mb-8">
            <strong>Ngày có hiệu lực:</strong> 30/03/2025
          </p>

          <p className="text-foreground-accent mb-8">
            Cảm ơn bạn đã sử dụng GTop ("chúng tôi"). Quyền riêng tư của bạn rất
            quan trọng. Chính sách này giải thích cách chúng tôi thu thập, sử
            dụng, chia sẻ và bảo vệ thông tin của bạn khi sử dụng ứng dụng.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Thông Tin Chúng Tôi Thu Thập
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>
                <strong>Thông tin cá nhân:</strong> Tên, email, số điện thoại,
                thông tin hồ sơ.
              </li>
              <li>
                <strong>Dữ liệu sử dụng:</strong> Nhật ký truy cập, địa chỉ IP,
                thông tin thiết bị.
              </li>
              <li>
                <strong>Dữ liệu vị trí:</strong> Nếu bạn cho phép, chúng tôi có
                thể thu thập vị trí để cải thiện dịch vụ.
              </li>
              <li>
                <strong>Hình ảnh và tập tin:</strong> Nếu bạn tải lên hình ảnh
                hoặc video, chúng tôi sẽ lưu trữ và xử lý.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Cách Chúng Tôi Sử Dụng Thông Tin
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>Cung cấp, vận hành và cải thiện dịch vụ.</li>
              <li>Cá nhân hóa trải nghiệm người dùng.</li>
              <li>Liên lạc với bạn, bao gồm hỗ trợ khách hàng.</li>
              <li>Đảm bảo an toàn và ngăn chặn gian lận.</li>
              <li>Tuân thủ các nghĩa vụ pháp lý.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Chia Sẻ Thông Tin Của Bạn
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>
                <strong>Nhà cung cấp dịch vụ:</strong> Đối tác hỗ trợ chức năng
                ứng dụng (lưu trữ, phân tích, hỗ trợ khách hàng).
              </li>
              <li>
                <strong>Cơ quan pháp luật:</strong> Khi có yêu cầu hợp pháp hoặc
                bảo vệ quyền lợi của chúng tôi.
              </li>
              <li>
                <strong>Chuyển nhượng kinh doanh:</strong> Trong trường hợp sáp
                nhập, mua bán doanh nghiệp.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Bảo Mật Dữ Liệu
            </h2>
            <p className="text-foreground-accent">
              Chúng tôi áp dụng các biện pháp bảo mật để bảo vệ dữ liệu của bạn.
              Tuy nhiên, không có phương thức truyền dữ liệu nào là an toàn
              tuyệt đối.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Quyền & Lựa Chọn Của Bạn
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>Truy cập, cập nhật hoặc xóa thông tin cá nhân.</li>
              <li>Hủy đăng ký nhận thông báo quảng cáo.</li>
              <li>Hạn chế hoặc rút lại sự đồng ý xử lý dữ liệu.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Dịch Vụ Bên Thứ Ba
            </h2>
            <p className="text-foreground-accent">
              Ứng dụng có thể chứa liên kết đến dịch vụ bên thứ ba. Chúng tôi
              không chịu trách nhiệm về chính sách quyền riêng tư của họ.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Quyền Riêng Tư Của Trẻ Em
            </h2>
            <p className="text-foreground-accent">
              Ứng dụng không dành cho người dùng dưới 13 tuổi. Nếu phát hiện dữ
              liệu trẻ em, chúng tôi sẽ xóa ngay lập tức.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Thay Đổi Chính Sách
            </h2>
            <p className="text-foreground-accent">
              Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay
              đổi có hiệu lực ngay khi được đăng.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Liên Hệ
            </h2>
            <p className="text-foreground-accent">
              Nếu có câu hỏi về chính sách này, vui lòng liên hệ:
              <a
                href="mailto:GTop.06368@gmail.com"
                className="text-secondary hover:text-primary ml-1"
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

export default PrivacyPolicyPage;
