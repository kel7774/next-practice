import Link from 'next/link'
function NewsPage () {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <Link href='/news/next1'><li>Next 1</li></Link>
        <li>Next 2</li>
      </ul>
    </>
  )
}

export default NewsPage

// domain.com/news
