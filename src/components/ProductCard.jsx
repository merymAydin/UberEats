

const ProductCard = ({ product }) => {
  return (

    <div className="flex flex-col">
      <img
        className="w-full h-[250px] object-cover"
        src={product.images[0].url}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>

  )
}

export default ProductCard
