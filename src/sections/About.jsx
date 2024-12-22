import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("jbdala.0131@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid1.png"} alt={"grid-1"}
                             className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Hi, I'm JP</p>
                            <p className={"grid-subtext"}>
                                With 6 years of experiencee, I have honed my skills in frontend and backend development,
                                with a focus on React and PHP Laravel.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid2.png"} alt={"grid-2"}
                             className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>
                                I specialize in Javascript and PHP with a focus on React and Laravel ecosystems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                //globeImageUrl="//unpkg.com/threee-globe/example/img/earth-night.jpg"
                                labelsData={[{
                                    lat: 1.3521, lng: 103.8198,
                                    text: "I'm Here",
                                    color: 'white',
                                }, {
                                    lat: 12.8797, lng: 121.7740,
                                    text: "I'm Here",
                                    color: 'white',
                                }]}
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>I work remotely across most timezones.</p>
                            <p className={"grid-subtext"}>
                                I'm based in Singapore, with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid3.png"} alt={"grid-3"}
                             className={"w-full sm:h-[266px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>My Passion for Coding</p>
                            <p className={"grid-subtext"}>
                                I love solving problems and building tthings through code. Coding isn't just my
                                profession-it's my passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid4.png"} alt={"grid-4"}
                             className={"w-full md:h-[126px] sm:h-[266px] h-fit object-cover sm:object-top"}/>
                        <div className={"space-y-2"}>
                            <p className={"grid-headtext text-center"}>Contact me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt={"copy"}/>
                                <p className={"grid-subtext"}>jbdala.0131@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
