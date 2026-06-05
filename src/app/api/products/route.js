import Product from "@/models/Product";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(req) {
    try {
        await connectToDatabase();
        const product = await Product.find({});
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
                data: product,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("GET PRODUCT ERROR:", error);
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