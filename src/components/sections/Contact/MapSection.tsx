export default function MapSection() {
  return (
    <section style={{ background: "#f8f9ff", paddingBottom: "80px" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="rts__section--title" style={{ marginBottom: "10px" }}>
            Find Us Here
          </h2>
          <p
            style={{
              color: "#737477",
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "15px",
            }}
          >
            Visit us at our main campus in Shopian, Kashmir. We'd love to
            welcome you in person.
          </p>
        </div>

        {/* Map + Info Row */}
        <div className="row g-4 align-items-stretch">
          {/* Map Embed */}
          <div className="col-lg-8">
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(65,80,182,0.10)",
                height: "420px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.826742810394!2d74.85239207599937!3d33.778687327182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1f0dced653c4f%3A0x95213007115e52f!2sKashmir%20Cambridge%20School%20%DA%A9%D8%B4%D9%85%DB%8C%D8%B1%20%DA%A9%D8%A7%D9%85%D8%A8%D8%B1%DB%8C%D8%AC%20%D8%B3%DA%A9%D9%88%D9%84!5e0!3m2!1sen!2sin!4v1713686400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kashmir Cambridge Group of Schools Location"
              ></iframe>
            </div>
          </div>

          {/* Visit Info Card */}
          <div className="col-lg-4">
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 30px rgba(65,80,182,0.08)",
                height: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "linear-gradient(135deg, #4150B6, #283593)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i
                    className="fa-light fa-school"
                    style={{ color: "#fff", fontSize: "20px" }}
                  ></i>
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#262626",
                    marginBottom: "12px",
                  }}
                >
                  Kashmir Cambridge Group of Schools
                </h4>
                <p
                  style={{
                    color: "#737477",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  Tukroo, Shopian
                  <br />
                  Jammu & Kashmir, India
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fa-light fa-clock"
                      style={{
                        color: "#4150B6",
                        fontSize: "15px",
                        width: "18px",
                      }}
                    ></i>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                      Mon – Sat: 9 AM – 5 PM
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fa-light fa-phone"
                      style={{
                        color: "#4150B6",
                        fontSize: "15px",
                        width: "18px",
                      }}
                    ></i>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                      098587 07214
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fa-light fa-envelope"
                      style={{
                        color: "#4150B6",
                        fontSize: "15px",
                        width: "18px",
                      }}
                    ></i>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                      kashmircambridge@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Kashmir+Cambridge+School/@33.7786874,74.8523921,17z"
                target="_blank"
                rel="noreferrer"
                className="rts-theme-btn btn-arrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "24px",
                }}
              >
                Get Directions{" "}
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
