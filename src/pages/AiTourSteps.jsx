import React, { useRef, useEffect } from "react";

export default function AIAgentPage() {
  const messagesEndRef = useRef(null);

  const messages = [
    { sender: "bot", text: "Welcome Back, Kadin! How can I help you today?" },
    {
      sender: "user",
      text: "Hey, I want to create a new referral campaign, but I’d like some help from AI to make sure it’s set up correctly and performs well. Can you guide me through it?",
    },
    {
      sender: "bot",
      text: "Absolutely! I’ll help you create a high-converting referral campaign step by step. Let’s start by defining your main objective. What’s the primary goal of this campaign?",
    },
    {
      sender: "user",
      text: "My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I’d like to reward them for it.",
    },
    {
      sender: "bot",
      text: "That’s a great goal! Referral campaigns work best when there’s a strong incentive. What kind of reward would you like to offer referrers?",
    },
    { sender: "user", text: "Discount on next purchase" },
    {
      sender: "bot",
      text: "Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?",
    },
    { sender: "user", text: "15%" },
    {
      sender: "bot",
      text: "15% sounds like a strong incentive! Now, let’s define when a referral is considered valid. When should the referrer receive their reward?",
    },
    { sender: "user", text: "When the referred person signs up" },
    {
      sender: "bot",
      text: "That’s a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?",
    },
    {
      sender: "user",
      text: "I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later.",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full p-6 space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">AI Agent</h2>
        <button className="flex items-center text-sm text-muted-foreground gap-2 hover:text-black">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 0 0 15 4.51M3.51 15A9 9 0 0 0 9 19.49"></path>
          </svg>
          Reset
        </button>
      </div>

      {/* Chat Block */}
      <div className="flex flex-col bg-white rounded-2xl shadow-sm border p-4 md:p-6 w-full h-[70vh] overflow-hidden">
        <div className="text-xl font-semibold mb-4">🤖 AI Agent</div>

        {/* Scrollable messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`bg-${
                  msg.sender === "bot" ? "[#f2f6ff]" : "gray-100"
                } text-sm rounded-lg px-4 py-2 max-w-md shadow-sm`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Summary card */}
          <div className="flex justify-start">
            <div className="p-4 rounded-xl bg-[#f2f6ff] border border-[#d9e4ff] text-sm space-y-2 max-w-md w-full">
              <div className="font-semibold">
                Got it! Here's a quick summary of your campaign:
              </div>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  <span className="font-medium text-blue-600">Goal:</span>{" "}
                  Increase sales
                </li>
                <li>
                  <span className="font-medium text-blue-600">Reward:</span> 15%
                  discount on the next purchase
                </li>
                <li>
                  <span className="font-medium text-blue-600">Condition:</span>{" "}
                  Reward is given when the referred person makes a purchase
                </li>
                <li>
                  <span className="font-medium text-blue-600">Duration:</span> 3
                  months
                </li>
              </ul>
              <div className="flex justify-end gap-4 pt-2">
                <button className="border rounded-md px-4 py-1.5 text-sm">
                  Edit
                </button>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm">
                  Launch
                </button>
              </div>
            </div>
          </div>

          {/* Final user message */}
          <div className="flex justify-end">
            <div className="bg-gray-100 text-sm rounded-lg px-4 py-2 max-w-md shadow-sm">
              Launch
            </div>
          </div>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick links */}
      <div className="max-w-4xl mx-auto w-full pt-4 border-t">
        <div className="flex flex-wrap gap-4 justify-center py-6">
          <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
            🚀 Send Referral
          </button>
          <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
            📤 Create Campaign
          </button>
          <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
            🔁 Follow-Up
          </button>
          <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
            📄 View Referral
          </button>
        </div>

        {/* Chat Input */}
        <div className="flex items-center gap-2 bg-white border rounded-lg p-2 shadow-sm max-w-2xl mx-auto">
          <textarea
            placeholder="Ask me anything..."
            className="w-full min-h-[40px] rounded-lg border-none bg-white px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-0 resize-none"
          />
          <button
            type="submit"
            className="text-blue-500 hover:text-blue-600 p-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.94 2.94a1.5 1.5 0 012.12 0l12 12a1.5 1.5 0 01-2.12 2.12l-12-12a1.5 1.5 0 010-2.12z" />
              <path d="M17.06 2.94a1.5 1.5 0 010 2.12l-12 12a1.5 1.5 0 01-2.12-2.12l12-12a1.5 1.5 0 012.12 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
