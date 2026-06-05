import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req, { params }) {
    try {
        const { slug } = await params
        await connectToDatabase();

        console.log("Slug", slug)
        const product = await Product.findOne({
            slug,
            isActive: true,
        });

        if (!product) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Product not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: product
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch product",
                error: error.message,
            },
            { status: 500 }
        );
    }
}