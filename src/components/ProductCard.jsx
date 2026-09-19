

const ProductCard = ({ product }) => {
  return (

    <div className="flex flex-col  w-[239px]">
       <img
        className="w-[239px] h-[427px] object-cover"
        src={product.images[0].url}
        alt={product.name}
      />
      <h3 className="font-bold mt-4">{product.name}</h3>
      <p className="text-[#BDBDBD]">${product.price}</p>
      <div className="flex gap-[6px] mt-2">
        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
      </div>
    </div>

  )
}

export default ProductCard


