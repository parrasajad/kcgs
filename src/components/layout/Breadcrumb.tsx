interface BreadcrumbProps {
  title: string;
  current: string;
}

export default function Breadcrumb({ title, current }: BreadcrumbProps) {
  return (
    <>
      {/* BREADCRUMB AREA */}
      <section className="rts-breadcrumb breadcrumb-height">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {current}
                  </li>
                </ul>
                <h2 className="section-title">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BREADCRUMB AREA END */}
    </>
  );
}
