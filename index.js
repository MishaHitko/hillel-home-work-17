class Symbol {
    constructor(smile, wrapper) {
        this.smile = smile;
        this.wrapper = wrapper;
        this.countVotes = 0;

        this.createElement();
        this.vote();
    };

    createElement() {
        const block = document.createElement('div');
        this.blockSmile = document.createElement('span');
        this.count = document.createElement('p');

        this.blockSmile.innerHTML = this.smile;
        this.count.innerText = this.countVotes;

        block.classList.add('blockSmile');
        this.blockSmile.classList.add('smiles');

        this.wrapper.append(block);
        block.append(this.blockSmile);
        block.append(this.count);
    };

    vote() {
        this.blockSmile.addEventListener('click', () => {
            this.countVotes += 1;
            this.count.innerText = this.countVotes;
        });
    };
};
const wrapper = document.querySelector('.wrapper');

const elem1 = new Symbol('&#9875;', wrapper);
const elem2 = new Symbol('&#9990;', wrapper);
const elem3 = new Symbol('&#9884;', wrapper);
const elem4 = new Symbol('&#10026;', wrapper);
const elem5 = new Symbol('&#9787;', wrapper);