import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { text } = await req.json();

  const prompt = `
أنت مستشار إخراجي مسرحي محترف.

حلل النص المسرحي التالي ثم قدّم النتائج بالترتيب:

1. تحليل فني مختصر لطبيعة النص وأسلوبه.
2. تحديد الجمهور المستهدف المناسب لهذا العمل المسرحي.
3. اقتراح نوع دور العرض الأنسب (ثقافية، تجريبية، جماهيرية).
4. إنشاء تصور إخراجي مسرحي (Storyboard) يتضمن:
   - مشهد افتتاحي (وصف بصري + إضاءة + توزيع ممثلين)
   - مشهد الذروة (تصاعد درامي + حركة + إضاءة)
   - مشهد الختام (إضاءة نهائية + حالة شعورية + رسالة)

اكتب بأسلوب إخراجي مسرحي احترافي، واضح، ومنظم.
تجنب المصطلحات السينمائية.

النص المسرحي:
${text}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const content = completion.choices[0].message.content || "";

  return NextResponse.json({
    analysis: content.split("2.")[0],
    audience: content.split("2.")[1]?.split("3.")[0],
    venues: content.split("3.")[1]?.split("4.")[0],
    storyboard: content.split("4.")[1],
  });
}
