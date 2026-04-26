import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security - Gleame",
  description: "Gleame Security Policy and vulnerability reporting guidance.",
};

export default function SecurityPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-gray-600 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:text-gray-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ol]:mb-4 [&_ol]:pl-6 [&_ol]:list-decimal [&_li]:mb-2 [&_a]:text-primary [&_a:hover]:underline [&_hr]:my-8 [&_hr]:border-gray-200 [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_strong]:text-gray-900 [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_th]:text-left [&_th]:py-2 [&_th]:px-4 [&_th]:border-b [&_td]:py-2 [&_td]:px-4 [&_td]:border-b [&_tbody_tr:last-child_td]:border-b-0">
          <h1>Security Policy</h1>

          <h2>Reporting a Vulnerability</h2>

          <p>
            If you believe you have found a security vulnerability in Gleame (the
            Shopify app, the storefront widget, or the public APIs at{" "}
            <code>gleame.ai</code>), please report it by emailing{" "}
            <strong>security@gleame.ai</strong>.
          </p>

          <p>Please include:</p>

          <ul>
            <li>A description of the issue and its potential impact.</li>
            <li>Steps to reproduce, or a proof-of-concept.</li>
            <li>
              Any logs, request/response samples, or screenshots that help us
              reproduce.
            </li>
          </ul>

          <p>
            <strong>Please do not</strong> open a public GitHub issue, post to
            social media, or otherwise disclose the issue publicly until we have
            had a chance to investigate and remediate.
          </p>

          <h2>Our Commitments</h2>

          <ul>
            <li>
              <strong>Acknowledgement:</strong> within 2 business days of your
              report.
            </li>
            <li>
              <strong>Initial triage:</strong> within 5 business days, including
              a severity assessment and expected timeline.
            </li>
            <li>
              <strong>Resolution:</strong> we aim to fix High/Critical issues
              within 30 days, Medium within 90 days. We will keep you updated.
            </li>
            <li>
              <strong>Coordinated disclosure:</strong> we ask for a 90-day window
              before public disclosure. We are happy to credit you in our
              release notes if you wish.
            </li>
            <li>
              <strong>Safe harbor:</strong> we will not pursue legal action
              against good-faith security research that follows this policy and
              avoids privacy violations, service disruption, or destruction of
              data.
            </li>
          </ul>

          <h2>In Scope</h2>

          <ul>
            <li>
              The Gleame Shopify embedded admin app (<code>/app/*</code> routes).
            </li>
            <li>
              The public storefront APIs (<code>/api/storefront/*</code>) and the
              loader at <code>/widget-embed.js</code>.
            </li>
            <li>
              The Theme App Extension widget (<code>extensions/glimpse-widget/</code>).
            </li>
            <li>The marketing site at <code>gleame.ai</code>.</li>
          </ul>

          <h2>Out of Scope</h2>

          <ul>
            <li>
              Vulnerabilities in third-party platforms we depend on (Shopify,
              Supabase, Render, Google Gemini, OpenAI, Hey Mantle). Please report
              those directly to the vendor.
            </li>
            <li>Social engineering, physical attacks, and DDoS.</li>
            <li>
              Reports relying on outdated browsers, missing best-practice headers
              without a demonstrated exploit, or theoretical issues without
              impact.
            </li>
          </ul>

          <h2>Sub-Processors and Their Certifications</h2>

          <p>Gleame&apos;s infrastructure runs on certified sub-processors:</p>

          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Use</th>
                  <th>Certifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Shopify</strong>
                  </td>
                  <td>OAuth, billing, webhooks</td>
                  <td>SOC 2 Type II, ISO 27001</td>
                </tr>
                <tr>
                  <td>
                    <strong>Supabase</strong>
                  </td>
                  <td>Primary database (PostgreSQL)</td>
                  <td>SOC 2 Type II</td>
                </tr>
                <tr>
                  <td>
                    <strong>Render</strong>
                  </td>
                  <td>Application hosting</td>
                  <td>SOC 2 Type II</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Cloud (Gemini)</strong>
                  </td>
                  <td>Image generation</td>
                  <td>SOC 2, ISO 27001</td>
                </tr>
                <tr>
                  <td>
                    <strong>OpenAI</strong>
                  </td>
                  <td>Image generation (fallback)</td>
                  <td>SOC 2 Type II</td>
                </tr>
                <tr>
                  <td>
                    <strong>Hey Mantle</strong>
                  </td>
                  <td>Subscription billing</td>
                  <td>SOC 2 Type II</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Incident Response</h2>

          <p>
            Our internal incident-response runbook is documented at{" "}
            <code>docs/INCIDENT_RESPONSE.md</code>. Per our{" "}
            <a href="/terms">Terms of Service §10.7</a>, we will notify affected
            merchants without undue delay and within 72 hours of becoming aware
            of a personal-data breach.
          </p>

          <h2>Privacy</h2>

          <p>
            For data-handling and retention details, see our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

