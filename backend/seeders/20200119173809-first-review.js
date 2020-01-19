'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      author: "Bones",
      pictureurl: "https://i.giphy.com/media/zm1Hm7xViBfG/giphy.webp",
      rating: 3,
      restaurant: "Primal",
      cuisine: "Raw Catfood",
      country: "USA",
      blurb: "Freeze Dried Cat Food",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      author: "Bishop",
      pictureurl: "https://media0.giphy.com/media/tbMG1SxlOIIF2/giphy.gif?cid=790b7611b152b4df06208b57f64eb192d7d1231e1d3650c5&rid=giphy.gif",
      rating: 3,
      restaurant: "Mideast Feast",
      cuisine: "Shredded Fish",
      country: "USA",
      blurb: "Canned Shredded Herring",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    // TODO - this doesn't work
    return queryInterface.bulkDelete(
        'Reviews',
        {[Sequelize.Op.or]: [{author: "Bones"}, {author: "Bishop"}]}
    );
  }
};
