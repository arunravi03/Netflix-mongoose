// Using Node.js 'require'
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Schema.ObjectId;

// defining a schema
const defineSchema = () => {
  const userSchema = new Mongoose.Schema(
    {
      _id: { type: ObjectId },
      userName: { type: String, required: true },
      userEmail: { type: String, required: true },
      userContact: { type: String },

      // Array of subdocuments
      userSubscriptions: [
        {
          subName: { type: String },
          subPlans: { type: String },
          price: { type: String },
        },
      ],

      // Single subdocuments
      planExpiration: {
        started: { type: Date },
        ended: { type: Date },
      },
    },
    { timestamps: {}, strict: false }
  );

  // Defining a model
  const UserModel = Mongoose.model("User", userSchema);

  //Instance of the model
  const userRecord = new UserModel(
    {
      _id: ObjectId,
      userName: "Arun",
      userEmail: "ak03@gmail.com",
      usercontact: "9987654321",

      userSubscriptions: [
        {
          subName: "John",
          subPlans: "oneMonth",
          price: "199",
        },
        {
          subName: "Peter",
          subPlans: "threeMonths",
          price: "299",
        },
        {
          subName: "Doe",
          subPlans: "sixMonths",
          price: "499",
        },
      ],

      planExpiration: {
        started: new Date(),
        ended: new Date(),
      },
    },
    {
      _id: ObjectId,
      userName: "Prakash",
      userEmail: "PK03@gmail.com",
      usercontact: "9987654321",

      userSubscriptions: [
        {
          subName: "John",
          subPlans: "oneMonth",
          price: "199",
        },
        {
          subName: "Peter",
          subPlans: "threeMonths",
          price: "299",
        },
        {
          subName: "Doe",
          subPlans: "sixMonths",
          price: "499",
        },
      ],

      planExpiration: {
        started: new Date(),
        ended: new Date(),
      },
    }
  );
  //   userRecord.userName = "Arun";
  //   userRecord.userEmail = "ak03@gmail.com";
  //   userRecord.userContact = "9987654321";

  userRecord.save((err, data) => {
    console.log({ err, data });
  });
};

const initConnection = async () => {
  await Mongoose.connect("mongodb://localhost/vss-Netflix-demo");

  defineSchema();
};

initConnection();
