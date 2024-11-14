import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, FileText, Users, Calendar, Edit2, Trash2 } from "lucide-react"
import useAuth from "@/hooks/use-auth.ts";
import {Link} from "react-router-dom";

// Mock data for demonstration
const mockLetters = [
  {
    id: "1",
    title: "Job Application",
    recipient: "HR Department",
    createdAt: "2023-08-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Cover Letter for Internship",
    recipient: "Recruiting Manager",
    createdAt: "2023-09-10T14:30:00Z",
  },
  {
    id: "3",
    title: "Reference Request",
    recipient: "Professor Smith",
    createdAt: "2023-10-15T09:45:00Z",
  },
]

const useLetters = () => {
  // Return mock data for demonstration purposes
  return {
    letters: mockLetters,
    isLoading: false,
  }
}

export default function Dashboard() {
  const { user } = useAuth()
  const { letters, isLoading } = useLetters()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Welcome back, {user?.displayName || "User"}!
            </p>
          </div>
          <svg
              className="w-32 h-32 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 7H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 11H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 15H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Letters</CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{letters.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary to-secondary-foreground text-secondary-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recipients</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{letters.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent to-accent-foreground text-accent-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Created</CardTitle>
              <Calendar className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Date(letters[letters.length - 1].createdAt).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Your Letters</h2>
          <Link to="/dashboard/create">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Letter
            </Button>
          </Link>
        </div>

        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {letters.map((letter) => (
                    <TableRow key={letter.id}>
                      <TableCell className="font-medium">{letter.title}</TableCell>
                      <TableCell>{letter.recipient}</TableCell>
                      <TableCell>{new Date(letter.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link to={`/edit-letter/${letter.id}`}>
                            <Button variant="outline" size="sm">
                              <Edit2 className="h-4 w-4 mr-1" /> Edit
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>


      </div>
  )
}