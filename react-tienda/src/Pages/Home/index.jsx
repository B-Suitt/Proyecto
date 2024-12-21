import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setItems(data)
    })
  }, [])

  return (
    <Layout>
      Home
      <div className='w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        {items &&
          items.map((item) => (
            <Card key= {item.id} data={item}/>
          ))}
      </div>

      
      {/* <div className='grid gap-4 grid-cols-3 w-max max-w-screen-lg'>
        {
          items?.map( item => (
            <Card key = {item.id} data = {item} />
          ))
        }
      </div> */}
    </Layout>
  )
}

export default Home
