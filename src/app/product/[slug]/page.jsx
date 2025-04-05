import MetaTags from "@/app/components/MetaTags";
import { getProductDetails } from "@/server/product-details";
import Image from "next/image";
import Link from "next/link";
import CurrencyFormat from "../../components/CurrencyFormat";


export default async function ProductDetailsPage({params}) {

    const result = await getProductDetails(params.slug);
    const product =  result.productDetails;
    const category =  result.productDetails?.category;
    const reviews =  result.reviews;
    const socialShareLinks =  result.socialShareLinks;
    const categoryWiseProducts = result.categoryWiseProducts?.products;

    const generalSettings = result.generalSettings;
    const currencyFormat = result.generalSettings.currencyFormat;
    const currencySymbol = result.generalSettings.currencySymbol;
    const formatNumber = result.generalSettings.formatNumber;
    const changeCurrencyRate = result.generalSettings.changeCurrencyRate;


    // console.log('categoryWiseProducts : ', categoryWiseProducts); 

    
    const meta = {
        title: product.basic.name,
        description: product.basic.description,
        ogTitle: product.basic?.meta_title,
        ogDescription: product.basic?.meta_description,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/product/${product.basic.slug}`,
        image: `${process.env.NEXT_PUBLIC_APP_URL}/${product.imageCollection.baseImage?.image}`,
        type: "product"
    };

    return (
        <>
            {/* Pass meta data to layout */}
            <MetaTags meta={meta} />

            <div>
            {/* Product details section starts */}
                <section className="product-details-section">
                    <div className="container">
                        <div className="breadcrumb-section">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li className="active">
                                    <Link className="product-name" href={`product/${product.slug}`}> 
                                        {product.category.name}
                                    </Link>
                                </li>
                                <li>
                                    {product.basic?.name}
                                </li>
                            </ul>
                        </div>

                        

                        <div className="row">
                            <div className="col-md-6 mar-bot-30">
                                <div className="slider-wrapper">
                                    <div className="slider-nav">
                                        {product.imageCollection.baseImage?.image && (
                                            <div className="slider-nav__item">
                                                <Image 
                                                    src={product.imageCollection.baseImage.image} 
                                                    width={720}
                                                    height={660}
                                                    alt="Product Image" 
                                                />
                                            </div>
                                        )}

                                        {product.imageCollection.additionalImage?.length > 0 && product.imageCollection.additionalImage.map((item, index) => (
                                            <div className="slider-nav__item" key={index}>
                                                <Image 
                                                    src={item.image_small} 
                                                    width={720}
                                                    height={660}
                                                    alt="Product Image" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="slider-for">
                                        {product.imageCollection.baseImage?.image && (
                                            <div className="slider-for__item ex1">
                                                <Image 
                                                    className="lazy"
                                                    src={product.imageCollection.baseImage.image} 
                                                    width={720}
                                                    height={660}
                                                    alt="Product Image" 
                                                />
                                            </div>
                                            )}

                                            {product.imageCollection.additionalImage?.map((item, index) => (
                                                <div className="slider-for__item ex1" key={index}>
                                                    <Image 
                                                        className="lazy" 
                                                        src={item.image} 
                                                        width={720}
                                                        height={660}
                                                        alt="Product Image" 
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <form className="mb-3" id="productAddToCartSingle" action="" method="POST">
                                    <input type="hidden" name="product_id" value={product.basic?.id} />
                                    <input type="hidden" name="product_slug" value={product.basic?.slug} />
                                    <input type="hidden" name="category_id" value={product.category?.name} />
                                    <input type="hidden" name="value_ids" className="value_ids" id="value_ids" />
                                    <input type="hidden" name="value_names" className="value_names" id="value_names" />
                                    <input type="hidden" name="attribute_names" className="attribute_names" id="attribute_names" />

                                    <div className="item-details">
                                        <a className="item-category" href="/">{product.category?.name}</a>
                                        <h3 className="item-name">{product.basic?.name}</h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="item-brand">Brand: <a href="">{product.brand?.name}</a></div>
                                            <div className="item-review">
                                                <ul className="p-0 m-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <i className={i < Math.round(product.basic?.avg_rating) ? "las la-star" : "lar la-star"}></i>
                                                    </li>
                                                ))}
                                                </ul>
                                                &nbsp; <span> (Reviews: {reviews.length})</span>
                                            </div>
                                            {product.basic?.sku && (
                                                <div className="item-sku">SKU : {product.sku}</div>
                                            )}
                                        </div>
                                        <hr/>

                                        {product.basic?.special_price && product.basic?.special_price > 0 && product.basic?.special_price < product.basic?.price ? (
                                            <>
                                                <div className="item-price">
                                                    <CurrencyFormat priceValue={product.basic.special_price} generalSettings={generalSettings}></CurrencyFormat>
                                                </div>
                                                <div className="old-price">
                                                    <del>
                                                        <CurrencyFormat priceValue={product.basic.price} generalSettings={generalSettings}></CurrencyFormat>
                                                    </del>
                                                </div>
                                            </>

                                        ): (
                                            <div className="item-price">
                                                <CurrencyFormat priceValue={product.basic.price} generalSettings={generalSettings}></CurrencyFormat>
                                            </div>

                                        )}

                                        {product.basic?.short_description && (
                                            <>
                                                <hr/>
                                                <div className="item-short-description">
                                                    <p>{product.basic.short_description}</p>
                                                </div>
                                            </>
                                        )} 
                                        
                                        <hr/>

                                        {product.attributes.map((attribute, index) => (
                                            <div className="item-variant" key={index}>
                                                <span>{attribute.name} :</span>
                                                <ul className="product-variant size-opt p-0 mt-1">
                                                    {attribute.attribute_values.map((value, index) => (
                                                        <li className="attribute_value" key={index}>
                                                            <span>{value.name}</span>
                                                            <input type="hidden" name="value_id[]" value={value.id} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        <div className="item-options">
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus">
                                                    <span className="ti-minus"></span>
                                                </button>
                                            </span>
                                            {(product.manage_stock === 1 && product.qty === 0) || product.in_stock === 0 ? (
                                                <input type="number" name="qty" className="input-number" defaultValue="1" min="1" max="0" />
                                            ) : (
                                                <input type="number" name="qty" className="input-number" defaultValue="1" min="1" max={product.qty} />
                                            )}
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus">
                                                    <span className="ti-plus"></span>
                                                </button>
                                            </span>
                                        </div>

                                        {(product.manage_stock === 1 && product.qty === 0) || product.in_stock === 0 ? (
                                            <button disabled data-toggle="tooltip" data-placement="top" title="Out of Stock" className="button button-icon style1"><span><i className="las la-shopping-cart"></i> <span>Add to Cart</span></span></button>
                                        ) : (
                                            <button type="submit" className="button button-icon style1"><span><i className="las la-shopping-cart"></i> <span>Add to Cart</span></span></button>
                                        )}
                                        <a><div className="button button-icon style4 sm" data-product_id={product.basic.id} data-product_slug={product.basic.slug} data-category_id={category.id} data-qty="1"><span><i className="ti-heart"></i> <span>Add to wishlist</span></span></div></a>
                            
                                        <hr/>
                                        <div className="item-share mt-3" id="social-links"><span>Share</span>
                                            <ul className="footer-social d-inline pad-left-15">
                                                <li><a href={socialShareLinks.facebook}><i className="ti-facebook"></i></a></li>
                                                <li><a href={socialShareLinks.twitter}><i className="ti-twitter"></i></a></li>
                                                <li><a href={socialShareLinks.linkedin}><i className="ti-linkedin"></i></a></li>
                                                <li><a href={socialShareLinks.reddit}><i className="ti-reddit"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            

                {/* Product Description and Reviews */}
                <section className="content-wrapper-section pt-0 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 tabs style2">
                                <ul className="nav nav-tabs mar-top-30 product-details-tab justify-content-center" id="lionTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="all-tab" data-bs-toggle="tab" href="#all" role="tab" aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="graphic-design-tab" data-bs-toggle="tab" href="#comments" role="tab" aria-selected="false">Reviews <span className="text-grey"> ({reviews.length})</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content product-description" id="lionTabContent">
                        <div className="container">
                            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                <div className="desc-intro">
                                    <span dangerouslySetInnerHTML={{ __html: product.basic?.description }}></span>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="comments" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="h5"> {reviews.length} Reviews</h3>
                                        <div className="item-reviews">
                                        {reviews.map((item, index) => (
                                            <div className="row mar-tb-30 mt-3" key={index}>
                                                <div className="col-md-2">
                                                <div className="reviewer-img">
                                                    {item.image === null ? (
                                                    <img
                                                        className="lazy"
                                                        src={`${baseUrl}/public/images/user_default_image.jpg`}
                                                        alt="Reviewer"
                                                    />
                                                    ) : (
                                                    <img
                                                        className="lazy"
                                                        src={`${baseUrl}/${item.image}`}
                                                        alt="Reviewer"
                                                    />
                                                    )}
                                                </div>
                                                </div>
                                                <div className="col-md-10">
                                                <ul className="product-rating">
                                                    {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <i className={i + 1 <= item.rating ? "las la-star" : "lar la-star"}></i>
                                                    </li>
                                                    ))}
                                                </ul>
                                                <h5 className="reviewer-text">
                                                    {item.first_name} {item.last_name} -{" "}
                                                    <span>{new Date(item.created_at).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric"
                                                    })}</span>
                                                </h5>
                                                <p>{item.comment}</p>
                                                </div>
                                            </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Realated Product area starts */}
                <section className="product-tab-section mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-title style1 mar-bot-30">
                                    <h3>Related Products</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-slider-wrapper v1 swiper-container">
                                    <div className="swiper-wrapper">
                                        {categoryWiseProducts.map((product, index) => (
                                            <div className="swiper-slide" key={index}>
                                                <form key={index} action="/" className="addToCart" method="post">
                                                    <input type="hidden" name="product_id" value={product.productId} />
                                                    <input type="hidden" name="product_slug" value={product.slug} />
                                                    <input type="hidden" name="category_id" value={category.id} />
                                                    <input type="hidden" name="qty" value="1" />

                                                        <div className="single-product-wrapper">
                                                            <div className="single-product-item">
                                                                <Link className="product-name" href={`product/${product.slug}`}>
                                                                    <Image
                                                                        alt="Product Image"
                                                                        src={product.mediumImage}
                                                                        className="lazy"
                                                                        width={720}
                                                                        height={660}
                                                                    />
                                                                </Link>

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
                                                                            data-category_id={category.id}
                                                                            data-qty="1"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            title="Add to wishlist">
                                                                        </span>
                                                                    </a>
                                                                </div>

                                                                <div className="product-details">
                                                                    <a className="product-name" href={`${product.slug}/${category.id}`}>
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
                                                                                        <del>
                                                                                            <CurrencyFormat priceValue={product.price} generalSettings={generalSettings}></CurrencyFormat>
                                                                                        </del>
                                                                                    </span>
                                                                                    
                                                                                    <span className="promo-price">
                                                                                        <CurrencyFormat priceValue={product.specialPrice} generalSettings={generalSettings}></CurrencyFormat>
                                                                                    </span>
                                                                                </>
                                                                            ) : (
                                                                                <span className="promo-price">
                                                                                    <CurrencyFormat priceValue={product.price} generalSettings={generalSettings}></CurrencyFormat>
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
                            {/* Add Pagination  */}
                            <div className="product-navigation">
                                <div className="product-button-next v1"><i className="ti-angle-right"></i></div>
                                <div className="product-button-prev v1"><i className="ti-angle-left"></i></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}