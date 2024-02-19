/* eslint-disable react/prop-types */
export default function Opiniones({ nombre, titulo, opinion, estrellas, secundario }) {
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i > estrellas) {
        stars.push(<img src="icons/starregular.svg" alt="Estrella" key={`estrella${i}`} />);
      } else {
        stars.push(<img src="icons/starsolid.svg" alt="Estrella" key={`estrella${i}`} />);
      }
    }
    return stars;
  };

  return (
    <>
      {secundario ? (
        <div className="w-[300px] h-[300px] text-03 rounded-md gradiente flex flex-col justify-center gap-2 items-center">
          <div className="flex items-center justify-center bg-50 w-20 h-20 rounded-full">
            <img src="icons/userregular.svg" className="w-6" alt="Usuario" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-extrabold text-2xl">{nombre}</h3>
            <h4 className="font-semibold text-xl">{titulo}</h4>
            <p className="font-medium text-sm text-center">{opinion}</p>
            <div className="flex">{renderStars()}</div>
          </div>
        </div>
      ) : (
        <div className="w-[350px] h-[350px] text-03 rounded-md gradiente flex flex-col justify-center gap-4 items-center">
          <div className="flex items-center justify-center bg-50 w-20 h-20 rounded-full">
            <img src="icons/userregular.svg" className="w-6" alt="Usuario" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <h3 className="font-extrabold text-2xl">{nombre}</h3>
            <h4 className="font-semibold text-xl">{titulo}</h4>
            <p className="font-medium text-sm text-center">{opinion}</p>
            <div className="flex">{renderStars()}</div>
          </div>
        </div>
      )}
    </>
  );
}
