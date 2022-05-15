const DEFAULT_OPTIONS = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
}

export async function post(endPoint, data) {
  try {
    const response = await fetch(endPoint, {
      ...DEFAULT_OPTIONS,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const body = await response.json()
    return body
  }
  catch(e) {
    if (!(e instanceof TypeError)) {
      throw e
    }

    console.error(`network error: ${e.cause.message}`)
  }
}
