import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {User} from "@/types/user";
import storage from "@/lib/storage";
import {jwtDecode} from "jwt-decode";
import 'core-js/stable/atob'

const AuthContext = createContext<{
  user: User | null;
  isLoading: boolean,
  signIn: (token: string) => Promise<void>,
  signOut: () => Promise<void>,
  token?: string | null
}>({
  user: null,
  isLoading: false,
  signIn: async () => {},
  signOut: async () => {},
  token: null
});

export function useSession() {
  const value = useContext(AuthContext)

  if (!value) {
    throw new Error('useSession must be used within a AuthProvider')
  }

  return value;
}

export function SessionProvider(props: PropsWithChildren) {

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    storage.load({key: 'sessionToken'}).then(setToken).catch(() => setIsLoading(false))
  }, [])

  console.log('session-provider')
  console.log(user)
  console.log('----------------------')

  useEffect(() => {
    if (token) {
      setIsLoading(true)
      try {
        const decode = jwtDecode(token)
        setUser(decode as User)
      } catch (e) {
        console.error(e)
      }
      setIsLoading(false)
    }
  }, [token]);

  const signIn = async (token: string) => {
    await storage.save({key: 'sessionToken', data: token})
    setToken(token)
  }

  const signOut = async () => {
    await storage.remove({key: 'sessionToken'})
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      signOut,
      token,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}