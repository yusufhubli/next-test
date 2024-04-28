
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import Data from './components/data'
import { getData } from './product/page'

export default function Home() {
  return (
    <div>
     {/* <Suspense fallback={<p>data loading</p>}>
      <Data/>
     </Suspense> */}
     <h2>hellowe</h2>

    </div>
  )
}
