import React from "react";
import { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Xóa Tài Khoản - GTop",
  description: "Hướng dẫn xóa tài khoản GTop",
};

const DeleteAccountPage: React.FC = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Hướng Dẫn Xóa Tài Khoản
          </h1>

          <p className="text-foreground-accent mb-8">
            Nếu bạn muốn xóa tài khoản của mình, vui lòng làm theo các bước sau:
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Bước 1: Mở Ứng Dụng
            </h2>
            <p className="text-foreground-accent">
              Đăng nhập vào ứng dụng và truy cập phần <strong>Hồ sơ</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Bước 2: Chọn "Xóa Tài Khoản"
            </h2>
            <p className="text-foreground-accent">
              Trong cài đặt tài khoản, cuộn xuống và chọn tùy chọn
              <strong>Xóa Tài Khoản</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Bước 3: Xác Nhận Xóa
            </h2>
            <p className="text-foreground-accent">
              Bạn sẽ được yêu cầu xác nhận việc xóa tài khoản. Hãy đọc kỹ và
              nhấn
              <strong>Xác Nhận</strong> nếu bạn đồng ý.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Lưu ý Quan Trọng
            </h2>
            <ul className="list-disc pl-6 text-foreground-accent space-y-2">
              <li>
                Sau khi tài khoản bị xóa, tất cả dữ liệu liên quan sẽ bị mất và
                không thể khôi phục.
              </li>
              <li>
                Nếu bạn chỉ muốn tạm dừng sử dụng, bạn có thể đăng xuất thay vì
                xóa tài khoản.
              </li>
              <li>
                Nếu gặp sự cố, vui lòng liên hệ
                <a
                  href="mailto:GTop.06368@gmail.com"
                  className="text-secondary hover:text-primary ml-1"
                >
                  GTop.06368@gmail.com
                </a>{" "}
                để được hỗ trợ.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default DeleteAccountPage;
