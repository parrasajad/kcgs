export default function EventsSection() {
  const events = [
    {
      id: 1,
      date: "Sep 05, 2026",
      location: "KCGS Tukroo Campus",
      title: "Annual Sports Day: Track & Field Championship",
      image: "/assets/images/event/01.jpg",
    },
    {
      id: 2,
      date: "Sep 20, 2026",
      location: "KCGS Tukroo Campus",
      title:
        "Science & Innovation Expo: Young Minds Shaping Tomorrow",
      image: "/assets/images/event/02.jpg",
    },
    {
      id: 3,
      date: "Oct 10, 2026",
      location: "KCGS Tukroo Campus",
      title: "Career Carnival: Explore Your Professional Journey",
      image: "/assets/images/event/03.jpg",
    },
  ];

  return (
    <section id="events" className="rts__section rts-section-padding">
      <div className="container">
        {/* Section header */}
        <div className="row">
          <div className="rts__section--wrapper">
            <h2 className="rts__section--title">Upcoming Events</h2>
            <div className="rts__section--link">
              <a href="/updates#events" className="rts-nbg-btn btn-arrow">
                View All
                <span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group">
              <div className="bg-white rounded-xl border border-border overflow-hidden transition-all duration-350 hover:shadow-lg hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <a href="#">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-[220px] object-cover block transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                  {/* Floating date badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <i className="fa-sharp fa-light fa-calendar-days"></i>
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <i className="fa-sharp fa-light fa-location-dot"></i>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <h5 className="font-medium text-lg leading-snug">
                    <a
                      href="#"
                      className="text-heading hover:text-primary-dark transition-colors duration-300"
                    >
                      {event.title}
                    </a>
                  </h5>
                  <a
                    href="#"
                    className="shrink-0 w-10 h-10 rounded-full border border-heading grid place-items-center transition-all duration-300 hover:bg-primary hover:border-primary group/btn"
                  >
                    <i className="fa-light fa-arrow-right text-heading -rotate-30 transition-transform duration-300 group-hover/btn:rotate-0 group-hover/btn:text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
