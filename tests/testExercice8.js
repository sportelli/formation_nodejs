/*
* Frameworks de tests utilisés :
* - Chai: permet de faire nos assertions (expect plutôt que assert)
* - Sinon : pour créer des mocks
* - Chai : exécutable pour lancer les tests (describe, it ...)
* Pour lancer les tests: mocha tests --recursive --watch (depuis la racine)
*/

const chai = require('chai');
const expect = chai.expect;
const {PanierManager} = require('./../exercices/exercice8.js');

describe('PanierManager sans mock', function () {
    it('getMontantPanier() doit renvoyer 0 au début', function () {
        const panierManager = new PanierManager();
        expect(panierManager.getMontantPanier()).to.equal(0);
    });
});
