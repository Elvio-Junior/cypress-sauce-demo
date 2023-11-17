import validateJson from '../../util/jsonValidator';

describe('Suite test CEP API', () => {
    let viaCepSchema;
    let viaCepSchemaError;
    let ceps;

    before(() => {
        cy.fixture('backend/viaCepSchema.json').then(testData => {
            viaCepSchema = testData;
        });

        cy.fixture('backend/viaCepSchemaError.json').then(testData => {
            viaCepSchemaError = testData;
        });

        cy.fixture('backend/ceps.json').then(testData => {
            ceps = testData;
        });
    });

    it('Get info with valid cep', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('urlCep')}/${ceps.cepValido}/json/`
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.cep).to.equal('14400-010');
            expect(response.body.logradouro).to.equal('Rua Homero Pacheco Alves');
            expect(response.body.complemento).to.equal('até 2799/2800');
            expect(response.body.bairro).to.equal('Centro');
            expect(response.body.localidade).to.equal('Franca');
            expect(response.body.uf).to.equal('SP');
            expect(response.body.ibge).to.equal('3516200');
            expect(response.body.gia).to.equal('3104');
            expect(response.body.ddd).to.equal('16');
            expect(response.body.siafi).to.equal('6425');
            expect(validateJson(response.body, viaCepSchema)).to.be.true;
        })
    });

    it('Get info with invalid cep', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('urlCep')}/${ceps.cepInvalido}/json/`
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.erro).to.be.true;
            expect(validateJson(response.body, viaCepSchemaError)).to.be.true;
        })
    });
})
