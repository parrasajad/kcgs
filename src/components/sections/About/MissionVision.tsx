import { Icon } from "@iconify/react";

export default function MissionVision() {
  return (
    <div className="rts-section-padding">
      <div className="container">
        <div className="row">
          <div className="rts-section rt-center mb--45">
            <h3 className="rts-section-title">Our Mission & Vision</h3>
          </div>
        </div>
        <div className="row g-5">
          {/* Mission */}
          <div className="col-lg-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 h-full hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Icon
                  icon="lucide:target"
                  className="w-8 h-8 text-primary-dark"
                />
              </div>
              <h4 className="text-2xl font-bold text-black mb-4">
                Our Mission
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                To provide an outstanding educational experience that empowers
                every student to achieve academic excellence, develop strong
                moral values, and become responsible citizens of society.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:check-circle"
                    className="w-5 h-5 text-primary-dark mt-1 shrink-0"
                  />
                  <span className="text-gray-600">
                    Deliver quality education with modern teaching methodologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:check-circle"
                    className="w-5 h-5 text-primary-dark mt-1 shrink-0"
                  />
                  <span className="text-gray-600">
                    Nurture creativity, critical thinking, and leadership skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:check-circle"
                    className="w-5 h-5 text-primary-dark mt-1 shrink-0"
                  />
                  <span className="text-gray-600">
                    Foster an inclusive environment that respects diversity
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Vision */}
          <div className="col-lg-6">
            <div className="bg-primary-400 rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-6">
                <Icon icon="lucide:eye" className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
              <p className="text-white text-lg leading-relaxed mb-4">
                To be the leading educational institution in Kashmir, recognized
                for producing well-rounded individuals who excel in academics,
                sports, and moral values — contributing positively to the
                community and the nation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:star"
                    className="w-5 h-5 text-white/80 mt-1 shrink-0"
                  />
                  <span className="text-white/85">
                    Create future leaders grounded in ethics and knowledge
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:star"
                    className="w-5 h-5 text-white/80 mt-1 shrink-0"
                  />
                  <span className="text-white/85">
                    Build a globally competitive educational model for Kashmir
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="lucide:star"
                    className="w-5 h-5 text-white/80 mt-1 shrink-0"
                  />
                  <span className="text-white/85">
                    Inspire lifelong learning and community service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
