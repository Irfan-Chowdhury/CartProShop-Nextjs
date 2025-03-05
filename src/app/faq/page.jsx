import { getFaqData } from "@/server/faq";

export default async function FAQ() {

  const faqData = await getFaqData();

  return (
    <div>
      <section className="faq-section">
        <div className="container">

          <div className="row col-12">
            <h1 className="page-title h2 text-center uppercase mb-5">Frequently Asked Questions</h1>
          </div>

          <div className="row mb-5">
            <div className="col-3"></div>
            <div className="col-6 d-none d-lg-flex d-xl-flex middle-column justify-content-center">
              <form className="header-search" action="" method="GET">
                <input type="text" list="browsers" placeholder="Search" name="search_faq" />
                <button className="btn btn-search" type="submit"><i className="ti-search"></i></button>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
          
          <div className="row">
            <div className="col-md-12 single-faq-section mar-tb-30">
              {faqData.map((faqType, key) => (
                <div key={key} className="row">
                  <div className="col-md-3 col-sm-12 ">
                    <h3 className="title" data-bs-toggle="collapse" href={`#collapseShipping-${key}`} aria-expanded="true">{faqType.typeName} <i className="bi bi-arrow-right"></i></h3>
                    
                  </div>
                  <div className="col-md-9 col-sm-12 collapse show" id={`collapseShipping-${key}`}>
                    {faqType.faqs.map((faq, key2) => (
                      <div key={key2} className="row single-faq-item">
                        <div className="col-md-6">
                          <div className="faq-query ">
                            <h5>{faq.title}</h5>
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="faq-ans ">
                            <p>{faq.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
