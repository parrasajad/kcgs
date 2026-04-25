import Image from "next/image";

export default function CampusLifeOverview() {
  return (
    <div className="rts-campus-life rts-section-padding">
      <div className="container">
        <div className="row">
          <div className="campus-life">
            <div className="campus-life__content">
              <h1 className="section-title">Campus Life</h1>
              <p className="description w-680">
                Our thriving residential campus is home to a community of
                creative and accomplished people from around the world.
              </p>
              <div className="w-full h-[800px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/campus-life/campus-life-hero.webp"
                  className="w-full h-full object-contain "
                  width={1920}
                  height={1480}
                  alt="Campus Life"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
