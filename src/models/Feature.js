import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema(
  {
    name : {
        type : String,
        trim : true
    },
    description : {
        type : String,
    },
    image : {
        type : String,
    },
    badge : {
        type : String,
    },
    size : {
        type : String,
    },
    order : {
        type : Number,
    }
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Feature ||
  mongoose.model("Feature", FeatureSchema);

  