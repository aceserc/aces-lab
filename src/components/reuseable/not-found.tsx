import { FileQuestion, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <FileQuestion className="h-20 w-20 text-blue-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Page Not Found
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <Link to="/">
                <Button className="w-full flex justify-center items-center" size="lg">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <Button variant="outline" className="w-full flex justify-center items-center" size="lg">
                  Create a Letter
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Need help?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/contact" className="font-medium text-blue-600 hover:text-blue-500">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
