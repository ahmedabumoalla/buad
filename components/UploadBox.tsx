"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadBox() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function analyze() {
    if (!text.trim()) return;

    setLoading(true);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    sessionStorage.setItem("result", JSON.stringify(data));

    setTimeout(() => {
      router.push("/result");
    }, 800);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {/* مربع النص */}
        <textarea
          placeholder="الصق النص المسرحي هنا…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            minHeight: "220px",
            padding: "18px 6px",
            fontSize: "16.5px",
            lineHeight: 1.8,
            borderRadius: "18px",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            outline: "none",
            resize: "vertical",
            color: "#050505ff",
            backgroundColor: "#c1baba83",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          }}
        />

        {/* زر التحليل */}
        <div
          onClick={!loading ? analyze : undefined}
          style={{
            alignSelf: "center",
            width: "260px",
            height: "58px",
            borderRadius: "18px",
            background: loading
              ? "linear-gradient(135deg, #9ca3af, #6b7280)"
              : "linear-gradient(135deg, #003243, #31bbb8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: loading
              ? "none"
              : "0 18px 50px rgba(0,50,67,0.35)",
            transition: "all 0.2s ease",
          }}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  border: "3px solid #ffffff",
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                جارٍ تحليل النص…
              </span>
            </div>
          ) : (
            <span
              style={{
                color: "#ffffffff",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.3px",
              }}
            >
              حلّل النص بالذكاء الاصطناعي
            </span>
          )}
        </div>
      </div>

      {/* حركة الدوران */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
