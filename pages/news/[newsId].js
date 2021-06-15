import { useRouter } from 'next/router'

function DetailPage () {
  const router = useRouter()
  const newsId = router.query.newsId
  // send request to api to fetch with newsId
  return (
    <h1>The Details Page</h1>
  )
}

export default DetailPage
