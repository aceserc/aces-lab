import { Link } from "react-router-dom";

import { Button } from "../ui/button";

function CallToAction() {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-blue-200">Create your first Nepali letter today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/generator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
