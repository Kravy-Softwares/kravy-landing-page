export default function SectionWrapper({ title = "", description = "", children }) {
  return (
    <section className="mt-20 px-0 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-neutral-800 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 text-sm dark:text-neutral-400 mt-2 font-medium">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
