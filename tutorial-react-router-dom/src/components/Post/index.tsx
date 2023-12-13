import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = () => {
  const { id } = useParams()
  const [qs] = useSearchParams()

  console.log('qs', qs)

  return (
    <div>
      <h1>Post - {id} - {`qs: ${qs}`}</h1>

      <Outlet />
    </div>
  )
}
