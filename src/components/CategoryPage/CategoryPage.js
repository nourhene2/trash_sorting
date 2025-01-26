import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { name } = useParams(); // Récupère le nom de la catégorie depuis l'URL

  // Données spécifiques pour chaque catégorie
  const categoryDetails = {
    cardboard: {
      title: "Cardboard",
      description:
        "Recyclable cardboard materials can be turned into new boxes or paper products.",
      benefits: "Recycling cardboard saves trees and reduces waste in landfills.",
      tips: "Flatten cardboard boxes to save space in your recycling bin.",
    },
    glass: {
      title: "Glass",
      description:
        "Recyclable glass can be melted and reshaped indefinitely without loss of quality.",
      benefits: "Recycling glass saves energy and reduces greenhouse gas emissions.",
      tips: "Separate colored glass from clear glass if required by your local recycling program.",
    },
    metal: {
      title: "Metal",
      description:
        "Recyclable metals include aluminum and steel, which can be reused repeatedly.",
      benefits: "Recycling metal reduces mining and saves significant energy.",
      tips: "Crush aluminum cans to save space in your recycling bin.",
    },
    paper: {
      title: "Paper",
      description:
        "Recyclable paper can be turned into new sheets or cardboard products.",
      benefits: "Recycling paper saves trees and reduces water and air pollution.",
      tips: "Remove any staples or paper clips before recycling paper.",
    },
    plastic: {
      title: "Plastic",
      description:
        "Recyclable plastics can be repurposed into a variety of new products.",
      benefits: "Recycling plastic reduces oil usage and prevents ocean pollution.",
      tips: "Focus on recycling PET (#1) and HDPE (#2) plastics, which are widely accepted.",
    },
    trash: {
      title: "Trash",
      description:
        "Non-recyclable waste should be disposed of properly to minimize environmental harm.",
      benefits: "Proper disposal prevents toxins from polluting the environment.",
      tips: "Separate recyclables from trash to make the recycling process easier.",
    },
  };

  const category = categoryDetails[name.toLowerCase()];

  // Gestion des commentaires
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!category) {
    return <h2>Category not found!</h2>;
  }

  return (
    <div className="category-page">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <h3>Environmental Benefits</h3>
      <p>{category.benefits}</p>
      <h3>Recycling Tips</h3>
      <p>{category.tips}</p>

      {/* Section des commentaires */}
      <section className="comments-section">
        <h3>Share Your Recycling Experience</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="comment-input"
        />
        <button onClick={handleAddComment} className="add-comment-button">
          Add Comment
        </button>
        <div className="comments-list">
          <h4>Comments:</h4>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
