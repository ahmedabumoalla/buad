"use client";

import { useEffect, useState } from "react";

type ResultData = {
  analysis?: string;
  audience?: string;
  venues?: string;
  storyboard?: string;
};

export default function ResultPage() {
  const [data, setData] = useState<ResultData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("result");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          جارٍ تحميل النتائج…
        </p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 20%, #31bbb8 0%, transparent 35%),
          radial-gradient(circle at 80% 30%, #db1e3c 0%, transparent 40%),
          radial-gradient(circle at 50% 85%, #f6922a 0%, transparent 45%),
          linear-gradient(180deg, #ffffff 0%, #ffffff 100%)
        `,
        padding: "40px 24px",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(216, 205, 205, 0.65)",
          backdropFilter: "blur(22px)",
          borderRadius: "32px",
          padding: "56px 48px",
          boxShadow: "0 40px 120px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#003243",
              marginBottom: "12px",
            }}
          >
            نتائج تحليل النص المسرحي
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#003243",
              opacity: 2,
            }}
          >
            هذه النتائج تم توليدها لدعم التخطيط الإخراجي والتسويقي
            ومساعدة صُنّاع المسرح على اتخاذ قرارات أوضح
            دون المساس بالهوية الفنية للعمل
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "28px",
          }}
        >
          <ResultCard
            title="🧠 التحليل الفني للنص"
            content={data.analysis}
          />

          <ResultCard
            title="🎯 الجمهور المستهدف"
            content={data.audience}
          />

          <ResultCard
            title="🏛️ دور العرض المناسبة"
            content={data.venues}
          />

          <div
            style={{
              padding: "32px",
              borderRadius: "24px",
              background:
                "linear-gradient(180deg, rgba(0,50,67,0.04), rgba(0,50,67,0.01))",
              border: "1px solid rgba(0,50,67,0.12)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#003243",
                marginBottom: "20px",
              }}
            >
              🎬 التصور الإخراجي المقترح (Storyboard)
            </h3>

            <div
              style={{
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#003243",
                opacity: 2,
                whiteSpace: "pre-line",
              }}
            >
              {data.storyboard?.replace(/^#+\s*/gm, "")}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResultCard({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  return (
    <div
      style={{
        padding: "28px",
        borderRadius: "22px",
        background:
          "linear-gradient(180deg, rgba(0,50,67,0.05), rgba(0,50,67,0.015))",
        border: "1px solid rgba(0,50,67,0.12)",
      }}
    >
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 800,
          color: "#003243",
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "16px",
          lineHeight: 1.9,
          color: "#003243",
          opacity: 2,
          whiteSpace: "pre-line",
        }}
      >
        {content
  ?.replace(/^#+\s*/gm, "")
  .replace(/\*\*/g, "")
}
      </p>
    </div>
  );
}
