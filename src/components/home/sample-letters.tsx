import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const letters = [
  { title: "Official Request", description: "A formal letter requesting official documents." },
  { title: "Invitation", description: "An invitation letter for a cultural event." },
  { title: "Job Application", description: "A professional job application letter." },
];
function SampleLetters() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Examples</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sample Nepali Letters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {letters.map((sample, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
                <p className="text-gray-600 mb-4">{sample.description}</p>
                <Link to={`/samples/${index + 1}`}>
                  <Button variant="outline" className="w-full">
                    View Sample
                    {" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SampleLetters;
