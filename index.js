function Bannerator() {
    this.bannerText = ['Bannerator loves you!'];
    this.bannerSurround = '*';
}

Bannerator.prototype = {
    setBannerText: function (bannerText) {
        if(typeof bannerText === 'string') {
            this.bannerText = [bannerText];
        } else if(Array.isArray(bannerText)) {
            this.bannerText = bannerText;
        } else {
            throw new TypeError('Banner text must be a a string or an array');
        }
    },

    setBannerSurround: function (bannerSurround) {
        if(typeof bannerSurround === 'string') {
            this.bannerSurround = bannerSurround;
        } else {
            throw new TypeError('Banner surround text must be a string');
        }
    },

    buildBannerSurroundValue: function () {
        let surroundValue = '';
        const repeatCount = Math.floor(80 / this.bannerSurround.length);

        for(let i = 0; i <= repeatCount; i++) {
            surroundValue += this.bannerSurround;
        }

        return surroundValue;
    },

    displayBanner: function () {
        const randomIndex = Math.floor(Math.random() * this.bannerText.length);
        const bannerItem = this.bannerText[randomIndex];
        const bannerSurroundValue = this.buildBannerSurroundValue();

        console.log(bannerSurroundValue);
        console.log('');
        console.log(bannerItem);
        console.log('');
        console.log(bannerSurroundValue);
    }
};

function buildBannerator() {
    return new Bannerator();
}

module.exports = {
    buildBannerator
};