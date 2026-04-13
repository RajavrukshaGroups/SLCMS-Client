import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { API_ROUTES } from "../api/apiRoutes";
import { toast } from "react-toastify";

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Backend API endpoint (replace with your actual endpoint)
  // const API_ENDPOINT =
  //   process.env.VITE_API_URL || "https://your-backend.com/api/contact";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (submitError) setSubmitError("");

    // ✅ ADD THIS
    if (submitSuccess) setSubmitSuccess(false);
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }
    return newErrors;
  };

  // Submit handler with backend call
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await axiosInstance.post(API_ROUTES.CONTACT, formData);

      const data = response.data;

      // ✅ SUCCESS
      setSubmitSuccess(true);
      toast.success("Message sent successfully!");

      // ✅ CLEAR FORM
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        subject: "",
        course: "",
        message: "",
      });

      // ✅ CLEAR FIELD ERRORS
      setErrors({});

      // Auto hide success
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      console.error("Submission error:", error);

      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";

      setSubmitError(message);
      toast.error(message);

      // Auto hide error
      setTimeout(() => setSubmitError(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map embed URL (Google Maps for the exact address)
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885123456789!2d77.534567!3d12.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8c8a8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sNo.%2029%2C%20Sri%20Gandada%20Kaval%2C%20Magadi%20Main%20Rd%2C%20Vishwaneedam%20Post%2C%20Sunkadakatte%2C%20Bengaluru%2C%20Karnataka%20560091!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F9F8F4" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#0F766E" }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Leave us your info — we’re here to answer your questions and guide
            you.
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ backgroundColor: "#C8A95A" }}
          ></div>
        </div>

        {/* Main Grid: Left (Info + Map) | Right (Form) */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Institution card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2
                className="text-2xl font-semibold mb-3"
                style={{ color: "#0F766E" }}
              >
                The Srilakshmi Group of Institutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                An excellent environment consisting of a vast auditorium, smart
                board classes, and other necessary facilities to foster holistic
                learning.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Vast Auditorium",
                  "Smart Classes",
                  "Wi-Fi Campus",
                  "Library",
                  "Sports Complex",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ backgroundColor: "#E6D3A3", color: "#0B5E55" }}
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">📍</span> Get in Touch
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">
                    No. 29, Sri Gandada Kaval, Magadi Main Rd, Vishwaneedam
                    Post, Sunkadakatte, Bengaluru, Karnataka 560091, India.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:slgi2k3@gmail.com"
                    className="text-sm hover:underline"
                    style={{ color: "#0F766E" }}
                  >
                    slgi2k3@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <div className="text-sm space-y-1">
                    <a
                      href="tel:+919887365962"
                      className="block hover:underline"
                      style={{ color: "#0F766E" }}
                    >
                      +91 98865 97362
                    </a>
                    <a
                      href="tel:+919535003404"
                      className="block hover:underline"
                      style={{ color: "#0F766E" }}
                    >
                      +91 95350 03404
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 w-full">
                <iframe
                  title="College Location Map"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-3 text-center text-sm border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=No.+29,+Sri+Gandada+Kaval,+Magadi+Main+Rd,+Vishwaneedam+Post,+Sunkadakatte,+Bengaluru,+Karnataka+560091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:underline"
                  style={{ color: "#0F766E" }}
                >
                  📍 Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="rounded-2xl p-4 text-center text-sm font-medium shadow-sm"
              style={{ backgroundColor: "#E6D3A3", color: "#0B5E55" }}
            >
              🔒 AICTE approved | ISO 9001:2015 certified | 24h response
              guarantee
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-5" style={{ backgroundColor: "#0F766E" }}>
              <h3 className="text-xl font-bold text-white">
                Send us a Message
              </h3>
              <p className="text-teal-100 text-sm">
                Fill out the form below and we’ll get back to you promptly.
              </p>
            </div>

            <div className="p-6">
              {submitSuccess && (
                <div className="mb-5 p-3 rounded-xl text-sm flex items-center gap-2 bg-green-50 text-green-700 border border-green-200">
                  <span className="text-lg">✓</span> Thank you! Your message has
                  been sent. Our team will contact you soon.
                </div>
              )}

              {submitError && (
                <div className="mb-5 p-3 rounded-xl text-sm flex items-center gap-2 bg-red-50 text-red-700 border border-red-200">
                  <span className="text-lg">⚠️</span> {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition ${
                      errors.fullName ? "border-red-400" : "border-gray-300"
                    }`}
                    style={{ focusRingColor: "#0F766E" }}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition ${
                      errors.email ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl ${
                      errors.mobile ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="Enter 10 digit mobile number"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 transition ${
                      errors.subject ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="Admission, Fee structure, Campus tour..."
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Select Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl bg-white focus:outline-none focus:ring-2 transition ${
                      errors.course ? "border-red-400" : "border-gray-300"
                    }`}
                  >
                    <option value="">-- Choose a program --</option>
                    <option>B.Com - Bachelor of Commerce</option>
                    <option>BBA - Bachelor of Business Administration</option>
                    <option>BCA - Bachelor of Computer Applications</option>
                    <option>B.Sc - Bachelor of Science</option>
                    <option>BA - Bachelor of Arts</option>
                    <option>M.Com - Master of Commerce</option>
                    <option>MBA - Master of Business Administration</option>
                    <option>MCA - Master of Computer Applications</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-xs mt-1">{errors.course}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-xl resize-none focus:outline-none focus:ring-2 transition ${
                      errors.message ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your query or requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold py-3 rounded-xl transition transform hover:scale-[1.01] disabled:opacity-70 flex justify-center items-center gap-2 shadow-md"
                  style={{ backgroundColor: "#0F766E" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0B5E55")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0F766E")
                  }
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Now →"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 pt-2">
                  🔒 Your privacy matters. We never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
