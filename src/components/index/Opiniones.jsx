// eslint-disable-next-line react/prop-types
export default function Opiniones({ nombre, titulo, opinion, estrellas }) {
  // const renderStars = () => {
  //   let stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     stars.push(<i className="fa-solid fa-star w-4 h-4"></i>);
  //   }
  //   console.log(stars);
  //   return stars;
  // };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="w-[350px] h-[350px] rounded-md gradiente">
        <img src="icons/starsolid.svg" alt="" className="filter brightness-110 contrast-100 saturate-150 hue-rotate-15" />
      </div>
    </main>
  );
}
