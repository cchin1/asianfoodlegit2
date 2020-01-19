'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      author: "Bones",
      pictureurl: "https://gfycat.com/totalphonyfallowdeer",
      rating: 3,
      restaurant: "Primal",
      cuisine: "Raw Catfood",
      country: "USA",
      blurb: "Freeze Dried Cat Food",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      author: "Bishop",
      pictureurl: "https://gfycat.com/hollowdigitalcorydorascatfish",
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
