import React from "react";

export default function HelpPage() {
  const helpTopics = [
    {
      title: "Getting Started",
      description:
        "Learn how to set up your account, configure your settings, and start using the platform effectively.",
      icon: "🚀",
    },
    {
      title: "Referral Campaigns",
      description:
        "Create and manage campaigns, understand metrics, and optimize performance.",
      icon: "🎯",
    },
    {
      title: "Leads & Promoters",
      description:
        "Track, manage, and engage with leads and promoters through your dashboard.",
      icon: "📈",
    },
    {
      title: "Billing & Payments",
      description:
        "Understand invoices, payment methods, and manage your subscription.",
      icon: "💳",
    },
    {
      title: "Troubleshooting",
      description:
        "Fix common issues, get support for errors, and explore workarounds.",
      icon: "🛠️",
    },
    {
      title: "Contact Support",
      description:
        "Still need help? Reach out to our friendly support team for quick assistance.",
      icon: "📞",
    },
  ];

  return (
    <div className="w-full h-full p-6 space-y-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">Help Center</h1>
        <p className="text-gray-500 text-sm">
          Find answers to your questions or contact our support team
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Help Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {helpTopics.map((topic, idx) => (
          <div
            key={idx}
            className="p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="text-3xl mb-2">{topic.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{topic.title}</h3>
            <p className="text-sm text-gray-500">{topic.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 rounded-2xl p-6 mt-12 text-center max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Need further assistance?</h2>
        <p className="text-gray-600 text-sm mb-4">
          Our team is here to help you 24/7. Reach out and we’ll respond ASAP.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
          Contact Support
        </button>
      </div>
    </div>
  );
}
