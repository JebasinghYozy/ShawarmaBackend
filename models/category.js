const mongoose = require ( "mongoose" )

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Category", categorySchema);

// const Category = mongoose.model("Category", categorySchema)

// export default Category
