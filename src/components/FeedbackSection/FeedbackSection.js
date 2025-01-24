import React, { useState } from "react";

const FeedbackSection = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (input.trim()) {
      setComments([...comments, input]); // Ajouter un nouveau commentaire
      setInput(""); // Réinitialiser le champ
    }
  };

  return (
    <div className="feedback-container">
      <h2>Vos commentaires</h2>
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Laissez un commentaire ici..."
        className="textarea"
      />
      <button onClick={handleAddComment} className="button">
        Soumettre
      </button>
    </div>
  );
};

export default FeedbackSection;
