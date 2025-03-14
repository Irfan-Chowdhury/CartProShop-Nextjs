import { getHomeData } from "@/server/home";
import Image from "next/image";

export default async function Home() {

    const homeData = await getHomeData();
    const CURRENCY_FORMAT = process.env.CURRENCY_FORMAT;
    const SHOW_CURRENCY_SYMBOL = process.env.SHOW_CURRENCY_SYMBOL;
    const FORMAT_NUMBER = process.env.FORMAT_NUMBER;


    return (
        <>
            <div className="banner-area v3">
                <div className="container">
                    <div className="single-banner-item style2">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="banner-slider">
                                    {homeData.sliders.map((slider, key) => (
                                        <div className="item" key={key}>
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

            {/* Product area starts */}
            <section className="product-tab-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="nav nav-tabs product-details-tab" id="lionTab" role="tablist">
                                {homeData.productDetailsTab.productTabs.map((item, key) => (
                                    <li className="nav-item" key={key}>
                                        <a className={key === 0 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" href={item.key} role="tab" aria-selected="true">{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="product-navigation">
                                <div className="product-button-next v1"><i className="ti-angle-right"></i></div>
                                <div className="product-button-prev v1"><i className="ti-angle-left"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content mt-3" id="lionTabContent">
                                {homeData.productDetailsTab.productTabs.map((item, key) => (
                                    <div key={key} className={`tab-pane fade ${key === 0 ? "show active" : ""}`} id={item.key} role="tabpanel" aria-labelledby="all-tab">
                                        <div class="product-slider-wrapper swiper-container">
                                            <div class="swiper-wrapper">
                                                {item.categoryWithProducts.products.map((product, index) => (
                                                    <div class="swiper-slide">
                                                        <form key={index} action="/" className="addToCart" method="post">
                                                            <input type="hidden" name="product_id" value={product.productId} />
                                                            <input type="hidden" name="product_slug" value={product.slug} />
                                                            <input type="hidden" name="category_id" value={item.categoryWithProducts.categoryId} />
                                                            <input type="hidden" name="qty" value="1" />

                                                                <div className="single-product-wrapper">
                                                                    <div className="single-product-item">
                                                                        <a className="product-name" href={`${product.slug}/${item.categoryWithProducts.categoryId}`}>
                                                                            <Image
                                                                                alt="Product Image"
                                                                                src={product.mediumImage}
                                                                                className="lazy"
                                                                                width={720}
                                                                                height={660}
                                                                            />
                                                                        </a>

                                                                        {product.manageStock === 1 && product.qty === 0 || product.inStock === 0 ? (
                                                                            <div className="product-promo-text style1 bg-danger">
                                                                                <span>Stock Out</span>
                                                                            </div>
                                                                        ) : new Date() <= new Date(product.newTo) ? (
                                                                            <div className="product-promo-text style1">
                                                                                <span>New</span>
                                                                            </div>
                                                                        ) : null}

                                                                        <div className="product-overlay">
                                                                            <a href="#" data-bs-toggle="modal" data-bs-target={`#quickshopTrend_${product.slug}`}> <span className="ti-zoom-in" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view"></span></a>
                                                                            <a>
                                                                                <span className="ti-heart add_to_wishlist"
                                                                                    data-product_id={product.slug}
                                                                                    data-product_slug={product.slug}
                                                                                    data-category_id={item.categoryWithProducts.categoryId}
                                                                                    data-qty="1"
                                                                                    data-bs-toggle="tooltip"
                                                                                    data-bs-placement="top"
                                                                                    title="Add to wishlist">
                                                                                </span>
                                                                            </a>
                                                                        </div>

                                                                        <div className="product-details">
                                                                            <a className="product-name" href={`${product.slug}/${item.categoryWithProducts.categoryId}`}>
                                                                                {product.name}
                                                                            </a>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <div>
                                                                                <ul className="product-rating">
                                                                                    {[...Array(5)].map((_, i) => (
                                                                                        <li key={i}>
                                                                                            <i className={i < Math.round(product.avgRating) ? "las la-star" : "lar la-star"}></i>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                                <div className="product-price">
                                                                                    {product.specialPrice !== null && product.specialPrice > 0 && product.specialPrice < product.price ? (
                                                                                        <>
                                                                                            <span className="old-price">
                                                                                                {CURRENCY_FORMAT === 'suffix' ?
                                                                                                    `${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                                                    `${SHOW_CURRENCY_SYMBOL} ${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                                                }
                                                                                            </span>
                                                                                            <span className="promo-price">
                                                                                                {CURRENCY_FORMAT === 'suffix' ?
                                                                                                    `${(product.specialPrice * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                                                    `${SHOW_CURRENCY_SYMBOL} ${(product.specialPrice * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                                                }
                                                                                            </span>
                                                                                        </>
                                                                                    ) : (
                                                                                        <span className="promo-price">
                                                                                            {CURRENCY_FORMAT === 'suffix' ?
                                                                                                `${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                                                `${SHOW_CURRENCY_SYMBOL} ${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                                            }
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                {(product.manageStock == 1 && product.qty == 0) || product.inStock == 0 ? (
                                                                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" data-bs-placement="top" title="Disabled"><button className="btn button style2 sm" disabled><i className="las la-cart-plus"></i></button></span>
                                                                                ) : (
                                                                                    <button className="button style2 sm" type="submit" data-bs-toggle="tooltip" data-bs-placement="top"><i className="las la-cart-plus"></i></button>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </form>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Trending Start */}
            <section className="product-tab-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb-3">
                                <h3>Trending</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product-grid">
                            {homeData.trendProducts.map((product, key) => (
                                product.isActive && (
                                    <form key={key} action="/" className="addToCart" method="post">
                                        <input type="hidden" name="product_id" value={product.productId} />
                                        <input type="hidden" name="product_slug" value={product.slug} />
                                        <input type="hidden" name="category_id" value={product.categoryId} />
                                        <input type="hidden" name="qty" value="1" />

                                        <div className="product-grid-item">
                                            <div className="single-product-wrapper">
                                                <div className="single-product-item">
                                                    <a className="product-name" href={`${product.slug}/${product.categoryId}`}>
                                                        <Image
                                                            alt="Product Image"
                                                            src={product.mediumImage}
                                                            className="lazy"
                                                            width={720}
                                                            height={660}
                                                        />
                                                    </a>

                                                    {product.manageStock === 1 && product.qty === 0 || product.inStock === 0 ? (
                                                        <div className="product-promo-text style1 bg-danger">
                                                            <span>Stock Out</span>
                                                        </div>
                                                    ) : new Date() <= new Date(product.newTo) ? (
                                                        <div className="product-promo-text style1">
                                                            <span>New</span>
                                                        </div>
                                                    ) : null}

                                                    <div className="product-overlay">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target={`#quickshopTrend_${product.slug}`}> <span className="ti-zoom-in" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view"></span></a>
                                                        <a>
                                                            <span className="ti-heart add_to_wishlist"
                                                                data-product_id={product.slug}
                                                                data-product_slug={product.slug}
                                                                data-category_id={product.categoryId}
                                                                data-qty="1"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title="Add to wishlist">
                                                            </span>
                                                        </a>
                                                    </div>

                                                    <div className="product-details">
                                                        <a className="product-name" href={`${product.slug}/${product.categoryId}`}>
                                                            {product.name}
                                                        </a>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <ul className="product-rating">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <li key={i}>
                                                                        <i className={i < Math.round(product.avgRating) ? "las la-star" : "lar la-star"}></i>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="product-price">
                                                                {product.specialPrice !== null && product.specialPrice > 0 && product.specialPrice < product.price ? (
                                                                    <>
                                                                        <span className="old-price">
                                                                            {CURRENCY_FORMAT === 'suffix' ?
                                                                                `${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                                `${SHOW_CURRENCY_SYMBOL} ${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                            }
                                                                        </span>
                                                                        <span className="promo-price">
                                                                            {CURRENCY_FORMAT === 'suffix' ?
                                                                                `${(product.specialPrice * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                                `${SHOW_CURRENCY_SYMBOL} ${(product.specialPrice * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                            }
                                                                        </span>
                                                                    </>
                                                                ) : (
                                                                    <span className="promo-price">
                                                                        {CURRENCY_FORMAT === 'suffix' ?
                                                                            `${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)} ${SHOW_CURRENCY_SYMBOL}` :
                                                                            `${SHOW_CURRENCY_SYMBOL} ${(product.price * homeData.changeCurrencyRate).toFixed(FORMAT_NUMBER)}`
                                                                        }
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {(product.manageStock == 1 && product.qty == 0) || product.inStock == 0 ? (
                                                                <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" data-bs-placement="top" title="Disabled"><button className="btn button style2 sm" disabled><i className="las la-cart-plus"></i></button></span>
                                                            ) : (
                                                                <button className="button style2 sm" type="submit" data-bs-toggle="tooltip" data-bs-placement="top"><i className="las la-cart-plus"></i></button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {homeData.settings.oneColumnBanner.oneColumnBannerEnabled === '1' && (
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <a
                                    href={homeData.settings.oneColumnBanner.oneColumnBannerCallToActionURL}
                                    target={homeData.settings.oneColumnBanner.storefrontOneColumnBannerOpenInNewWindow ? "_blank" : ""}
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={homeData.storefrontImages.oneColumnBannerImage}
                                        alt="Banner"
                                        className="lazy"
                                        layout="responsive"
                                        width={1200} // Set appropriate width
                                        height={400} // Set appropriate height
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {homeData.settings.storefrontFeature.sectionStatus === '1' && (
                <div className="hero-promo-area v1">
                    <div className="container">
                        <div className="row">
                            {homeData.settings.storefrontFeature.features.map((feature, index) => (
                                <div key={index} className="col-md-3 col-6 single-promo-item style2 text-center">
                                    <div className="promo-icon style2">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <div className="promo-content style2">
                                        <h5>{feature.title}</h5>
                                        <span>{feature.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {homeData.homeFooterDescription.is_active && (
                <section className="mb-3">
                    <div className="container">
                        <span dangerouslySetInnerHTML={{ __html: homeData.homeFooterDescription.description }}></span>
                    </div>
                </section>
            )}
        </>


    );
}
