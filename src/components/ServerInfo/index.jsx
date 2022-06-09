const ServerInfo = (props) => {
    const { server, inverted } = props;
    return (
        <div className="server-info-component p-12 xl:p-32 xl:flex">
            <div className={`server-info-inner xl:w-1/2 ${inverted ? "xl:order-2" : ""}`}>
                <div className="server-title text-center">
                    <h2 className="server-title text-vrising-white text-4xl uppercase">{server.name}</h2>
                    <p className="server-description text-vrising-white text-2xl mt-6">{server.description}</p>
                </div>
            </div>
            <div className={`server-config xl:w-1/2 ${inverted ? "xl:order-1" : ""}`}>
                <div className="server-stats xl:flex xl:justify-center mt-5 xl:mt-0">
                    <h3 className="text-vrising-red uppercase text-center text-2xl mr-2">Full Loot:</h3>
                    <h4 className="text-vrising-white text-center text-2xl">{server.config.fullLoot ? "Sim" : "Não"}</h4>
                </div>
                <div className="server-stats xl:flex xl:justify-center mt-4">
                    <h3 className="text-vrising-red uppercase text-center text-2xl mr-2">Tamanho do clã:</h3>
                    <h4 className="text-vrising-white text-center text-2xl">{server.config.clanSize}</h4>
                </div>
                <div className="server-stats xl:flex xl:justify-center mt-4">
                    <h3 className="text-vrising-red uppercase text-center text-2xl mr-2">Horario Raid:</h3>
                    <h4 className="text-vrising-white text-center text-2xl">{server.config.RaidTimeWeekday}</h4>
                </div>
            </div>
        </div>
    )
}

export default ServerInfo;