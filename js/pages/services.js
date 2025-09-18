import { displayHeader } from "../handlePges/handlePagesHeader.js";

export default function renderServicesPage(container) {
    container.innerHTML= `
    <div class="services-page">
    
        <!-- SERVICES-LAYOUT SECTION -->
        ${displayHeader('services-layout' , 'services-title' , 'what we do' , 'Our Services' , 'Aseets/services/services-bg.jpg' , 'services-body')};

        <!-- SERVICES-INTRTO SECTION -->       
        <section class="services-intro my-5">
            <div class="container">
                <div class="col-lg-12">
                    <p>
                        At El-Gamal Group, we pride ourselves on delivering a diverse portfolio of high-quality construction and engineering services designed to meet the evolving demands of modern infrastructure.
                    </p>
                    <p>
                        Our core offerings include general construction, roads and bridges, infrastructure development, canal lining, maintenance and restoration, as well as finishing and interior decoration. Each service is executed with precision, using innovative methods, top-grade materials, and industry-best practices.
                    </p>
                    <p>
                        Backed by a legacy of excellence and a team of seasoned professionals, we ensure that every project — whether large-scale or specialized — is delivered on time, within budget, and to the highest standards. Our commitment to integrity, efficiency, and sustainability drives our success across Egypt and the wider region.
                    </p>
                </div>
            </div>
        </section>

        <!-- DISPLAYING EACH-SERVICES SECTION -->       
        <section class="services-cards-sec" id="services-cards">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img">
                                <img class="img-fluid" src="Aseets/services/service-7.jpg" alt="CONSTRUCTION">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Construction</h3>
                                <p>
                                    We provide comprehensive construction services that focus on quality, safety, and long-term value. Our work covers a wide range of building types to meet the diverse needs of modern communities. These include:
                                </p>
                                <ul class="fa-ul">
                                    <li><i class="fa-solid fa-house-chimney"></i> Residential buildings</li>
                                    <li><i class="fa-solid fa-building"></i> Commercial complexes</li>
                                    <li><i class="fa-solid fa-school"></i> Educational buildings</li>
                                    <li><i class="fa-solid fa-landmark"></i> Service and governmental buildings</li>
                                </ul>
                                <p>
                                    With a dedicated team and a commitment to excellence, every project is delivered with precision and attention to detail—from planning to final execution.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Roads and bridges</h3>
                                <p>
                                    Encompassing all stages of road project development, this service covers the implementation of infrastructure networks as well as the construction of bridges designed for both pedestrian and vehicular use. Every element is delivered with precision and adherence to the highest engineering and safety standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img img-1">
                                <img class="img-fluid" src="Aseets/services/service-8.jpg" alt="Roads pic">
                            </div>
                            <div class="service-img img-2">
                                <img class="img-fluid" src="Aseets/services/service-9.jpg" alt="Bridges pic">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img">
                                <img class="img-fluid" src="Aseets/services/service-10.jpg" alt="Infrastructure pic">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Infrastructure</h3>
                                <p>
                                    Infrastructure services cover all the essential groundwork needed for successful development. This includes building complete networks for water, sewage, electricity, and communication systems. The work also involves treating the soil and preparing roads to ensure long-lasting and reliable results in any project environment.
                                </p>
                                <ul class="fa-ul">
                                    <li><i class="fa-solid fa-water"></i> Installation of water networks</li>
                                    <li><i class="fa-solid fa-toilet"></i> Sewage systems implementation</li>
                                    <li><i class="fa-solid fa-bolt"></i> Electricity networks setup</li>
                                    <li><i class="fa-solid fa-wifi"></i> Communication infrastructure</li>
                                    <li><i class="fa-solid fa-mountain"></i> Soil treatment and stabilization</li>
                                    <li><i class="fa-solid fa-road"></i> Associated road works</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Lining of canals </h3>
                                <p>
                                    Lining of canals helps improve water flow and reduce seepage losses. It involves reinforcing canal walls using durable materials like concrete or special membranes. This process protects against erosion, enhances water conservation, and ensures the efficient delivery of water for agricultural and public use. It also reduces the need for frequent maintenance and supports long-term infrastructure stability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img">
                                <img class="img-fluid" src="Aseets/services/service-11.jpg" alt="Roads and bridges">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img">
                                <img class="img-fluid" src="Aseets/services/service-12.jpg" alt="Roads and bridges">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Maintenance and restoration</h3>
                                <p>
                                    Preserving the structural integrity and extending the lifespan of buildings requires meticulous maintenance and timely restoration. This includes repairing damaged elements, reinforcing worn-out areas, restoring architectural details, and ensuring that facilities remain safe, functional, and aligned with evolving standards.
                                </p>
                            </div>
                        </div>
                    </div>
                

                    <div class="col-lg-6 my-3">
                        <div class="service-content d-flex w-100 h-100 align-items-center">
                            <div class="service-card">
                                <h3>Finishing and decoration</h3>
                                <p>
                                    Attention to detail and visual harmony define this stage of construction.
                                </p>
                                <p>
                                    It involves meticulous execution of various finishing elements that enhance both function and aesthetics:
                                </p>
                                <ul class="fa-ul">
                                    <li><i class="fa-solid fa-border-all"></i> Plastering and surface smoothing</li>
                                    <li><i class="fa-solid fa-paint-roller"></i> Painting for interiors and exteriors</li>
                                    <li><i class="fa-solid fa-th-large"></i> Tiling and flooring installation</li>
                                    <li><i class="fa-solid fa-border-top-left"></i> Ceiling treatments and false ceilings</li>
                                    <li><i class="fa-solid fa-brush"></i> Decorative elements tailored to each space</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 my-3">
                        <div class="service-content">
                            <div class="service-img">
                                <img class="img-fluid" src="Aseets/services/service-13.jpg" alt="Roads and bridges">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
    `;
}