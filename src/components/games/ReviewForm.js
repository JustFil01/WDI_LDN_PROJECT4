import React from 'react';
//------------------------------------------------------------------------------
const ReviewForm = ({ handleChange, handleSubmit, review, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" className="input" placeholder="Title"
          onChange={handleChange} value={review.title || ''} />
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div className="field">
        <label htmlFor="subtitle">Subtitle</label>
        <input id="subtitle" name="subtitle" className="input" placeholder="Subtitle"
          onChange={handleChange} value={review.subtitle || ''} />
        {errors.image && <small>{errors.image}</small>}
      </div>
      <div className="field">
        <label htmlFor="content">Content</label>
        <input id="content" name="content" className="input" placeholder="Content"
          onChange={handleChange} value={review.content || ''} />
        {errors.image && <small>{errors.image}</small>}
      </div>
      {/*add rating and other fields  */}
      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};
//------------------------------------------------------------------------------
export default ReviewForm;
