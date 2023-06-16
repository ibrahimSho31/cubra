function Collection(){
    return (
        <section className="collection" id="collection">
            <div className="collection-top">
                <h1>Creative Minds</h1>
                <h3>Meet our team trailblazers who have made it their mission to change the fashion game forever.</h3>
            </div>

            <div className="collection-bottom">
                <div className="bomi animate__animated animate__lightSpeedInLeft">
                    <img src="./images/bomi.jpg" className="col-img"/>
                    <h1>Bomi Ol</h1>
                    <h2>CEO & Designer</h2>
                </div>

                <div className="ife animate__animated animate__lightSpeedInRight">
                    <img src="./images/ife.jpg"  className="col-img coll-img"/>
                    <h1>Ife Oye</h1>
                    <h2>Lead stylist</h2>
                </div>

                <div className="kuye animate__animated animate__fadeInBottomLeft">
                    <img src="./images/kuye.jpg" className="col-img coll-img"/>
                    <h1>Tomisin Kuye</h1>
                    <h2>Photographer</h2>
                </div>

                <div className="dubis animate__animated animate__fadeInBottomRight">
                    <img src="./images/dubis.jpg" className="col-img coll-img"/>
                    <h1>Dubis</h1>
                    <h2>Head of Marketing</h2>
                </div>
            </div>
        </section>
    )
}

export default Collection