import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import slcmsLogo from "../../src/assets/slcms_logo.webp";

const FeeClearanceForm = () => {
  const pdfRef = useRef();
  const noDueRef = useRef();

  const [formData, setFormData] = useState({
    date: "",
    studentName: "",
    regNo: "",
    // yearSemester: "",
    year: "",
    semester: "",
    course: "",
    mobile: "",
  });

  const [isDownloading, setIsDownloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-GB");
  };

  // DOWNLOAD PDF
  const downloadPDF = async () => {
    try {
      setIsDownloading(true);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // 🔥 HIDE ICONS BEFORE PDF
      const icons = document.querySelectorAll(".hide-in-pdf");

      icons.forEach((icon) => {
        icon.style.visibility = "hidden";
      });

      // 🔥 WAIT A BIT FOR DOM UPDATE
      await new Promise((resolve) => setTimeout(resolve, 500));
      // PAGE 1
      const firstCanvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const firstImg = firstCanvas.toDataURL("image/png");

      pdf.addImage(firstImg, "PNG", 0, 0, 210, 297);

      // PAGE 2
      pdf.addPage();

      const secondCanvas = await html2canvas(noDueRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const secondImg = secondCanvas.toDataURL("image/png");

      pdf.addImage(secondImg, "PNG", 0, 0, 210, 297);

      // 🔥 SHOW ICONS AGAIN
      icons.forEach((icon) => {
        icon.style.visibility = "visible";
      });

      pdf.save("SLCMS-Forms.pdf");
      setFormData({
        date: "",
        studentName: "",
        regNo: "",
        // yearSemester: "",
        year: "",
        semester: "",
        course: "",
        mobile: "",
      });
      setIsDownloading(false);
    } catch (error) {
      // 🔥 SHOW ICONS AGAIN EVEN IF ERROR
      const icons = document.querySelectorAll(".hide-in-pdf");

      icons.forEach((icon) => {
        icon.style.visibility = "visible";
      });
      setIsDownloading(false);
      console.error("PDF generation failed:", error);
    }
  };

  //   const detailRow = {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "18px",
  //   };
  const detailRow = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    minHeight: "52px",
  };

  const detailLabel = {
    width: isDownloading ? "180px" : "240px",
    fontWeight: "700",
  };

  //   const detailValue = {
  //     flex: 1,
  //     borderBottom: "1px solid black",
  //     minHeight: "28px",
  //     display: "flex",
  //     alignItems: "center",
  //   };
  const detailValue = {
    flex: 1,
    borderBottom: isDownloading ? "none" : "1px solid black",
    minHeight: "32px",
    display: "flex",
    alignItems: "center",
    paddingBottom: "2px",
    lineHeight: "20px",
  };

  //   const inputStyle = {
  //     flex: 1,
  //     border: "none",
  //     borderBottom: isDownloading ? "none" : "1px solid black",
  //     outline: "none",
  //     fontSize: "18px",
  //     background: "transparent",
  //     minHeight: window.innerWidth < 768 ? "48px" : "40px",
  //     paddingTop: "2px",
  //     lineHeight: "24px",
  //   };

  const inputStyle = {
    flex: 1,
    border: "none",
    borderBottom: isDownloading ? "none" : "1px solid black",
    outline: "none",
    fontSize: "18px",
    background: "transparent",
    minHeight: isDownloading
      ? "40px"
      : window.innerWidth < 768
        ? "48px"
        : "40px",
    paddingTop: "2px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    paddingBottom: "2px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 16px",
        backgroundColor: "#f3f4f6",
      }}
    >
      <style>
        {`
    @media print {
      .calendar-icon {
        display: none !important;
      }
    }

    @media (max-width: 768px) {
      .responsive-form-row {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 10px !important;
      }

      .responsive-label {
        width: 100% !important;
      }

      .responsive-sign {
        width: 100% !important;
      }

      .responsive-title {
        font-size: 20px !important;
      }

      .responsive-subtitle {
        font-size: 18px !important;
      }

      .responsive-container {
        padding: 20px !important;
      }
        .responsive-form-row input,
.responsive-form-row select {
  width: 100% !important;
  min-height: 50px !important;
  font-size: 16px !important;
}

button {
  width: 100%;
}
    }

    /* PDF FIXED DESKTOP LAYOUT */
    .pdf-mode {
      width: 1000px !important;
      padding: 40px !important;
      background: white !important;
    }

    .pdf-mode .responsive-form-row {
      flex-direction: row !important;
      align-items: center !important;
    }

    .pdf-mode .responsive-label {
      width: 240px !important;
    }

    .pdf-mode h1 {
      font-size: 30px !important;
    }

    .pdf-mode h2 {
      font-size: 26px !important;
    }

    .pdf-mode .pdf-table-wrapper {
      overflow: visible !important;
    }

    .pdf-mode .pdf-table-inner {
      min-width: 100% !important;
    }
  `}
      </style>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={downloadPDF}
            style={{
              backgroundColor: "#111827",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Fill the form to download PDF
          </button>
        </div>

        {/* PAGE 1 */}
        <div
          ref={pdfRef}
          className={isDownloading ? "pdf-mode" : ""}
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#fff",
            // border: "1px solid #d1d5db",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            // padding: "40px",
            // padding: window.innerWidth < 768 ? "20px" : "40px",
            padding: isDownloading
              ? "40px"
              : window.innerWidth < 768
                ? "20px"
                : "40px",
            marginBottom: "40px",
          }}
        >
          <img
            src={slcmsLogo}
            alt="watermark"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              //   width: window.innerWidth < 768 ? "220px" : "420px",
              width: isDownloading
                ? "420px"
                : window.innerWidth < 768
                  ? "220px"
                  : "420px",
              opacity: 0.05,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          {/* HEADER */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              //   flexDirection: window.innerWidth < 768 ? "column" : "row",
              flexDirection: isDownloading
                ? "row"
                : window.innerWidth < 768
                  ? "column"
                  : "row",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <img
              src={slcmsLogo}
              alt="logo"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
              }}
            />

            <div
              style={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  //   fontSize: window.innerWidth < 768 ? "16px" : "30px",
                  fontSize: isDownloading
                    ? "30px"
                    : window.innerWidth < 768
                      ? "16px"
                      : "30px",
                  lineHeight: "1.5",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                SRI LAKSHMI COLLEGE OF MANAGEMENT AND SCIENCE
              </h1>

              <h2
                style={{
                  //   fontSize: window.innerWidth < 768 ? "16px" : "26px",
                  fontSize: isDownloading
                    ? "26px"
                    : window.innerWidth < 768
                      ? "16px"
                      : "26px",
                  lineHeight: "1.4",
                  fontWeight: "700",
                  textDecoration: "underline",
                  marginTop: "20px",
                }}
              >
                College Fee Clearance Form
              </h2>

              {/* <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginTop: "12px",
                }}
              >
                BCA / BCOM / BBA
              </h3> */}
            </div>
          </div>

          {/* FORM */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "60px",
              display: "flex",
              flexDirection: "column",
              //   gap: "35px",
              gap: window.innerWidth < 768 ? "24px" : "35px",
              fontSize: "18px",
            }}
          >
            {/* DATE */}
            {/* <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                DATE:
              </label>
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  borderBottom: "1px solid black",
                  minHeight: "36px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                />

                <span
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {formData.date ? formatDate(formData.date) : ""}
                </span>

                <span
                  className="hide-in-pdf"
                  style={{
                    position: "absolute",
                    right: "0px",
                    fontSize: "18px",
                    background: "white",
                    paddingLeft: "8px",
                    zIndex: 5,
                    pointerEvents: "none",
                  }}
                >
                  📅
                </span>
              </div>
            </div> */}

            {/* DATE */}
            <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                DATE:
              </label>

              {!isDownloading ? (
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    width: "100%",
                    cursor: "pointer",
                    paddingRight: "10px",
                  }}
                />
              ) : (
                <div
                  style={{
                    flex: 1,
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "2px",
                    fontSize: "18px",
                  }}
                >
                  {formatDate(formData.date)}
                </div>
              )}
            </div>

            {/* NAME */}
            <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                STUDENT NAME:
              </label>

              {!isDownloading ? (
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              ) : (
                <div
                  style={{
                    flex: 1,
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  {formData.studentName}
                </div>
              )}
            </div>

            {/* REG */}
            <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                {" "}
                REG NO:
              </label>

              {!isDownloading ? (
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  style={inputStyle}
                />
              ) : (
                <div
                  style={{
                    flex: 1,
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  {formData.regNo}
                </div>
              )}
            </div>

            {/* YEAR */}
            {/* <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                {" "}
                YEAR/SEMESTER:
              </label>

              <input
                type="text"
                name="yearSemester"
                value={formData.yearSemester}
                onChange={handleChange}
                style={{
                  flex: 1,
                  border: "none",
                  borderBottom: "1px solid black",
                  outline: "none",
                  fontSize: "18px",
                }}
              />
            </div> */}

            {/* YEAR + SEMESTER */}
            <div
              className="responsive-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: isDownloading
                  ? "1fr 1fr"
                  : window.innerWidth < 768
                    ? "1fr"
                    : "1fr 1fr",
                gap: "24px",
                alignItems: "center",
              }}
            >
              {/* YEAR */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <label
                  style={{
                    width: "160px",
                    fontWeight: "700",
                  }}
                >
                  YEAR:
                </label>

                {!isDownloading ? (
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    style={{ ...inputStyle, marginLeft: "80px" }}
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                  </select>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      marginLeft: "80px",
                      minHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                    }}
                  >
                    {formData.year}
                  </div>
                )}
              </div>

              {/* SEMESTER */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <label
                  style={{
                    width: "160px",
                    fontWeight: "700",
                  }}
                >
                  SEMESTER:
                </label>

                {!isDownloading ? (
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select Semester</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                  </select>
                ) : (
                  <div
                    style={{
                      flex: 1,
                      minHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                    }}
                  >
                    {formData.semester}
                  </div>
                )}
              </div>
            </div>

            <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                {" "}
                COURSE:
              </label>

              {!isDownloading ? (
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Select Course</option>

                  <option value="B.Com">B.Com</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="BA">BA</option>
                  <option value="M.Com">M.Com</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                </select>
              ) : (
                <div
                  style={{
                    flex: 1,
                    // borderBottom: "1px solid black",
                    borderBottom: isDownloading ? "none" : "1px solid black",
                    minHeight: "32px",
                    fontSize: "18px",
                  }}
                >
                  {formData.course}
                </div>
              )}
            </div>

            {/* MOBILE */}
            <div className="responsive-form-row" style={detailRow}>
              <label className="responsive-label" style={detailLabel}>
                {" "}
                MOBILE NO:
              </label>

              {!isDownloading ? (
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  style={inputStyle}
                />
              ) : (
                <div
                  style={{
                    flex: 1,
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  {formData.mobile}
                </div>
              )}
            </div>
          </div>

          {/* BILLING SECTION */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "70px",
              border: "1px solid black",
              maxWidth: "650px",
              marginInline: "auto",
            }}
          >
            {/* TOP */}
            <div
              style={{
                borderBottom: "1px solid black",
                padding: "25px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                BILLING SECTION
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                (100% OF FEES TO BE CLEARED)
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                FRONT DESK
              </div>
            </div>

            {/* BOTTOM */}
            <div
              style={{
                padding: "26px 18px",
                minHeight: "90px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                SIGN:
              </span>
            </div>
          </div>

          {/* NOTE */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "55px",
              fontSize: "18px",
              lineHeight: "34px",
              fontWeight: "700",
            }}
          >
            <p>
              Note: All students are kindly requested to visit the college only
              at the specified date and time to complete all clearances. Please
              strictly adhere to the given date and time without fail.
            </p>
          </div>

          {/* SIGN */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "140px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "320px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderBottom: "1px solid black",
                  height: "40px",
                }}
              />

              <p
                style={{
                  marginTop: "12px",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Authorised Sign (SLCMS Office)
              </p>
            </div>
          </div>
        </div>

        {/* PAGE 2 */}
        <div
          ref={noDueRef}
          className={isDownloading ? "pdf-mode" : ""}
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#fff",
            // border: "1px solid #d1d5db",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            // padding: "40px",
            // padding: window.innerWidth < 768 ? "20px" : "40px",
            padding: isDownloading
              ? "40px"
              : window.innerWidth < 768
                ? "20px"
                : "40px",
          }}
        >
          <img
            src={slcmsLogo}
            alt="watermark"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              //   width: window.innerWidth < 768 ? "220px" : "420px",
              width: isDownloading
                ? "420px"
                : window.innerWidth < 768
                  ? "220px"
                  : "420px",
              opacity: 0.05,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          {/* HEADER */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              //   flexDirection: window.innerWidth < 768 ? "column" : "row",
              flexDirection: isDownloading
                ? "row"
                : window.innerWidth < 768
                  ? "column"
                  : "row",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <img
              src={slcmsLogo}
              alt="logo"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
              }}
            />

            <div
              style={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  //   fontSize: window.innerWidth < 768 ? "16px" : "30px",
                  fontSize: isDownloading
                    ? "30px"
                    : window.innerWidth < 768
                      ? "16px"
                      : "30px",
                  lineHeight: "1.5",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                SRI LAKSHMI COLLEGE OF MANAGEMENT AND SCIENCE
              </h1>

              <h2
                style={{
                  //   fontSize: window.innerWidth < 768 ? "18px" : "28px",
                  fontSize: isDownloading
                    ? "28px"
                    : window.innerWidth < 768
                      ? "18px"
                      : "28px",
                  lineHeight: "1.4",
                  fontWeight: "700",
                  textDecoration: "underline",
                  marginTop: "20px",
                }}
              >
                NO DUE FORM
              </h2>

              {/* <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginTop: "12px",
                }}
              >
                BCA / BCOM / BBA
              </h3> */}
            </div>
          </div>

          {/* DATE */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "40px",
              fontSize: "18px",
              gap: "18px",
            }}
          >
            <span
              style={{
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              DATE:
            </span>

            <div
              style={{
                width: "220px",
                borderBottom: isDownloading ? "none" : "1px solid black",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "2px",
                lineHeight: "20px",
              }}
            >
              {formatDate(formData.date)}
            </div>
          </div>

          {/* DETAILS */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              fontSize: "18px",
            }}
          >
            <div className="responsive-form-row" style={detailRow}>
              <span style={detailLabel}>• STUDENT NAME :</span>
              <span style={detailValue}>{formData.studentName}</span>
            </div>

            <div className="responsive-form-row" style={detailRow}>
              <span style={detailLabel}>• REG No :</span>
              <span style={detailValue}>{formData.regNo}</span>
            </div>

            {/* YEAR + SEMESTER */}
            <div
              className="responsive-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: isDownloading
                  ? "1fr 1fr"
                  : window.innerWidth < 768
                    ? "1fr"
                    : "1fr 1fr",
                gap: "24px",
                alignItems: "center",
              }}
            >
              {/* YEAR */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <span
                  style={{
                    width: "160px",
                    fontWeight: "700",
                  }}
                >
                  • YEAR :
                </span>

                <span style={{ ...detailValue, marginLeft: "25px" }}>
                  {formData.year}
                </span>
              </div>

              {/* SEMESTER */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                }}
              >
                <span
                  style={{
                    width: "160px",
                    fontWeight: "700",
                  }}
                >
                  • SEMESTER :
                </span>

                <span style={detailValue}>{formData.semester}</span>
              </div>
            </div>

            <div className="responsive-form-row" style={detailRow}>
              <span style={detailLabel}>• COURSE :</span>
              {/* <span style={detailValue}>{formData.course}</span> */}
              <span style={detailValue}>
                {formData.course === "" ? "" : formData.course}
              </span>
            </div>

            <div className="responsive-form-row" style={detailRow}>
              <span style={detailLabel}>• MOBILE No :</span>
              <span style={detailValue}>{formData.mobile}</span>
            </div>
          </div>

          {/* TABLE */}
          <div
            className="pdf-table-wrapper"
            style={{
              marginTop: "60px",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="pdf-table-inner"
              style={{
                border: "1px solid black",
                minWidth: "750px",
              }}
            >
              {/* TOP ROW */}
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid black",
                  minHeight: "120px",
                }}
              >
                {/* COL 1 */}
                <div
                  style={{
                    width: "23%",
                    borderRight: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "12px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  <div>Internals</div>
                  <div>Attendance/Shortage</div>
                </div>

                {/* COL 2 */}
                <div
                  style={{
                    width: "19%",
                    borderRight: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "12px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  <div>Sports & Cultural</div>
                  <div>Fee</div>
                </div>

                {/* COL 3 */}
                <div
                  style={{
                    width: "20%",
                    borderRight: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "12px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  <div>Assignments</div>
                  <div>Class Teacher</div>
                </div>

                {/* COL 4 */}
                <div
                  style={{
                    width: "17%",
                    borderRight: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "12px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Library
                </div>

                {/* COL 5 */}
                <div
                  style={{
                    width: "21%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "12px",
                    lineHeight: "1.8",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  <div>Approved By</div>
                  <div>UG - PG</div>
                  <div>Co-ordinator</div>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div
                style={{
                  display: "flex",
                  minHeight: "95px",
                }}
              >
                <div
                  style={{
                    width: "23%",
                    borderRight: "1px solid black",
                  }}
                />

                <div
                  style={{
                    width: "19%",
                    borderRight: "1px solid black",
                  }}
                />

                <div
                  style={{
                    width: "20%",
                    borderRight: "1px solid black",
                  }}
                />

                <div
                  style={{
                    width: "17%",
                    borderRight: "1px solid black",
                  }}
                />

                <div
                  style={{
                    width: "21%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* NOTE */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "60px",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            <p>
              Note: All students are kindly requested to visit the college only
              at the specified date and time to complete all clearances.
            </p>
          </div>

          {/* SIGN */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "80px",
              display: "flex",
              justifyContent: isDownloading
                ? "flex-end"
                : window.innerWidth < 768
                  ? "center"
                  : "flex-end",
            }}
          >
            <div
              style={{
                width: "420px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderBottom: "1px solid black",
                  height: "40px",
                }}
              />

              <p
                style={{
                  marginTop: "12px",
                  fontSize: "18px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                Signature of Principal / Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <button
          onClick={downloadPDF}
          style={{
            backgroundColor: "#111827",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default FeeClearanceForm;
