import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        id: Number,
        src: {
            type: String,
            required: true,
            trim: true,
        },
        thumb: {
            type: String,
            trim: true,
        },
        alt: {
            type: String,
            trim: true,
        },
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {
        sku: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        category: {
            type: String,
            enum: ["app", "software", "printer", "bundle"],
            required: true,
            index: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        originalPrice: {
            type: Number,
            default: 0,
            min: 0,
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        currency: {
            type: String,
            default: "INR",
            enum: ["INR"],
        },

        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },

        reviewCount: {
            type: Number,
            default: 0,
            min: 0,
        },

        images: {
            type: [imageSchema],
            default: [],
        },

        features: {
            type: [String],
            default: [],
        },

        tags: {
            type: [String],
            default: [],
            index: true,
        },

        includedProducts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        inStock: {
            type: Boolean,
            default: true,
        },

        maxQty: {
            type: Number,
            default: 100,
            min: 1,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isPopular: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        sortOrder: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

productSchema.index({ name: "text", description: "text", tags: "text" });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });
productSchema.index({ createdAt: -1 });

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;