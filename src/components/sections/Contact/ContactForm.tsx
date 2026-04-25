"use client";

export default function ContactForm() {
  return (
    <section className="rts-section-padding" style={{ background: "#f8f9ff" }}>
      <div className="container">
        <div className="row g-5 align-items-stretch">
          {/* Left — Contact Info Panel */}
          <div className="col-lg-5">
            <div
              className="h-100 p-5 d-flex flex-column justify-content-between"
              style={{
                background:
                  "linear-gradient(145deg, #b8932f 0%, #cba73d 50%, #9e7f27 100%)",
                borderRadius: "16px",
                color: "#fff",
                minHeight: "520px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "28px",
                    marginBottom: "8px",
                  }}
                >
                  Get In Touch
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "15px",
                    marginBottom: "40px",
                  }}
                >
                  We're here to help. Reach out to us and our team will respond
                  within 24 hours.
                </p>

                {/* Address */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,162,39,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="fa-light fa-location-dot"
                      style={{ color: "#fff", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        marginBottom: "2px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Address
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "15px",
                        margin: 0,
                      }}
                    >
                      Kashmir Cambridge Group of Schools
                      <br />
                      Tukroo, Shopian
                      <br />
                      Jammu & Kashmir, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,162,39,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="fa-light fa-phone"
                      style={{ color: "#fff", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        marginBottom: "2px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+919858707214"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "15px",
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      098587 07214
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,162,39,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="fa-light fa-envelope"
                      style={{ color: "#fff", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        marginBottom: "2px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:kashmircambridge@gmail.com"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "15px",
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      kashmircambridge@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="d-flex align-items-start gap-3">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(201,162,39,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className="fa-light fa-clock"
                      style={{ color: "#fff", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        marginBottom: "2px",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Office Hours
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "15px",
                        margin: 0,
                      }}
                    >
                      Mon – Sat: 9 AM – 5 PM
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "13px",
                        margin: 0,
                      }}
                    >
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="d-flex gap-3 mt-4 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              >
                {[
                  { icon: "fa-brands fa-facebook", href: "https://www.facebook.com/people/Kashmir-Cambridge-Group-Of-Schools/61560041427806/" },
                  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/kashmircambridge?igsh=djhsZjU5cnZiZzEz" },
                  {
                    icon: "fa-brands fa-youtube",
                    href: "https://www.youtube.com/@kashmircambridgegroupofsch-y6h",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    style={{
                      width: "38px",
                      height: "38px",
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "15px",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="col-lg-7">
            <div
              className="p-5"
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(203,167,61,0.15)",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#262626",
                  marginBottom: "6px",
                }}
              >
                Send Us a Message
              </h3>
              <p
                style={{
                  color: "#737477",
                  fontSize: "14px",
                  marginBottom: "32px",
                }}
              >
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <form action="#">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#262626",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmad Khan"
                        required
                        style={{
                          padding: "13px 16px",
                          border: "1.5px solid #e8e8e8",
                          borderRadius: "10px",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                          transition: "border-color 0.2s",
                          color: "#262626",
                          background: "#fafafa",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#C9A227")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#262626",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        style={{
                          padding: "13px 16px",
                          border: "1.5px solid #e8e8e8",
                          borderRadius: "10px",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                          transition: "border-color 0.2s",
                          color: "#262626",
                          background: "#fafafa",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#C9A227")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#262626",
                        }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 000 000 0000"
                        style={{
                          padding: "13px 16px",
                          border: "1.5px solid #e8e8e8",
                          borderRadius: "10px",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                          transition: "border-color 0.2s",
                          color: "#262626",
                          background: "#fafafa",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#C9A227")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#262626",
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        required
                        style={{
                          padding: "13px 16px",
                          border: "1.5px solid #e8e8e8",
                          borderRadius: "10px",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                          transition: "border-color 0.2s",
                          color: "#262626",
                          background: "#fafafa",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#C9A227")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#262626",
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        style={{
                          padding: "13px 16px",
                          border: "1.5px solid #e8e8e8",
                          borderRadius: "10px",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                          resize: "none",
                          transition: "border-color 0.2s",
                          color: "#262626",
                          background: "#fafafa",
                          fontFamily: "inherit",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#C9A227")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e8e8e8")}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      style={{
                        background:
                          "linear-gradient(135deg, #cba73d 0%, #b8932f 100%)",
                        color: "#fff",
                        border: "none",
                        padding: "14px 36px",
                        borderRadius: "10px",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "opacity 0.2s, transform 0.2s",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      Send Message
                      <i
                        className="fa-regular fa-arrow-right"
                        style={{ color: "#fff" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
