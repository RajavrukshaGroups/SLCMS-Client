import React, { useState } from 'react';

/**
 * Single logo component with fallback for missing/broken images.
 * No visible text labels.
 */
const Logo = ({ companyName, logoUrl }) => {
  const [hasError, setHasError] = useState(false);
  const showLogo = logoUrl && !hasError;

  return (
    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-4 border border-[var(--color-accent-soft)]">
      {showLogo ? (
        <img
          src={logoUrl}
          alt={`${companyName} logo`}
          className="max-h-full max-w-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full bg-[var(--color-bg-premium)] rounded-lg flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[var(--color-accent)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 21v-4H7v4"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

/**
 * Main component: Displays a heading + responsive grid of company logos.
 * Uses custom fonts (Cinzel for heading, Inter as default) and color palette.
 */
const RecruiterLogosOnly = ({ 
  logos = defaultLogos,
  heading = "Trusted by leading recruiters"
}) => {
  if (!logos.length) {
    return (
      <div className="text-center py-12 font-[var(--font-sans)] text-gray-500">
        No logos to display.
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-12 bg-[var(--color-bg-premium)]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-[var(--font-display)] text-[var(--color-primary)]">
          {heading}
        </h1>
        <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-12 rounded-full"></div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {logos.map((logo) => (
            <Logo 
              key={logo.id} 
              companyName={logo.companyName} 
              logoUrl={logo.logoUrl} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// Complete list of requested companies with official/public logo URLs
// ------------------------------
const defaultLogos = [
  { id: 1, companyName: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { id: 2, companyName: "Wipro", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { id: 3, companyName: "TCS", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/500px-Tata_Consultancy_Services.svg.png" },
  { id: 4, companyName: "IBM", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { id: 5, companyName: "CSC", logoUrl: "https://insurance.csccloud.in/assets/images/logo3.png" }, // CSC (now DXC but logo still valid)
  { id: 6, companyName: "Accenture", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/500px-Accenture.svg.png" },
  { id: 7, companyName: "Oracle", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { id: 8, companyName: "HSBC", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/500px-HSBC_logo_%282018%29.svg.png" },
  { id: 9, companyName: "HDFC Bank", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { id: 10, companyName: "Axis Bank", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/500px-AXISBank_Logo.svg.png" },
  { id: 11, companyName: "Honeywell", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Honeywell_logo.svg/500px-Honeywell_logo.svg.png" },
  { id: 12, companyName: "Dell", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/330px-Dell_logo_2016.svg.png" },
  { id: 13, companyName: "Capmark", logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQH_7PzyB8aajw/company-logo_200_200/company-logo_200_200/0/1631333525939?e=2147483647&v=beta&t=o84b3o1SPJS56Ewv4EKKDVy2CZy9HW7pFahgBSMoFTw" },  // No official public logo – will show fallback icon
  { id: 14, companyName: "Motorola", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Motorola-Logo.svg/500px-Motorola-Logo.svg.png" },
  { id: 15, companyName: "ADP", logoUrl: "https://in.adp.com/-/media/adp2025/ui/logo-adp.svg?rev=2ffd0a893eca4842b0f071c1e9c186b8&hash=85D6D9870432E605FE0FD7F830F16744" },
  { id: 16, companyName: "Qualcomm", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/960px-Qualcomm-Logo.svg.png" },
  { id: 17, companyName: "NCR", logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQHoWNpEijF34Q/company-logo_200_200/company-logo_200_200/0/1688565940760/ncr_corporation_logo?e=2147483647&v=beta&t=7nfdGo-tx7Zo01REOWPcOFtI4bsP6thTcmKissd-GyE" },
  { id: 18, companyName: "Muthoot Finance", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Muthoot_Finance_Logo.svg/500px-Muthoot_Finance_Logo.svg.png" },
  { id: 19, companyName: "Flipkart", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Flipkart_Logo_-_from_Official_Website.png" },
  { id: 20, companyName: "Amazon", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 21, companyName: "Countrywide", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Countrywide_logo.svg/500px-Countrywide_logo.svg.png" }  // No public high-quality logo – fallback
];

export default RecruiterLogosOnly;