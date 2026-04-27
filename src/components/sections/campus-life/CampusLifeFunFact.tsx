export default function CampusLifeFunFact() {
  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "15:1", label: "Student-Teacher Ratio" },
    { value: "20+", label: "Qualified Educators" },
  ];

  return (
    <div className="py-16 md:py-24 bg-primary-400 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-6 md:py-4 text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight font-sans mb-3">
                {stat.value}
              </h2>
              <p className="text-base md:text-lg text-white font-medium uppercase tracking-wider font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
