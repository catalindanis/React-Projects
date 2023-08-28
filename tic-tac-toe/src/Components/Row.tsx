import Box from "./Box";

function Row(props: { id: string[]}) {
  return (
    <div className="container d-flex justify-content-center">
      <Box id={props.id[0]}></Box>
      <Box id={props.id[1]}></Box>
      <Box id={props.id[2]}></Box>
    </div>
  );
}

export default Row;
