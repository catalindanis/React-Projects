function Task() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-11">
            <h1>Title</h1>
            <h5>Description</h5>
          </div>
          <div class="col-1">
            <button type="button" className="btn btn-success">
              Y
            </button>
            <button type="button" className="btn btn-danger">
              N
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
