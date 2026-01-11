import React from "react";
import "./StaticPages.css";

const Privacy = () => {
  return (
    <div className="static-page">
      <h1>Privacy Policy</h1>

      <p>
        At Nexova, your privacy is important to us. This policy explains how we
        collect, use, and protect your information.
      </p>

      <h3>Information We Collect</h3>
      <p>
        We collect basic account information such as your name, email address,
        and delivery details to process orders and provide customer support.
      </p>

      <h3>How We Use Your Information</h3>
      <p>
        Your data is used only to fulfill orders, improve our services, and
        communicate important updates. We do not sell or share your personal
        information with third parties.
      </p>

      <h3>Security</h3>
      <p>
        We use industry-standard security practices to protect your data and
        ensure safe transactions.
      </p>

      <p>
        By using Nexova, you agree to this privacy policy.
      </p>
    </div>
  );
};

export default Privacy;
