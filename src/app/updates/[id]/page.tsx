import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default async function AnnouncementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const announcement = {
    id: id,
    category: "Announcement",
    title: "School Reopening Guidelines for Academic Session 2026–27",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    author: "Administration Office",
    content: `
      <p class="mb-5">Welcome back to another exciting academic session at Kashmir Cambridge Group of Schools! Please carefully review the updated guidelines regarding health and safety protocols as we welcome students back to campus.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Campus Entry &amp; Exit</h3>
      <p class="mb-5">To ensure smooth traffic flow and maintain safety, we have designated specific entry and exit points for different grade levels. Parents are requested to follow the traffic personnel's instructions during drop-off and pick-up times.</p>
      
      <ul class="list-none pl-0 mb-6 space-y-3">
        <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[#cba73d] shrink-0"></span><span><strong>Primary Wing:</strong> Gate 1</span></li>
        <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[#cba73d] shrink-0"></span><span><strong>Middle Wing:</strong> Gate 2</span></li>
        <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[#cba73d] shrink-0"></span><span><strong>Senior Wing:</strong> Gate 3</span></li>
      </ul>

      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Health Protocols</h3>
      <p class="mb-5">While the situation has improved, we continue to prioritize the health of our students and staff. Hand sanitizing stations have been placed at all entrances, outside classrooms, and near the cafeteria. We request students who are feeling unwell to remain at home and join the classes virtually if possible.</p>
      
      <p class="mb-4">For more detailed information, please contact the administration office or reach out to your child's homeroom teacher. We look forward to a successful and engaging academic year!</p>
    `,
    image: "/assets/images/event/01.jpg",
  };

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <div className="bg-primary-50/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-[900px] mt-20 flex flex-col items-center justify-center mx-auto text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Updates & Announcements
            </span>
            <h1 className="text-xl md:text-xl font-bold text-slate-900 mb-5">
              {announcement.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta row */}
            <div className="flex items-center gap-4 flex-wrap mb-6">
              <span className="px-3 py-1 bg-secondary text-white text-[11px] font-bold uppercase tracking-wider rounded">
                {announcement.category}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-500 text-sm">
                <Icon
                  icon="lucide:calendar"
                  className="w-4 h-4 text-primary-400"
                />
                {announcement.date}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-500 text-sm">
                <Icon
                  icon="lucide:clock"
                  className="w-4 h-4 text-primary-400"
                />
                {announcement.readTime}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-500 text-sm">
                <Icon icon="lucide:user" className="w-4 h-4 text-primary-400" />
                {announcement.author}
              </span>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />

            {/* Divider */}
            <div className="mt-14 pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary-400 transition-colors uppercase tracking-wide"
              >
                <Icon icon="lucide:arrow-left" className="w-4 h-4" />
                Back to All Updates
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">Share:</span>
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-primary-50 hover:text-primary-400 transition-colors text-slate-500"
                >
                  <Icon icon="lucide:share-2" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileMenu />
    </>
  );
}
