
class InfiniteScroll {
    constructor(ref_element, callback) {
        this.ref_element = ref_element
        this.element = null
        this.callback = callback
        this.loading = false
        this.lenght = 20
        this.offset = 0
        // this.fetchTheData(true)
        this.initial_scroll = { scrollHeight: 0, clientHeight: 0, scrollTop: 0 }
    }

    async fetchTheData(fresh = false) {

        //when first call of data
        if (this.element == null) {
            this.element = this.ref_element.current
            console.log({ "client": this.element.clientHeight, "scroll-height": this.element.scrollHeight }, 'from start');
            this.initial_scroll = { scrollHeight: this.element.scrollHeight, clientHeight: this.element.clientHeight, scrollTop: this.element.scrollTop }
            this.element && this.element.addEventListener("scroll", () => {

                this.fetchTheData()

            });
        }
        // console.log({ "scolll-top": this.element.scrollTop, "scroll-height": this.element.scrollHeight, "client-height": this.element.clientHeight });
        // //when we want to fresh the page
        if (fresh == true) {
            this.loading = true
            this.offset = 0
            // this.element.scrollHeight = this.initial_scroll.scrollHeight
            // this.element.clientHeight = this.initial_scroll.clientHeight
            // this.element.scrollTop = this.initial_scroll.scrollTop
            // this.element.style.height = this.element.scrollHeight + 'px'

            this.callback(this.offset, this.lenght).then(() => {
                console.log('finished from fresh');
                this.loading = false
            })
            console.log('fresh');
            return true

        }

        // console.log('loading', this.checkIsEnd(), this.loading);
        //checking the data
        if (this.checkIsEnd() && this.loading == false) {
            console.log('hitted');
            this.loading = true

            this.offset += this.lenght
            await this.callback(this.offset, this.lenght).then(() => {
                console.log('finished');

                setTimeout(() => {
                    this.loading = false
                }, 2000);
            })


        }
    }
    checkIsEnd() {

        return this.element.scrollHeight - Math.round(this.element.scrollTop) <= this.element.clientHeight
    }
}

// const InfiniteScroll = (element, callback) => {


//     if (isEnd) {
//         callback()
//     }
//     return (
//         isEnd
//     )
// }

export { InfiniteScroll }