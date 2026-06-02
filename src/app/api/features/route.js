import Feature from "@/models/Feature";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async () => {
  try {
    console.log("Getting features");

    await connectToDatabase();

    const feature = await Feature.find({
      order: { $exists: true },
    }).sort({ order: 1 });

    return NextResponse.json({
      success: true,
      data: feature,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
};