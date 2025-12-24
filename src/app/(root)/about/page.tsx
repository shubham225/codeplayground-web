import { Button } from "@/components/ui/button";
import { Code2, BrainCog, Users2, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About the Platform</h1>
        <p className="text-lg text-muted-foreground">
          Empowering future developers with the tools to learn, create, and excel in coding.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 rounded-lg shadow-md border">
          <Code2 className="text-blue-600 w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Create Coding Questions</h2>
          <p className="text-muted-foreground">
            Build your own custom coding problems with test cases, hints, and detailed solutions. Ideal for instructors, mentors, and learners.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md border">
          <BrainCog className="text-purple-600 w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Design MCQs</h2>
          <p className="text-muted-foreground">
            Add multiple-choice questions with rich explanations to test theoretical knowledge and core concepts.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md border">
          <Users2 className="text-green-600 w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Collaborative Learning</h2>
          <p className="text-muted-foreground">
            Connect with a community of passionate coders. Share questions, challenge peers, and grow together.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md border">
          <Trophy className="text-yellow-600 w-8 h-8 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Practice & Compete</h2>
          <p className="text-muted-foreground">
            Solve real-world coding problems. Track your progress, earn badges, and climb the leaderboard.
          </p>
        </div>
      </section>
    </div>
  );
}
