import Link from "next/link"
import { motion } from "framer-motion"
import { formatPrice } from "@/lib/utils"
import { Star, ArrowRight } from "lucide-react"

const ProductCard = ({ product = {} }) => {
    return (
        <motion.div
            key={product?._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative flex flex-col bg-white rounded-3xl p-4 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
        >
            <div className="relative overflow-hidden rounded-2xl bg-zinc-50/70 border border-zinc-100/60 aspect-[4/3] flex items-center justify-center p-6 group-hover:bg-zinc-100/40 transition-colors">
                {product?.discount && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product?.discount}% OFF
                    </span>
                )}
                <img
                    src={product?.images[0].src}
                    alt={product?.name}
                    className="max-h-[85%] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex-1 flex flex-col pt-4 pb-2 px-1">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-1">
                    <div className="bg-primary-50 text-primary-500 rounded-md px-3 py-1">{product?.category}</div>
                    <div className="flex items-center gap-1 text-amber-500">
                        <Star size={12} className="fill-amber-500" />
                        <span className="text-zinc-800 font-medium">{product?.rating}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 line-clamp-1 group-hover:text-primary-600 transition-colors mb-2">
                    {product?.name}
                </h3>

                <p className="text-[13px] text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {product?.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2 border-t border-zinc-50">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-zinc-900">
                            {formatPrice(product?.price)}
                        </span>

                        {product?.originalPrice && (
                            <span className="text-xs text-zinc-400 line-through">
                                {formatPrice(product?.originalPrice)}
                            </span>
                        )}
                    </div>

                    <Link
                        href={`/shop/${product?.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-50 hover:bg-primary-600 text-primary-600 hover:text-white font-bold text-xs transition-all duration-200 group-hover:shadow-sm"
                    >
                        View Details
                        <ArrowRight size={13} />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard