import React from 'react';
//------------------------------------------------------------------------------
const ReviewForm = ({ handleChange, handleSubmit, review, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" className="input" placeholder="Title"
          onChange={handleChange} value={review.title || ''} />
        {errors.title && <small>{errors.title}</small>}
      </div>
      <div className="field">
        <label htmlFor="subtitle">Subtitle</label>
        <input id="subtitle" name="subtitle" className="input" placeholder="Subtitle"
          onChange={handleChange} value={review.subtitle || ''} />
        {errors.subtitle && <small>{errors.subtitle}</small>}
      </div>
      <div className="field">
        <label htmlFor="content">Content</label>
        <input id="content" name="content" className="textarea" placeholder="Content"
          onChange={handleChange} value={review.content || ''} />
        {errors.content && <small>{errors.content}</small>}
      </div>
      <div className="field">
        <label htmlFor="picture">Picture</label>
        <input id="picture" name="picture" className="input" placeholder="Please post a picture of your experience"
          onChange={handleChange} value={review.picture || ''} />
        {errors.picture && <small>{errors.picture}</small>}
      </div>
      {/*add rating and other fields  */}
      <button className="button is-primary">Submit</button>
    </form>
  );
};
//------------------------------------------------------------------------------
export default ReviewForm;
