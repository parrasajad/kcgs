import Link from "next/link";

export default function NewsSection() {
  const announcements = [
    {
      id: 1,
      category: "Announcement",
      title: "School Reopening Guidelines for Academic Session 2026–27",
      date: "Mar 15, 2026",
      excerpt:
        "As we prepare for the upcoming academic year, we are pleased to share the comprehensive guidelines ensuring a safe, productive, and enriching environment for all our students and staff.",
      image: "/assets/images/campus-life/student-life.webp",
    },
    {
      id: 2,
      category: "Academic",
      title: "New Advanced Placement Courses Added to Curriculum",
      date: "Mar 12, 2026",
      image: "/assets/images/campus-life/student-life-2.webp",
    },
    {
      id: 3,
      category: "Sports",
      title: "KCGS Wins Regional Inter-School Football Championship",
      date: "Mar 10, 2026",
      image: "/assets/images/campus-life/athletics.webp",
    },
    {
      id: 4,
      category: "Technology",
      title: "Campus-Wide Wi-Fi Upgrade Completed Ahead of Schedule",
      date: "Mar 08, 2026",
      image: "/assets/images/campus-life/eco-club-summer-camp.webp",
    },
    {
      id: 5,
      category: "Arts",
      title: "Annual Spring Arts Exhibition Highlights Student Creativity",
      date: "Mar 05, 2026",
      image: "/assets/images/campus-life/art-culture.webp",
    },
    {
      id: 5,
      category: "Arts",
      title: "Annual Spring Arts Exhibition Highlights Student Creativity",
      date: "Mar 05, 2026",
      image: "/assets/images/campus-life/art-culture.webp",
    },
    {
      id: 5,
      category: "Arts",
      title: "Annual Spring Arts Exhibition Highlights Student Creativity",
      date: "Mar 05, 2026",
      image: "/assets/images/campus-life/art-culture.webp",
    },
  ];

  const featured = announcements[0];
  const rest = announcements.slice(1);

  const categoryColor: Record<string, string> = {
    Announcement: "text-secondary",
    Academic: "text-primary-600",
    Sports: "text-primary-600",
    Technology: "text-primary-600",
    Arts: "text-primary-600",
  };

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            News &amp; Announcements
          </h2>
        </div>

        {/* Featured + list layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured news — large card */}
          <div className="lg:col-span-5">
            <div className="group h-full flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shrink-0 mb-5">
                <Link href={`/updates/${featured.id}`}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-[280px] object-cover block transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Meta row: badge + date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-secondary text-white px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-slate-400">
                  <i className="fa-sharp fa-light fa-calendar-days text-sm"></i>
                  {featured.date}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xl md:text-2xl font-bold leading-snug mb-3">
                <Link
                  href={`/updates/${featured.id}`}
                  className="text-secondary hover:text-primary-400 transition-colors duration-300 no-underline"
                >
                  {featured.title}
                </Link>
              </h4>

              {/* Excerpt */}
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5 line-clamp-3">
                {featured.excerpt}
              </p>

              {/* Read More */}
              <div className="mt-auto">
                <Link
                  href={`/updates/${featured.id}`}
                  className="inline-flex items-center gap-2 text-primary-400 font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 no-underline"
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Remaining news — compact list */}
          <div className="lg:col-span-7">
            <div className="max-h-[580px] overflow-y-auto pr-4 custom-scrollbar ">
              <div className="flex flex-col">
                {rest.map((item, idx) => (
                  <Link
                    key={item.id}
                    href={`/updates/${item.id}`}
                    className={`group flex gap-5 items-center py-5 no-underline
                      ${idx < rest.length - 1 ? "border-b border-slate-100" : ""}
                    `}
                  >
                    {/* Thumbnail */}
                    <div className="shrink-0 w-[120px] h-[90px] rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Category + Date */}
                      <div className="flex items-center gap-3 mb-1.5">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider ${categoryColor[item.category] ?? "text-primary-600"}`}
                        >
                          {item.category}
                        </span>
                        <span className="text-[12px] text-slate-400">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h5 className="font-bold text-[15px] leading-snug text-secondary group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 m-0">
                        {item.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
