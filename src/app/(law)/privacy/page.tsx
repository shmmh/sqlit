export default function Privacy() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Information We Collect
          </h2>
          <p className="mt-4 text-muted-foreground">
            We collect certain information from you when you use Sqlit App,
            including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Your name, email address, and other contact information</li>
            <li>
              Information about your device and browser, such as IP address
            </li>
            <li>
              Details about your usage of Sqlit App, including pages visited,
              actions taken, and transaction data
            </li>
            <li>
              User-generated content, such as receipts, usernames, and payment
              details
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Provide and improve Sqlit App services</li>
            <li>Facilitate bill-splitting and payment processing</li>
            <li>Communicate with you about your account or our services</li>
            <li>Personalize your experience within Sqlit App</li>
            <li>Analyze usage patterns to enhance our offerings</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            How We Protect Your Information
          </h2>
          <p className="mt-4 text-muted-foreground">
            We take the security of your information seriously and have
            implemented various measures to protect it, including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Encryption of data during transmission and storage</li>
            <li>Strict access controls and authentication procedures</li>
            <li>Regular security audits and monitoring</li>
            <li>
              Compliance with industry standards and regulations, such as GDPR
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Your Rights
          </h2>
          <p className="mt-4 text-muted-foreground">
            You have certain rights regarding your personal information,
            including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              Access: You can request a copy of the personal information we hold
              about you.
            </li>
            <li>
              Correction: You can request that we correct any inaccurate or
              incomplete personal information we hold about you.
            </li>
            <li>
              Deletion: You can request that we delete your personal
              information, subject to certain exceptions.
            </li>
            <li>
              Opt-out: You can opt out of certain data processing activities,
              such as marketing communications.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:privacy@sqlitapp.com"
              className="text-primary underline underline-offset-2"
            >
              privacy@sqlitapp.com
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-4 text-muted-foreground">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
            You are advised to review this privacy policy periodically for any
            changes.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions or concerns about this privacy policy or
            our data practices, please contact us at{" "}
            <a
              href="mailto:privacy@sqlitapp.com"
              className="text-primary underline underline-offset-2"
            >
              privacy@sqlitapp.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
