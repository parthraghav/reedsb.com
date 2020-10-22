class Carousel {

    constructor(element) {

        this.board = element

        this.action_wrapper = '#wrapper'

        // add first two cards programmatically
        this.push()
        this.push()

        // handle gestures
        this.handle()

        // to add toggle modal functionality
        this.releasedTaps = 0

        // for animations
        this.transition_speed = 5000
        this.board_colors = {
        	DEFAULT: '#ECEFF1',
        	POSITIVE: '#28A745',
        	NEGATIVE: '#DC3545',
        	BOOST: '#E83E8C'
        }

        this._center_el( this.action_wrapper );
        $(window).on('resize',(function(){
        	console.log('ddd');
        	this._center_el( this.action_wrapper );
    	}).call(this));

    }

    handle() {

        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length-1]

        // get next card
        this.nextCard = this.cards[this.cards.length-2]

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({ position: Hammer.position_ALL, threshold: 0 }))

            // pass events data to custom callbacks
            this.hammer.on('tap', (e) => { this.onTap(e) })
            this.hammer.on('pan', (e) => { this.onPan(e) })

        }

    }

    onTap(e) {

        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        // get degree of Y rotation (+/-15 degrees)
        let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        // change the transition property
        this.topCard.style.transition = 'transform 100ms ease-out'

        // rotate
        this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)'

        if (++this.releasedTaps % 2) {
        	this.topCard.classList.remove('card--expanded');
        	$(this.topCard).animate({ scrollTop: 0 }, "fast");
        } else if (!this.isPanning) {
        	this.topCard.classList.add('card--expanded');
        }

        // wait transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom = (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // calculate new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // calculate rotation, between 0 and +/- 45 deg
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // calculate scale ratio, between 95 and 100 %
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move top card
        this.topCard.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale next card
        if (this.nextCard) this.nextCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 200ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'



            // check threshold
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                // get left border position
                posX = - (this.board.clientWidth + this.topCard.clientWidth)

            } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {

                successful = true
                // get top border position
                posY = - (this.board.clientHeight + this.topCard.clientHeight)

            }

            if (successful) {

                // throw card in the chosen direction
                this.topCard.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // add new card
                    this.push()
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position
                this.topCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'

            }

        }

    }

    push() {
    	// get list of all current candidates

        let card = document.createElement('div');
        let cardBody = document.createElement('div');
        card.classList.add('card');

        let cardImage = document.createElement('img');
        cardImage.setAttribute('draggable', false);
        cardImage.classList.add('card-img-top');
        cardImage.src = "https://picsum.photos/286/180/?random=" + Math.round(Math.random()*1000000);
        cardImage.alt = Math.round(Math.random()*1000000) + "')";

        function text_node_generator(el, cls, txt = undefined) {
        	var h = document.createElement(el);
        	var t = document.createTextNode(txt);
        	for (var i = 0; i < cls.length; i++) {
        		h.classList.add(cls[i]);
        	}
        	if (typeof(txt) != undefined) {
        		h.appendChild(t);
        	}
        	return h
        }

        var title = text_node_generator( 'H3', ['card-title'], 'Farming Club' );
        var founders_area = $('<p class="h6"></p>');
        var description = text_node_generator( 'P', ['card-text', 'vt-text', 'lt-text'], "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." );

        cardBody.classList.add('lt-cont', 'card-body');


        var founders = [{name:'Parth Raghav',email:'raghavp@reed.edu'},{name:'Nama Shitushah',email:'namas@reed.edu'}];

        for (var i = 0; i < founders.length; i++) {
        	founders_area.append( $('<span>' + founders[i].name + ' <b>(' + founders[i].email + ')</b></span>') );
        	if (i < founders.length - 1) {
        		founders_area.append('<br>');
        	}
        }

        cardBody.appendChild(title);
        cardBody.appendChild(founders_area[0]);
        cardBody.appendChild(description);

        card.appendChild(cardImage);
        card.appendChild(cardBody);

        if (this.board.firstChild) {
            this.board.insertBefore(card, this.board.firstChild)
        } else {
            this.board.append(card)
        }

    }

    // private functions
    _center_el(el) {
    	$(el).css("position","absolute");
    	//$(el).css("top", Math.max(0, (($(window).height() - $(el).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    	$(el).css("bottom", '10%');
    	$(el).css("left", Math.max(0, (($(window).width() - $(el).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    }

}


$(document).ready(function(){

	var board = document.querySelector('#board')

	var carousel = new Carousel(board)

})
