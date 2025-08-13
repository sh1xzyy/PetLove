// import Container from "../../components/common/Container/Container";

// const HomePage = () => {
//   return (
//     <section>
//       <Container>
//         <h1 className="text-[200px]">HOME</h1>
//       </Container>
//     </section>
//   );
// };

// export default HomePage;
import Container from "../../components/common/Container/Container";

const HomePage = () => {
  return (
    <section>
      <Container type="common">
        <div className="flex flex-col">
          <div className="flex flex-row items-end justify-center px-[32px] pb-[32px] pt-[112px]">
            <h1>
              Take good <span>care</span> of your small pets
            </h1>
            <p>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
          {/* <img src="" alt="" /> */}
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
