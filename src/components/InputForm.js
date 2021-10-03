function InputForm({ image, typeInput, inputPlaceHolder }) {
  return (
    <div className="mb-6 flex-wrap flex  bg-white rounded-lg">
      <span className="w-1/6 pl-5">
        <img src={image} className="my-3" />
      </span>
      <input
        type={typeInput}
        placeholder={inputPlaceHolder}
        className="rounded-lg outline-none w-5/6"
      />
    </div>
  );
}

export default InputForm;
