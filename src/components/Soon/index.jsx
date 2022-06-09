import Button from "../Button";

const flareImg = "./titleFlare.png";

const Soon = () => {
  return (
    <div className="soon-component-inner flex justify-center pt-24 items-center flex-col">
      <div className="header-content">
        <h1 className="text-vrising-red text-3xl uppercase text-center">
          Você está preparado?
        </h1>
        <div className="flex justify-center">
          <img src={flareImg} alt="V Rising Servidor A Mascara" />
        </div>
      </div>
      <div className="main-content mt-20">
        <div className="info xl:w-1/2">
          <h2 className="text-vrising-white uppercase text-xl text-center">
            Servidores para a sua aventura!
          </h2>
          <p className="text-vrising-white text-lg text-center mt-12">
            Os servidores da Mascara estão prontos para a sua aventura começar!
            Logo com mais novidades aqui no site e no Discord
          </p>
          <div className="server-list mt-12 xl:flex xl:flex-wrap xl:justify-center">
            <div className="server mt-12 xl:w-1/2">
              <h3 className="text-vrising-red uppercase text-center text-3xl">
                Servidor 1v1
              </h3>
              <p className="text-vrising-white text-lg text-center">
                131.196.197.52:27015
              </p>
            </div>
            <div className="server mt-12 xl:w-1/2">
              <h3 className="text-vrising-red uppercase text-center text-3xl">
                Servidor 2v2
              </h3>
              <p className="text-vrising-white text-lg text-center">
                131.196.197.18:9876
              </p>
            </div>
            <div className="server mt-12 xl:w-1/2">
              <h3 className="text-vrising-red uppercase text-center text-3xl">
                Servidor 4v4 (Competitivo)
              </h3>
              <p className="text-vrising-white text-lg text-center">
                131.196.197.84:9876
              </p>
            </div>
          </div>
          <div className="end-area mt-10">
            <div className="discord-cta flex justify-center">
              <Button
                text="ENTRE NO DISCORD"
                glow={true}
                link="https://discord.gg/5xNB75kEFr"
              />
            </div>
          </div>
        </div>
        <div className="illustration xl:w-1/2"></div>
      </div>
    </div>
  );
};

export default Soon;
