try {
  const result = await fetch('https://example.com/v3/person', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'januswel',
      team: 'Engineering Management Office',
      active: true,
      sendmail: false,
    })
  })

  if (result.ok) {
    const json = await result.json()
    console.log(json)
  }
  else {
    console.error(`${result.status} ${result.statusText}`)
  }
}
catch(e) {
  if (e instanceof TypeError) {
    console.error(`network error: ${e.message}`)
  }
  else {
    throw e
  }
}
