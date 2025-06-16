import Head from "next/head";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <Head>
        <title>About Us | Online Coding Platform</title>
        <meta
          name="description"
          content="Learn more about our mission, features, and how our online coding platform helps developers."
        />
      </Head>

      <div className="bg-gray-100 dark:bg-[#171717] min-h-screen text-gray-800 dark:text-gray-100">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Introduction Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold">
              What is Our Platform?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our online coding platform offers a powerful space for programmers
              to improve their skills, prepare for job interviews, and
              participate in coding challenges. Whether you are a beginner or an
              experienced developer, we have something for you!
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                ["🔥 Solve Challenges", "Practice coding problems in different categories and difficulty levels."],
                ["⚡ Real-Time Execution", "Run your code instantly in multiple programming languages."],
                ["📊 Track Progress", "Monitor your growth, improve your problem-solving skills, and analyze solutions."],
                ["🏆 Competitive Programming", "Train for coding competitions and improve your ranking."],
                ["💬 Community Support", "Discuss solutions, share knowledge, and grow with others."],
                ["🚀 Interview Preparation", "Get ready for FAANG and top tech job interviews with real coding problems."]
              ].map(([title, desc], index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We are dedicated to helping developers sharpen their skills and
              succeed in technical interviews. Our goal is to make coding
              practice accessible to everyone and build a strong developer
              community.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {[
                ["📝 Sign Up", "Create an account to start solving coding challenges."],
                ["🔍 Choose Problems", "Select coding problems based on difficulty and topics."],
                ["💻 Write Code", "Use our online code editor to write and test your solutions."],
                ["🏁 Submit & Learn", "Get instant feedback, learn from solutions, and improve."]
              ].map(([title, desc], index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have questions? Want to collaborate? Reach out to us!
            </p>
            <div className="mt-6">
              <a
                href="mailto:support@codingplatform.com"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                support@codingplatform.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
