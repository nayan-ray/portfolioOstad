const blogService = require("../services/blogService");

const getBlogHandler = async (req, res) => {
    try {
      const blogs = await blogService();
      res.json("test")
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = getBlogHandler;