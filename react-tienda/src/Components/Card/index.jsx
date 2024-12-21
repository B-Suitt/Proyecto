const Card = (data) => {
  return (
    <div className="grid grid-rows-[400px_1fr]  max-w-[360px] mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative grid place-items-center">
        <img
          className="max-h-[400px] max-w-[360px] object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="grid grid-flow-row p-4">
        <h3 className="text-lg font-medium mb-2">{data.data.title}</h3>
        <div className="flex items-center justify-between self-end">
          <span className="font-bold text-lg">${data.data.price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
