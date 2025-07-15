import Container from "@/components/Container";
import React from "react";

const EmailFailurePage: React.FC = () => {
  return (
    <Container>
      <div className="min-h-screen bg-red-50 flex items-center justify-center px-4">
        <div className="bg-background rounded-2xl shadow-lg p-10 max-w-md w-full text-center animate-fade-in">
          <div className="text-6xl text-red-500 mb-5">❌</div>
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            Thất bại!
          </h1>
          <p className="text-foreground-accent mb-4">
            Không thể xác thực email vì quá hạn hoặc thông tin không chính xác!
          </p>
          <p className="text-foreground-accent text-sm">
            Vui lòng thử lại hoặc liên hệ bộ phận hỗ trợ để được trợ giúp.
          </p>
        </div>

        {/* <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease;
          }
        `}</style> */}
      </div>
    </Container>
  );
};

export default EmailFailurePage;
