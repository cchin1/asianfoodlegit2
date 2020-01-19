#/bin/bash
MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
BACKEND_DIR="${MY_DIR}/.."

cd "${BACKEND_DIR}"
npx sequelize-cli model:generate \
	--name Review \
	--attributes \
	author:string,pictureurl:string,rating:integer,restaurant:string,cuisine:string,country:string,blurb:text


    # id: {
    #   type: Sequelize.INTEGER,
    #   autoIncrement: true,
    #   primaryKey: true
    # },
    # author: Sequelize.STRING,
    # pictureurl: Sequelize.STRING,
    # rating: Sequelize.INTEGER,
    # restaurant: Sequelize.STRING,
    # cuisine: Sequelize.STRING,
    # country: Sequelize.STRING,
    # blurb: Sequelize.TEXT,