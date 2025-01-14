import React from "react";
import "./Privacy_policy.css";

const Privacy_policy = () => {
  return (
    <div className="priv-container">
      <div className="priv-inner-container">
        <div className="privacy-policy-div">
          <h1 className="privacy-policy-heading">Privacy Policy</h1>
          <p className="privacy-policy-para">
            At Rasoda, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our AI-powered recipe generator app.
          </p>
        </div>

        <div className="data-collection">
          <h2>Data Collection</h2>
          <p>
            When you use the Rasoda app, we may collect the following
            information:
          </p>
          <ul>
            <li>
              Your email address and other contact information you provide when
              you create an account.
            </li>
            <li>
              Information about your dietary preferences, allergies, and cooking
              habits, which you provide to help us personalize your recipe
              recommendations.
            </li>
            <li>
              Usage data, such as the recipes you search for, save, or rate, to
              improve our recommendations and app features.
            </li>
          </ul>
        </div>

        <div className="data-usage">
          <h2>Data Usage</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Provide you with personalized recipe recommendations based on your
              preferences and past usage.
            </li>
            <li>
              Improve and enhance the Rasoda app, such as by developing new
              features or optimizing the user experience.
            </li>
            <li>
              Communicate with you about your account, new features, or
              important updates.
            </li>
          </ul>
        </div>

        <div className="data-sharing">
          <h2>Data Sharing</h2>
          <p>
            We do not sell or share your personal information with third parties
            for their own marketing purposes. However, we may share your
            information in the following cases:
          </p>
          <ul>
            <li>
              With service providers who help us operate the Rasoda app, such as
              hosting or analytics providers, but only to the extent necessary
              for them to perform their services.
            </li>
            <li>
              If required by law, such as to comply with a subpoena or other
              legal process.
            </li>
            <li>
              In connection with a corporate transaction, such as a merger or
              sale of assets, where your information may be transferred to the
              new owner.
            </li>
          </ul>
        </div>

        <div className="data-security">
          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, or misuse. This
            includes using encryption, access controls, and other security best
            practices. However, no method of transmission over the internet or
            electronic storage is 100% secure, so we cannot guarantee absolute
            security.
          </p>
        </div>

        <div className="your-rights">
          <h2>Your Rights</h2>
          <p>
            You have the following rights with respect to your personal
            information:
          </p>
          <ul>
            <li>
              Access: You can request a copy of the personal information we have
              about you.
            </li>
            <li>
              Correction: You can request that we correct any inaccurate or
              incomplete personal information we have about you.
            </li>
            <li>
              Deletion: You can request that we delete your personal
              information, subject to certain exceptions.
            </li>
            <li>
              Opt-out: You can opt-out of certain data uses, such as receiving
              marketing communications from us.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <b>privacy@rasoda.com</b>.
          </p>
        </div>

        <div className="changes-tp-policy">
          <h2>Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            We encourage you to review this policy periodically for any updates.
          </p>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at <b>privacy@rasoda.com</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy_policy;
