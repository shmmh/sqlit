export default function Tos() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Acceptance of Terms
          </h2>
          <p className="mt-4 text-muted-foreground">
            {`By accessing or using Sqlit App, you agree to be bound by these
            Terms of Service ('Terms'). If you do not agree to these Terms,
            please do not use the application. Sqlit App reserves the right to
            update or change these Terms at any time, and your continued use of
            the application constitutes acceptance of those changes.`}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Use of the Application
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sqlit App is designed to help users split bills and manage shared
            expenses. You agree to use the application only for its intended
            purpose. You are responsible for ensuring that your use of Sqlit App
            complies with all applicable laws and regulations.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              You must provide accurate and complete information when creating
              an account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You may not use Sqlit App for any unlawful or fraudulent activity.
            </li>
            <li>
              Sqlit App reserves the right to terminate or suspend your account
              for any violation of these Terms.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Payment and Fees
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sqlit App may offer both free and paid versions of the application.
            By subscribing to a paid plan, you agree to pay all applicable fees
            associated with that plan. Payment details and pricing information
            will be provided at the time of subscription.
          </p>
          <p className="mt-4 text-muted-foreground">
            Sqlit App reserves the right to change its pricing and subscription
            plans at any time. Any changes will be communicated to you in
            advance, and you will have the option to continue with your current
            plan or switch to a different plan.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Intellectual Property
          </h2>
          <p className="mt-4 text-muted-foreground">
            All content, trademarks, and data on Sqlit App, including but not
            limited to software, text, graphics, logos, icons, and images, are
            the property of Sqlit App or its licensors. You may not copy,
            distribute, reproduce, or use any of these materials without the
            prior written consent of Sqlit App.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            User-Generated Content
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sqlit App allows you to upload and share content, such as receipts
            and payment details. By submitting content to Sqlit App, you grant
            us a non-exclusive, royalty-free, perpetual, and worldwide license
            to use, reproduce, modify, adapt, and display such content for the
            purpose of operating and improving the application.
          </p>
          <p className="mt-4 text-muted-foreground">
            You are solely responsible for the content you upload and share on
            Sqlit App. Sqlit App reserves the right to remove any content that
            violates these Terms or is deemed inappropriate.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-4 text-muted-foreground">
            {`Sqlit App is provided "as is" and without any warranty of any kind,
            whether express or implied. Sqlit App does not guarantee that the
            application will be available at all times or that it will be free
            of errors or interruptions. To the fullest extent permitted by law,
            Sqlit App disclaims all liability for any damages arising from your
            use of the application.`}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Governing Law
          </h2>
          <p className="mt-4 text-muted-foreground">
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction]. Any disputes arising from these Terms
            or your use of Sqlit App will be subject to the exclusive
            jurisdiction of the courts located in [Your Jurisdiction].
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <a
              href="mailto:terms@sqlitapp.com"
              className="text-primary underline underline-offset-2"
            >
              terms@sqlitapp.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
