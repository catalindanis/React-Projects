import Column from "./Column";

function Row() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </div>
    </>
  );
}

export default Row;
