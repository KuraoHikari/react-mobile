function ButtonSign({ name }) {
  return (
    <div className="text-center bg-green-500 px-32 py-2 rounded-lg hover:bg-green-600">
      <a
        href=""
        className="text-center text-white text-lg outline-none border-none "
      >
        {name}
      </a>
    </div>
  );
}

export default ButtonSign;
