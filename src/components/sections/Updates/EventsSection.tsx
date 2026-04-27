import Link from "next/link";
import { Icon } from "@iconify/react";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      date: { month: "APR", day: "12" },
      title: "Annual Science Fair",
      time: "9:00 AM - 3:00 PM",
      location: "Main Campus Auditorium",
      link: "/updates/events/1",
      action: "REGISTER",
    },
    {
      id: 2,
      date: { month: "APR", day: "18" },
      title: "Parent-Teacher Conference",
      time: "4:00 PM - 8:00 PM",
      location: "Individual Classrooms",
      link: "/updates/events/2",
      action: "REGISTER",
    },
    {
      id: 3,
      date: { month: "MAY", day: "05" },
      title: "Spring Musical",
      time: "7:00 PM - 9:30 PM",
      location: "Performing Arts Center",
      link: "/updates/events/3",
      action: "LEARN MORE",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Upcoming Events
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex gap-4 mb-6">
                {/* Date Box */}
                <div className="bg-slate-100 rounded-lg p-3 flex flex-col items-center justify-center min-w-[70px] h-[70px] shrink-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {event.date.month}
                  </span>
                  <span className="text-2xl font-bold text-secondary leading-none">
                    {event.date.day}
                  </span>
                </div>
                {/* Title */}
                <h4 className="text-xl font-bold text-secondary leading-tight mt-1">
                  {event.title}
                </h4>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Icon
                    icon="lucide:clock"
                    className="w-4 h-4 text-primary-400"
                  />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Icon
                    icon="lucide:map-pin"
                    className="w-4 h-4 text-primary-400"
                  />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Footer Link */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
