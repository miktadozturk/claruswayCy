describe('Cypress Google Lighthouse Test', () => {
    it('Lighthouse performance test', () => {
        cy.visit('https://practice.expandtesting.com/my-browser')
        cy.lighthouse(
            {
                performance: 60,
                accessibility: 80,
                "best-practices": 80,
                seo: 80
            },
            {
                formFactor: 'desktop',
                screenEmulation: {
                    mobile: false,
                    disable: false,
                    width: 1000,
                    height: 1000,
                    deviceScaleRatio: 1,
                }
            }
        )
    });

    it('Lighthouse performance test - 2', () => {
        cy.visit('https://practice.expandtesting.com/')

        const siteThreshold = {
            performance: 50,
            accessibility: 79,
            "best-practices": 60,
            seo: 70
        }

        const masaustuConfig = {
            formFactor: 'desktop',
            screenEmulation: {
                mobile: false,
                disable: false,
                width: 1000,
                height: 1000,
                deviceScaleRatio: 1,
            }
        }

        cy.lighthouse(siteThreshold, masaustuConfig)
    });
});