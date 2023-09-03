function Task() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-10">
            <h1>Title</h1>
            <div className="w-75 text-break">
              <h5>Description</h5>
            </div>
          </div>
          <div class="d-flex vertical-center">
            <button
              type="button"
              className="btn btn-success text-center custom-size custom-pos"
            >
              <h4 className="text-dark">Y</h4>
            </button>
            <button
              type="button"
              className="btn btn-danger text-center custom-size custom-pos"
            >
              <h4 className="text-dark">N</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
