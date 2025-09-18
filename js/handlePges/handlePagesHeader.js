
export function displayHeader(sectionNameClass , sectionTitleClass , headerCaption , headerText , headerImg , sectionBody) {
    
    return `
        <section class="${sectionNameClass} mb-5" style="background: linear-gradient(rgba(0,0,0,0.4) , rgba(0,0,0,0.4)) , url('${headerImg}') center center / 100% 100% no-repeat">
            <div class="${sectionTitleClass}">
                <h1 class="me-3">${headerCaption}</h1>
                <h2>${headerText}</h2>
            </div>
                                
            <div class="body-arrow-container">
                <div class="page-body-arrow">
                    <a href="/#${sectionBody}">
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>
                </div>
            </div>
        </section>
    `
}


