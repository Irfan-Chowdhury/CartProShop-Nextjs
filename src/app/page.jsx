import { getHomeData } from "@/server/home";

export default async function Home() {
    
    const homeData = await getHomeData();
    
    
    return (
        <div className="banner-area v3">
            <div className="container">
                <div className="single-banner-item style2">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="banner-slider">
                            {homeData.sliders.map((slider, key) => (
                                <div className="item" key={key}> {/* Always add a unique key when mapping */}
                                    {slider?.slider_image && (
                                        <div
                                            className="img-fill"
                                            style={{
                                                backgroundImage: `url(${slider?.slider_image || 'https://dummyimage.com/1269x300/e5e8ec/e5e8ec&text=Slider'})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                                <div className={`info ${slider.text_alignment === "right" ? "right" : ""}`} >
                                                
                                                <div>
                                                    <h3 style={{ color: slider?.text_color || "#ffffff" }}>
                                                        {slider?.slider_title}
                                                    </h3>

                                                    <h5 style={{ color: slider?.text_color || "#ffffff" }}>
                                                        {slider?.slider_subtitle}
                                                    </h5>

                                                    {slider?.type === "category" ? (
                                                        <a className="button style1 md" href={`/category_wise_products/${slider?.slider_slug}`}>
                                                            Read More
                                                        </a>
                                                    ) : slider?.type === "url" ? (
                                                        <a className="button style1 md" href={slider?.url}>
                                                            Read More
                                                        </a>
                                                    ) : null}


                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            </div>
                        </div>
                        <div className="col-md-4">
                            {homeData.sliderBanners.map((sliderBanner, key) => (
                                <a 
                                    key={key} 
                                    href={sliderBanner.action_url} 
                                    target={sliderBanner.new_window === "1" ? "_blank" : ""}
                                    rel={sliderBanner.new_window === "1" ? "noopener noreferrer" : ""}
                                >
                                    <div 
                                        className="slider-banner" 
                                        style={{
                                            backgroundImage: `url(${sliderBanner.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        <h4 className="text-dark">{sliderBanner.title}</h4>
                                    </div>
                                </a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
