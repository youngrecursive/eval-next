import { useRouter } from 'next/router'
import useSWR from 'swr'

const Deploy = () => {
  const router = useRouter()
  const { date } = router.query
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data } = useSWR('/api/day', fetcher)
  console.log(data);
  // if (typeof data === 'undefined') {
    // On rentre dans cette boucle d'où le petit bug, data vaut true ou false ensuite mais charge d'abord en undefined
  // }
  if (data == true) {
    return <p>Le jour du {date} vous serez autorisé à déployer</p>
  }
  else {
    return <p>Le jour du {date} vous ne serez pas autorisé à déployer car c'est un vendredi</p>
  }

  }

export default Deploy