function Task() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-10">
            <div className="w-50 text-break">
              <h1>Title</h1>
            </div>
            <div className="w-75 text-break">
              <h5>Description</h5>
            </div>
          </div>
          <div class="d-flex vertical-center">
            <button
              type="button"
              className="btn btn-success custom-size custom-pos"
            >
              <h1 className="text-dark">
                <b>✓</b>
              </h1>
            </button>
            <button
              type="button"
              className="btn btn-danger custom-size custom-pos"
            >
              <h1 className="text-dark">X</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
