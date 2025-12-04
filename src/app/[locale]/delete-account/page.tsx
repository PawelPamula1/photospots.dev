export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Delete Your PhotoSpots Account
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            In-App Deletion
          </h2>
          <p className="text-gray-600 mb-4">
            You can delete your account directly in the PhotoSpots app by
            following these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Open the PhotoSpots app</li>
            <li>Go to your Profile tab</li>
            <li>Tap on Settings</li>
            <li>Select "Delete Account"</li>
            <li>Confirm deletion when prompted</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What Gets Deleted
          </h2>
          <p className="text-gray-600 mb-4">
            When you delete your account, the following data is permanently
            removed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Your account information (email address and username)</li>
            <li>Your saved favorite photo spots</li>
            <li>Your uploaded photos and locations</li>
            <li>All personal data associated with your account</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>Please note:</strong> This action is permanent and cannot be
            undone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Retention
          </h2>
          <p className="text-gray-700">
            Your data is deleted immediately upon account deletion. No personal
            information is retained after your account has been removed.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-700 mb-2">
            If you encounter any issues deleting your account through the app,
            please contact us at:
          </p>
          <a
            href="mailto:pawelpamula003@gmail.com?subject=Account%20Deletion%20Request"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            pawelpamula003@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
}
