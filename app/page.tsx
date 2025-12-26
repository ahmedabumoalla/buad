"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 20%, #31bbb8 0%, transparent 35%),
          radial-gradient(circle at 80% 30%, #db1e3c 0%, transparent 40%),
          radial-gradient(circle at 50% 80%, #f6922a 0%, transparent 45%),
          linear-gradient(180deg, #ffffff 0%, #ffffffff 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <section
        style={{
          maxWidth: "640px",
          width: "100%",
          textAlign: "center",
          background: "rgba(216, 205, 205, 0.4)",
          backdropFilter: "blur(20px)",
          borderRadius: "28px",
          padding: "64px 40px",
          boxShadow: "0 40px 120px rgba(0,0,0,0.15)",
        }}
      >
        {/* الشعار */}
        <div style={{ marginBottom: "32px" }}>
          <Image
            src="/logo-theatre-ai.png"
            alt="Theatre AI Logo"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* العنوان */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#003243",
            marginBottom: "20px",
          }}
        >
          منصة ذكية ترتقي بصناعة المسرح
        </h1>

        {/* الوصف */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: 2,
            color: "#003243",
            opacity: 0.85,
            marginBottom: "48px",
          }}
        >
          تحليل النصوص المسرحية، بناء التصور الإخراجي،
          وفهم الجمهور لاتخاذ قرارات فنية وتسويقية أدق
          مدعومة بالذكاء الاصطناعي
        </p>

        {/* زر دخول أنيق */}
        <div
          onClick={() => router.push("/analyze")}
          style={{
            width: "220px",
            height: "64px",
            margin: "0 auto",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #003243, #31bbb8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 18px 50px rgba(0,50,67,0.35)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 26px 70px rgba(0,50,67,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 18px 50px rgba(0,50,67,0.35)";
          }}
        >
          <span
            style={{
              color: "#ffffffff",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            ابدأ التجربة
          </span>
        </div>
      </section>
    </main>
  );
}
