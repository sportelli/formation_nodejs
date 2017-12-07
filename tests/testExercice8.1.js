const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const {PanierManager} = require('./../exercices/exercice8.js');

let panierManager = null;

describe('PanierManager', function () {
    // Définition de nos Stubs
    beforeEach(function () {
        panierManager = new PanierManager();
        // On créé un "fake" comportement pour la méthode ajoute
        // pas encore développé ("Test Driven Development")
        sinon.stub(panierManager, 'ajoute').callsFake(function (produit) {
            panierManager.panier.push(produit);
            panierManager.total += produit.prix;
        });
        // La méthode vider doit renvoyer OK si entier, sinon doit
        // lancer une exception
        sinon.stub(panierManager, 'vider').callsFake(function () {
            if (panierManager.panier.length > 0) {
                panierManager.panier = [];
            } else {
                throw new Error("Panier vide");
            }
        });
    });
    // Maintenant listons nos tests:
    it('getMontantPanier() doit renvoyer 0 au début', function () {
        expect(panierManager.getMontantPanier()).to.equal(0);
    });
    it('getMontantPanier() doit renvoyer le prix du produit ajouté', function () {
        panierManager.ajoute({"produit": "formation NodeJS", "prix": 2000});
        expect(panierManager.getMontantPanier()).to.equal(2000);
    });
    it('vider() doit vider le panier', function () {
        expect(panierManager.vider).to.throw(Error);
        expect(panierManager.vider).to.throw("Panier vide");
    });    
    it('vider() doit jeter une exception si le panier est vide', function () {
        panierManager.ajoute({"produit": "formation NodeJS", "prix": 2000});
        panierManager.vider();
        expect(panierManager.panier.length).to.equal(0);
    });
});
