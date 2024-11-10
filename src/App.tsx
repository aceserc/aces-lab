import { signOut } from "firebase/auth"
import { Button } from "./components/ui/button"
import { loginWithGoogle } from "./firebase/login-with-google"
import useAuth from "./hooks/use-auth"
import { auth } from "./config/firebase"
import { Key } from "lucide-react"


function App() {
  const { user } = useAuth()

  return (
    <>
      <h1 className="text-3xl text-gray-600 mb-4">Letter Pad</h1>
      <div className="space-y-4">
        {!user ? (
          <Button
            onClick={loginWithGoogle}
            className="flex items-center space-x-2"
          >
            <Key className="text-xl" />
            <span>Login with Google</span>
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={async () => await signOut(auth)}
            className="flex items-center space-x-2"
          >
            <Key className="text-xl" />
            <span>Sign Out</span>
          </Button>
        )}

        <div>
          {user ? (
            <>
              <p className="text-lg font-semibold">Welcome, {user.displayName}</p>
              <table className="border w-full mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="px-4 py-2">{user.uid}</td>
                    <td className="px-4 py-2">{user.displayName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      <img
                        src={user?.photoURL ?? ''}
                        alt={user.displayName ?? "photo"}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-gray-500 mt-4">Please login to continue</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
