const router = require("express").Router();
const User = require("../dbSchema/models/user");
const Post = require("../dbSchema/models/post");

//CREATE POST
router.post("/", verifyToken, async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json("there is an error");
  }
});

//UPDATE POST
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json(updatedPost);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        return res.status(200).json("Post has been deleted...");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/deletepost/:postId", verifyToken, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            return res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/mypost", (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((mypost) => {
      return res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json(posts);
    uuidv4();
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/allpost", verifyToken, (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      return res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

//update image
router.put("/updatepic", verifyToken, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { pic: req.body.pic } },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: "pic canot post" });
      }
      return res.json(result);
    }
  );
});

//VERIFY TOKEN
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus("error");
  }
}

module.exports = router;
