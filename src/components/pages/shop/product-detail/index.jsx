"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Zap } from "lucide-react"
import { StarRating } from "@/components/global/general/star-rating"
import { TrustBadges } from "@/components/global/general/trust-badges"
import { ProductGallery } from "@/components/global/general/product-gallery"
import { QuantitySelector } from "@/components/global/general/quantity-selector"

const ProductDetails = ({ product = {} }) => {
    const [quantity, setQuantity] = useState()
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white/40 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full mx-auto">
                <div className="bg-white rounded-3xl border border-zinc-100 overflow-hidden p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                        <div className="w-full pt-0">
                            <ProductGallery images={product?.images} discount={product?.discount} />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <span className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-indigo-600 uppercase block mb-2">
                                    {product?.category}
                                </span>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 leading-tight tracking-tight">
                                    {product?.name}
                                </h1>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap">
                                <StarRating rating={product?.rating} />
                                <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded-md">
                                    {product?.rating}
                                </span>
                                <span className="text-xs text-zinc-400">
                                    {product?.reviewCount.toLocaleString()} reviews
                                </span>
                            </div>

                            <div className="flex items-baseline gap-3.5 p-4 bg-gradient-to-r from-indigo-50/70 to-indigo-50/10 border border-indigo-50/50 rounded-2xl">
                                <span className="text-3xl font-black text-zinc-900">
                                    {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        maximumFractionDigits: 0,
                                    }).format(product?.price || 0)}
                                </span>

                                <span className="text-sm text-zinc-400 line-through">
                                    {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                        maximumFractionDigits: 0,
                                    }).format(product?.originalPrice || 0)}
                                </span>

                                {product?.discount && (
                                    <span className="text-[10px] font-bold bg-red-500 text-white px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-red-100">
                                        {product.discount}% OFF
                                    </span>
                                )}
                            </div>

                            <p className="text-[13.5px] text-zinc-500 leading-relaxed font-normal">
                                {product?.description}
                            </p>

                            <div className="h-px bg-zinc-100" />

                            <div className="flex items-end gap-4 flex-wrap">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase block">
                                        Quantity
                                    </span>
                                    {/* <QuantitySelector value={quantity} onChange={setQuantity} max={product?.maxQty} /> */}
                                </div>

                                {quantity > 1 && (
                                    <div className="text-xs text-zinc-400 mb-1">
                                        Total: <span className="text-zinc-800 font-bold text-sm">${totalPrice}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button
                                    className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs gap-2 shadow-md shadow-indigo-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                                // onClick={handleBuyNow}
                                >
                                    <Zap size={14} />
                                    Buy Now
                                </Button>

                                <Button
                                    variant="outline"
                                    className="flex-1 h-12 rounded-xl border-zinc-200 font-bold text-xs gap-2 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200"
                                // onClick={handleAddToCart}
                                >
                                    <ShoppingCart size={14} />
                                    Add to Cart
                                </Button>
                            </div>

                            <div className="h-px bg-zinc-100" />

                            <TrustBadges />

                            {/* <ProductAccordion
                                details={product?.features}
                                shipping={product?.shipping}
                                sustainability={product?.sustainability}
                                tags={product?.tags}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails