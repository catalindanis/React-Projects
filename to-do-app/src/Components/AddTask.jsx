function AddTask() {
  return (
    <>
      <div className="full-size">
        <div className="align-center custom-container">
           <div className="form-group">
            <h1 className="form-title">Title</h1>
            <input type="text" className="w-100" />
           </div>
           <div className="form-group">
            <h1 className="form-title">Description</h1>
            <input type="text" className="w-100" />
           </div>
           <button type="button" className="btn btn-warning custom-button"><h3>Add task</h3></button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
