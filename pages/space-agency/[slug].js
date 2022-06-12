import { SEO } from "@components/common";
import Image from 'next/image'
import { OrganizationJsonLd } from 'next-seo';

function Pagetwo({ agenciesDatatwo, sluga }) {
  //console.log(agenciesDatatwo)
  return (
    <>
      <SEO
        cano="si"
        slug={`space-agency/${sluga}`}
        description={agenciesDatatwo.description}
        title={`${agenciesDatatwo.name}`}
        imageUrl={agenciesDatatwo.logo_url ? agenciesDatatwo.logo_url : ""}
      />
      <OrganizationJsonLd
        type={agenciesDatatwo.type}
        id={`space-agency/${sluga}#`}
        logo={agenciesDatatwo.logo_url}
        legalName={agenciesDatatwo.name}
        name={agenciesDatatwo.name}
        address={{
          streetAddress: `${agenciesDatatwo.country_code}`,
          addressLocality: `${agenciesDatatwo.country_code}`,
          addressRegion: `${agenciesDatatwo.country_code}`,
          postalCode: `${agenciesDatatwo.country_code}`,
          addressCountry: `${agenciesDatatwo.country_code}`,
        }}
        contactPoint={[
          {
            telephone: '+1-401-555-1212',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish', 'French'],
          },
          {
            telephone: '+1-877-746-0909',
            contactType: 'customer service',
            contactOption: 'TollFree',
            availableLanguage: 'English',
          },
          {
            telephone: '+1-877-453-1304',
            contactType: 'technical support',
            contactOption: 'TollFree',
            areaServed: ['US', 'CA'],
            availableLanguage: ['English', 'French'],
          },
        ]}
        sameAs={[`https://firststepintospace.com/space-agency/${sluga}`]}
        url="https://www.firststepintospace.com/"
      />


      <div className=" max-w-7xl mt-12 mx-auto px-4 sm:px-6 sm:px-6 display flex flex-col items-start">
        {agenciesDatatwo ? (
          <>
            <figure className="flex flex-col" key={agenciesDatatwo.id}>
              <h1 className="text-3xl mb-8 font-bold text-yellow-600 font-display">
                {agenciesDatatwo.name}
              </h1>
              {agenciesDatatwo.logo_url ?
                <Image
                  className="mb-4 emma sm:h-full md:h-5/6 object-cover flex"
                  src={agenciesDatatwo.logo_url}
                  alt={agenciesDatatwo.name}
                  width="150"
                  height="150"
                  layout="intrinsic"
                />
                : ""
              }


              <figcaption>
                <p className="mt-14 mb-2">
                  <b className="font-extrabold">Founded:</b>&nbsp;{agenciesDatatwo.founding_year}
                </p>
                <p className="mb-2" >
                  <b className="font-extrabold">Type:</b>&nbsp;{agenciesDatatwo.type}
                </p>
                <p className="mb-2" >
                  <b className="font-extrabold">Total launch count:</b>&nbsp;{agenciesDatatwo.totale_launch_count}
                </p>
                <p className="mb-2" >
                  < b className="font-extrabold">Administrator:</b>&nbsp;
                  {agenciesDatatwo.administrator ||
                    "none"}
                </p>
                <p className="mb-2" >
                  <b className="font-extrabold">Nationality:</b>&nbsp;{agenciesDatatwo.country_code}
                </p>
                <p>
                  <b className="font-extrabold">Description:</b>&nbsp;{agenciesDatatwo.description}
                </p>


              </figcaption>
            </figure>
            <hr />
            {console.log(agenciesDatatwo.launcher_list)}
            {agenciesDatatwo.launcher_list.map((item) => {

              <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                  <h2 classAName="accordion-header mb-0" id="headingOne">
                    <button class="
      accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      border-0
      rounded-none
      transition
      focus:outline-none
bg-gray-800 text-white text-xs font-bold uppercase rounded
    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      {item.full_name}
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                      <p >
                        <b className="font-extrabold">Successful launches:</b>&nbsp;{item.successful_launches}
                      </p>
                      <img src={item.image_url} width="350" height="350" alt={item.title} />
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>

              </div>
            })}


          </>
        ) : (
          agenciesDatatwo.detail
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  const apiResponsera = await fetch(
    `https://ll.thespacedevs.com/2.2.0/agencies/${pageNumber}/`
  );

  const datap = await apiResponsera.json();

  return {
    props: {
      agenciesDatatwo: datap,
      sluga: pageNumber
    },
  };
};

export default Pagetwo;
