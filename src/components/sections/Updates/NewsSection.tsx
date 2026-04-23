export default function NewsSection() {
  const announcements = [
    {
      id: 1,
      category: "Announcement",
      title: "School Reopening Guidelines for Academic Session 2026–27",
      date: "Aug 15, 2026",
      excerpt:
        "Please review the updated guidelines regarding health and safety protocols as we welcome students back to campus for the new session.",
      image: "/assets/images/event/01.jpg",
    },
    {
      id: 2,
      category: "Academic",
      title: "New Advanced Placement Courses Added to Curriculum",
      date: "Aug 10, 2026",
      excerpt:
        "We are thrilled to introduce four new AP courses to our curriculum starting this academic year, expanding opportunities for our senior students.",
      image: "/assets/images/event/02.jpg",
    },
    {
      id: 3,
      category: "Sports",
      title: "KCGS Wins Regional Inter-School Football Championship",
      date: "Jul 28, 2026",
      excerpt:
        "Our senior boys' football team secured a thrilling victory in the finals held at the district sports complex in Pulwama.",
      image: "/assets/images/event/03.jpg",
    },
  ];

  const featured = announcements[0];
  const rest = announcements.slice(1);

  const categoryBadge: Record<string, string> = {
    Announcement: "bg-primary-darker text-white",
    Academic: "bg-accent text-white",
    Sports: "bg-success text-white",
  };

  return (
    <section id="news" className="container">
      <div className="container">
        {/* Section header */}
        <div className="row">
          <div className="rts__section--wrapper">
            <h2 className="rts__section--title">News &amp; Announcements</h2>
            <div className="rts__section--link">
              <a href="/updates" className="rts-nbg-btn btn-arrow">
                View All
                <span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured + list layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured news — large card */}
          <div className="lg:col-span-5">
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-350 hover:-translate-y-1 h-full flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden shrink-0">
                <a href={`/updates/${featured.id}`}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-[240px] object-cover block transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <span
                  className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide z-[2] ${categoryBadge[featured.category] ?? "bg-primary-darker text-white"}`}
                >
                  {featured.category}
                </span>
              </div>
              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-flex items-center gap-2 text-[13px] text-body mb-2.5">
                  <i className="fa-sharp fa-light fa-calendar-days text-[15px] text-primary-darker"></i>
                  {featured.date}
                </span>
                <h4
                  className="font-medium text-xl leading-snug mb-2.5 line-clamp-2"
                  title={featured.title}
                >
                  <a
                    href={`/updates/${featured.id}`}
                    className="text-heading hover:text-primary-darker transition-colors duration-300"
                  >
                    {featured.title}
                  </a>
                </h4>
                <p
                  className="text-body text-[14px] leading-relaxed mb-5 line-clamp-3"
                  title={featured.excerpt}
                >
                  {featured.excerpt}
                </p>
                <div className="mt-auto">
                  <a
                    href={`/updates/${featured.id}`}
                    className="inline-flex items-center gap-2 text-primary-darker font-semibold text-sm tracking-wide hover:gap-3 hover:text-accent transition-all duration-300"
                  >
                    Read More
                    <i className="fa-sharp fa-regular fa-arrow-right text-[13px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining news — compact list */}
          <div className="lg:col-span-7">
            <div className="flex flex-col justify-center h-full">
              {rest.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className={`group flex gap-5 py-5 items-start
                    ${idx === 0 ? "pt-0" : ""}
                    ${idx < rest.length - 1 ? "border-b border-line" : "pb-0"}
                  `}
                >
                  {/* Thumb */}
                  <div className="shrink-0 w-[110px] h-[100px] rounded-[10px] overflow-hidden max-md:w-[90px] max-md:h-[80px] max-sm:w-[80px] max-sm:h-[72px]">
                    <a href={`/updates/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-108"
                      />
                    </a>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${categoryBadge[item.category] ?? "bg-primary-darker text-white"}`}
                      >
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-body">
                        <i className="fa-sharp fa-light fa-calendar-days text-[13px] text-primary-darker"></i>
                        {item.date}
                      </span>
                    </div>
                    <h5
                      className="font-medium text-base leading-snug mb-1.5 max-sm:text-sm line-clamp-2"
                      title={item.title}
                    >
                      <a
                        href={`/updates/${item.id}`}
                        className="text-heading hover:text-primary-darker transition-colors duration-300"
                      >
                        {item.title}
                      </a>
                    </h5>
                    <p className="text-body text-[13px] leading-snug m-0 line-clamp-2 max-sm:hidden">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
