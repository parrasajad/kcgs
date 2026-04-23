export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // In a real application, you would fetch the announcement data based on the ID here.
  // For now, we will simulate the data so the UI displays nicely.
  const announcement = {
    id: id,
    category: "Announcement",
    title: "School Reopening Guidelines for Academic Session 2026–27",
    date: "Aug 15, 2026",
    content: `
      <p class="mb-4">Welcome back to another exciting academic session at Kashmir Cambridge Group of Schools! Please carefully review the updated guidelines regarding health and safety protocols as we welcome students back to campus.</p>
      
      <h3 class="text-2xl font-semibold mt-8 mb-4">Campus Entry & Exit</h3>
      <p class="mb-4">To ensure smooth traffic flow and maintain safety, we have designated specific entry and exit points for different grade levels. Parents are requested to follow the traffic personnel's instructions during drop-off and pick-up times.</p>
      
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Primary Wing:</strong> Gate 1</li>
        <li><strong>Middle Wing:</strong> Gate 2</li>
        <li><strong>Senior Wing:</strong> Gate 3</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-8 mb-4">Health Protocols</h3>
      <p class="mb-4">While the situation has improved, we continue to prioritize the health of our students and staff. Hand sanitizing stations have been placed at all entrances, outside classrooms, and near the cafeteria. We request students who are feeling unwell to remain at home and join the classes virtually if possible.</p>
      
      <p class="mb-4">For more detailed information, please contact the administration office or reach out to your child's homeroom teacher. We look forward to a successful and engaging academic year!</p>
    `,
    image: "/assets/images/event/01.jpg",
  };

  return (
    <>
      {/* PAGE BANNER */}
      <div className="bg-primary-darker text-white py-16 md:py-24 text-center">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            Updates & Announcements
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium opacity-90">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span>/</span>
            <a href="/updates" className="hover:text-accent transition-colors">Updates</a>
            <span>/</span>
            <span className="text-accent">Details</span>
          </div>
        </div>
      </div>

      {/* ANNOUNCEMENT CONTENT */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Meta & Title */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {announcement.category}
                </span>
                <span className="inline-flex items-center gap-2 text-body text-sm font-medium">
                  <i className="fa-sharp fa-light fa-calendar-days text-primary-darker"></i>
                  {announcement.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-heading">
                {announcement.title}
              </h2>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <img 
                src={announcement.image} 
                alt={announcement.title} 
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="text-body text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-line">
              <a 
                href="/updates" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-darker text-white font-semibold rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <i className="fa-sharp fa-regular fa-arrow-left"></i>
                Back to All Updates
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
