function useCustomFetch (url: string, method: string, body: object) {
  return $fetch.raw(
    'http://localhost:8080/api/' + url, {
      method,
      body: JSON.stringify(body)
    }
  )
}

export { useCustomFetch }
