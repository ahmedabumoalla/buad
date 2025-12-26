"use client";

import UploadBox from "@/components/UploadBox";

export default function Analyze() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 15% 25%, #31bbb8 0%, transparent 35%),
          radial-gradient(circle at 85% 20%, #db1e3c 0%, transparent 40%),
          radial-gradient(circle at 50% 85%, #f6922a 0%, transparent 45%),
          linear-gradient(180deg, #907e7eff 0%, #d9cacaff 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <section
        style={{
          maxWidth: "720px",
          width: "100%",
          background: "rgba(216, 205, 205, 0.4)",
          backdropFilter: "blur(20px)",
          borderRadius: "28px",
          padding: "56px 48px",
          boxShadow: "0 40px 120px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#003243",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          تحليل النص المسرحي
        </h1>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#003243",
            opacity: 0.85,
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          الصق النص المسرحي أدناه ليقوم الذكاء الاصطناعي
          بتحليله وفهم جمهوره وبناء تصور إخراجي داعم
          لاتخاذ قرارات فنية وتسويقية أدق
        </p>

        <UploadBox />
      </section>
    </main>
  );
}
