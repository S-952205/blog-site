'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";


interface Comment {
  name: string;
  text: string;
}

// Step 1: Creating a functional component for the comment section
const CommentSection = () => {

  // Step 2: Defining state to store user input (name and comment)
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null); // To track which comment is being edited
  const [editedComment, setEditedComment] = useState<string>(""); // To store the edited comment

  // Step 3: Function to handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (comment.trim()) {
        console.log("Submitted Comment: ", comment);
      }

    // Step 4: Add new comment to state
    const newComment = {
      name: name,
      text: comment,
    };
    setComments([...comments, newComment]);

    // Reset input fields
    setName("");
    setComment("");
  };

  // Handle Edit Button Click
  const handleEditClick = (index: number, currentComment: string) => {
    setIsEditing(index);
    setEditedComment(currentComment); // Set current comment in editing input
  };

  // Save Edited Comment
  const handleSaveEdit = (index: number) => {
    const updatedComments = [...comments];
    updatedComments[index].text = editedComment; // Update the comment text
    setComments(updatedComments);
    setIsEditing(null); // Exit editing mode
    setEditedComment("");
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setIsEditing(null); // Exit editing mode
    setEditedComment("");
  };

  return (
    <div>
      {/* Step 5: Displaying comment form */}
      <h2 className="mt-4 text-[24px] text-primary font-semibold">Leave a Comment</h2>
      <form onSubmit={handleCommentSubmit} className="mt-[20px]
       flex flex-col gap-[12px] mb-[20px]">
        <input
          type="text"
          placeholder={comment.trim() === "" ? "Your Name" : ""}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-[10px] border dark:border-gray-600 w-100% rounded-lg focus:outline-none focus:ring-2"
        />
        
        <textarea
          placeholder="Add Comment" rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="p-[10px] border dark:border-gray-600
          resize-none rounded-lg focus:outline-none
          focus:ring-2"
        ></textarea>

        <Button disabled={comment.trim() === ""} type="submit"
         className="w-[20%] text-[19px] p-[20px]">Post</Button>
        {/* <button type="submit">Submit</button> */}
      </form>

      {/* Step 6: Displaying all comments */}
      {/* Comments Section */}
      <div className="my-[40px]">
        <h3 className="text-[19px] underline decoration-primary decoration-[2px]">
          Comments
        </h3>
        <ul
          className="mt-[10px] border rounded-lg p-[20px] flex flex-col gap-[10px] dark:border-gray-600"
        >
          {comments.map((item, index) => (
            <li key={index} className="text-[15px]">
              {/* Check if the current comment is being edited */}
              {isEditing === index ? (
                // Edit Mode
                <div className="flex flex-col gap-2">
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    className="p-[10px] border dark:border-gray-600 resize-none rounded-lg focus:outline-none focus:ring-2"
                  ></textarea>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSaveEdit(index)}
                      className="text-[15px]"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      className="text-[15px]"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // Display Mode
                <div className="flex justify-between items-center">
                  <span>
                    <strong className="text-[15px] capitalize text-blue-500">
                      {item.name}:
                    </strong>{" "}
                    {item.text}
                  </span>
                  <Button
                    onClick={() => handleEditClick(index, item.text)}
                    className="text-[12px] px-[10px] py-[5px]"
                  >
                    Edit
                  </Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CommentSection;
