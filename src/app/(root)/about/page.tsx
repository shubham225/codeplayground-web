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

      <div className="bg-gray-100 min-h-screen">
        {/* Header Section */}
        {/* <header className="bg-primary text-white text-center py-12">
          <h1 className="text-4xl font-bold">About Our Coding Platform</h1>
          <p className="mt-2 text-lg">A place to learn, practice, and grow as a developer.</p>
        </header> */}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Introduction Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              What is Our Platform?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our online coding platform offers a powerful space for programmers
              to improve their skills, prepare for job interviews, and
              participate in coding challenges. Whether you are a beginner or an
              experienced developer, we have something for you!
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">🔥 Solve Challenges</h3>
                <p className="text-gray-600 mt-2">
                  Practice coding problems in different categories and
                  difficulty levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  ⚡ Real-Time Execution
                </h3>
                <p className="text-gray-600 mt-2">
                  Run your code instantly in multiple programming languages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">📊 Track Progress</h3>
                <p className="text-gray-600 mt-2">
                  Monitor your growth, improve your problem-solving skills, and
                  analyze solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  🏆 Competitive Programming
                </h3>
                <p className="text-gray-600 mt-2">
                  Train for coding competitions and improve your ranking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">💬 Community Support</h3>
                <p className="text-gray-600 mt-2">
                  Discuss solutions, share knowledge, and grow with others.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  🚀 Interview Preparation
                </h3>
                <p className="text-gray-600 mt-2">
                  Get ready for FAANG and top tech job interviews with real
                  coding problems.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We are dedicated to helping developers sharpen their skills and
              succeed in technical interviews. Our goal is to make coding
              practice accessible to everyone and build a strong developer
              community.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">📝 Sign Up</h3>
                <p className="text-gray-600 mt-2">
                  Create an account to start solving coding challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">🔍 Choose Problems</h3>
                <p className="text-gray-600 mt-2">
                  Select coding problems based on difficulty and topics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">💻 Write Code</h3>
                <p className="text-gray-600 mt-2">
                  Use our online code editor to write and test your solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">🏁 Submit & Learn</h3>
                <p className="text-gray-600 mt-2">
                  Get instant feedback, learn from solutions, and improve.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Get In Touch
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Have questions? Want to collaborate? Reach out to us!
            </p>
            <div className="mt-6">
              <a
                href="mailto:support@codingplatform.com"
                className="text-blue-600 font-semibold hover:underline"
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
