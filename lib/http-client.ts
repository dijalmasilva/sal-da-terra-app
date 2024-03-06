import wretch from 'wretch'
import useSWR from "swr";

const HttpClient = wretch('http://192.168.0.9:3000')

export function useFetch<Data = any, Error = any>(url: string, token?: string | null) {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    return await HttpClient.auth(token ? `Bearer ${token}` : '').get(url).json(response => response)
  })

  return { data, error}
}

export default HttpClient