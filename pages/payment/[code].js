import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { decode, encode } from 'base-64'
export default function index() {
  const router = useRouter()
  const { code } = router.query

  useEffect(() => {
    var test = decode(code).match(/<script[^>]*>([^<]+)<\/script>/)[1]

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.text = test
    document.head.appendChild(script)
  }, [])

  return <div>test</div>
}
