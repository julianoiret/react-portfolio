/* eslint-disable jsx-a11y/alt-text */
const Interests = () => {
    return (
        <>
        <div className="container-right">
            <div id="interests">
                <h1>Interests</h1>
                <div className="box-interests">
                    <div className="interest">
                        <img className="logo-interest flex1" src={require(`../images/web-dev.png`)}></img>
                        <p className="title-interest non-responsive-interest">Coding</p>
                        <p className="title-interest responsive-interest">Coding</p>
                    </div>
                    <div className="interest">
                        <img className="logo-interest flex1" src={require(`../images/hiking.png`)}></img>
                        <p className="title-interest">Hiking</p>
                    </div>
                    <div className="interest">
                        <img className="logo-interest logo-crafting flex1" src={require(`../images/crafting.png`)}></img>
                        <p className="title-interest">Crafting</p>
                    </div>
                    <div className="interest">
                        <img className="logo-interest flex1" src={require(`../images/travels.png`)}></img>
                        <p className="title-interest">Travels</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Interests;