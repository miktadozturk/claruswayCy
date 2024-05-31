/// <reference types= "cypress" />

describe('Cypress File Islemleri Dersi', () => {
    it('File Upload Islemi - Pozitif Case', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })


        cy.get('#fileInput').should('be.visible').attachFile({filePath: "../fixtures/documents/testDocument.docx"})
        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });


    it('File Upload Islemi - Negatif Case', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })


        cy.get('#fileInput').should('be.visible').attachFile({filePath: "../fixtures/documents/examplePDF.pdf"})
        // if else eklenerek eger 500kb'den kucukse devam et buyukse hata mesaji al!!!
        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });

    it('File Upload Islemi - Ikinci yontem', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })

        const ornekDosya = "../fixtures/media/cypressLogo.png"

        cy.fixture(ornekDosya)
        .then(Cypress.Blob.base64StringToBlob) // convert islemi yapiliyor
        .then((fileContent) => {
            cy.get('#fileInput').attachFile(
                {fileContent, fileName: ornekDosya, mimeType:'image/**', encoding:'utf-8'}, {subjectType: 'input'})
        })

        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });
});

describe('Cypress ile File Download', () => {
    before(() => {
        cy.deleteDownloadsFolder()
    });


    it('File Download ve Delete Islemleri', () => {
        cy.visit('https://practice.expandtesting.com/download')
        cy.on('uncaught:exception', (err, runnable) => { return false })

        cy.wait(3000)

        cy.get('[data-testid="1715364403014_cat.jpg"]').click()
    });
});

describe('Write ve Read File islemleri', () => {
    it('Write File Ornek Calisma', () => {
        cy.writeFile('Documents/ornekDosya.docx', 'Hello World')

        cy.writeFile('Documents/notDefteri.txt', 'Hello World \n')
        cy.writeFile('Documents/notDefteri.txt', 'Cypress Derslerine devam ediyoruz. \n', {flag:"a+"})
        cy.writeFile('Documents/notDefteri.txt', 'Bugunku konumuz file islemleri', {flag:"a+"})
    });

    it('Read File Ornek Calisma', () => {
        cy.readFile('Documents/notDefteri.txt').should('contain', 'Hello World')
        cy.readFile('Documents/ornekDosya.docx').should('eq', "Hello World")
        cy.readFile('Documents/notDefteri.txt').then((yazi) => {
            expect(yazi).to.equal('Hello World \nCypress Derslerine devam ediyoruz. \nBugunku konumuz file islemleri')
        })
    });
});

describe('Web Scraping - 1', () => {
    it('Cypress ile veri yazdirma yada toplama', () => {
        cy.visit('https://practice.expandtesting.com/my-browser')

        cy.get('#browser-toggle').as('button').should('be.visible').click().then(() => {
            cy.get('@button').should('be.visible').and('have.text', 'Hide Browser Information')
            // sonuclar bos arrayini olusturduk
            const sonuclar = []
            // secilen selectore takma isim atandi
            cy.get('#browser-info tr > td').as('tabloBilgiler')
            // takma isim ile donguye alinip loglandi ve sonuclar arrayinin icerisine push edildi
            cy.get('@tabloBilgiler').each(($el, index) => {
                cy.log("Sonuc: " + index + " - " + $el.text())
                sonuclar.push($el.text())
            })
            // burada elde edilen sonuclar sonuclar.txt dosyasina yazdirildi.
            .then(() => {
                cy.writeFile('Documents/sonuclar.txt', sonuclar)
            })
        })
    });
});

describe('Web Scraping - 2', () => {
    it('Cypress ile veri yazdirma yada toplama', () => {
        cy.visit('https://practice.expandtesting.com/my-browser')

        cy.get('#browser-toggle').as('button').should('be.visible').click().then(() => {
            cy.get('@button').should('be.visible').and('have.text', 'Hide Browser Information')
            // sonuclar bos arrayini olusturduk
            const sonuclar2 = []
            // secilen selectore takma isim atandi
            cy.get('tbody tr td b').as('tabloBilgiler2')
            // takma isim ile donguye alinip loglandi ve sonuclar arrayinin icerisine push edildi
            cy.get('@tabloBilgiler2').each(($el, index) => {
                cy.log("Sonuc: " + index + " - " + $el.text())
                sonuclar2.push($el.text())
            })
            // burada elde edilen sonuclar sonuclar.txt dosyasina yazdirildi.
            .then(() => {
                cy.writeFile('Documents/sonuclar2.docx', sonuclar2)
            })
        })
    });
});
