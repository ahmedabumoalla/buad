export default function ResultCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-white/5 p-5 rounded-xl">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 whitespace-pre-line">{content}</p>
    </div>
  );
}
