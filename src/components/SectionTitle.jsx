export default function SectionTitle({ label, eyebrow }) {
  return (
    <div className="mb-10">
      <p className="text-blue-600 font-mono uppercase text-xs tracking-widest">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-gray-900">{label}</h2>
    </div>
  );
}
