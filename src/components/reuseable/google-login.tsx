import { loginWithGoogle } from '@/firebase/login-with-google'
import { Button } from '../ui/button'

function GoogleLogin() {
  return (
    <Button
      onClick={loginWithGoogle}
      variant="secondary"
      className="gap-4 border-primary/40 border"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        width={20}
        height={20}
      />
      Continue with Google
    </Button>
  )
}

export default GoogleLogin
