export default function Section({ id, children }) {
  return (
    <section id={id} className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
