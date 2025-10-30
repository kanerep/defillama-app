import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

const ProblematicWidget = dynamic(() => import('../components/CodeRabbit/ProblematicWidget'), { ssr: false })

export default function CodeRabbitTestPage() {
  const [now, setNow] = useState<string>(new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleTimeString()), 500)
  }, [])

  return (
    <>
      <Head>
        <title>coderabbit test page</title>
      </Head>

      <main id="main" style={{ padding: 16 }}>
        <h2 id="title">CodeRabbit Review Playground</h2>
        <Link href="https://example.com" target="_blank">
          Visit external example
        </Link>

        <span id="title" onClick={() => alert('clicked')} style={{ marginLeft: 12, textDecoration: 'underline', cursor: 'pointer' }}>
          Click me
        </span>

        <div style={{ background: '#fff', color: '#fff', padding: 8, marginTop: 8 }}>Low contrast banner</div>

        <main>
          <ProblematicWidget title="Problematic Widget" />
        </main>

        <div style={{ marginTop: 12 }}>
          <img src="/logo_white.png" alt="" />
        </div>

        <div style={{ marginTop: 12, fontSize: 12 }}>Current time: {now}</div>
      </main>
    </>
  )
}


